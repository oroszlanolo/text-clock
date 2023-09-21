
const hourStrings = [
    "tizenkettő",
    "egy",
    "kettő",
    "három",
    "négy",
    "öt",
    "hat",
    "hét",
    "nyolc",
    "kilenc",
    "tíz",
    "tizenegy",
    "tizenkettő",
    "egy"
]

const minStrings = [];
minStrings[5] = "öt";
minStrings[10] = "tíz";



export default function timeToString(date, minsAffix = "") {
    let [hours, mins] = normalizeTime(date);

    switch(mins) {
        case 0:
            return `${hourStrings[hours]} óra van`;
        case 5:
        case 10:
            return `${hourStrings[hours]} óra múlt ${minStrings[mins]}${minsAffix} perccel`;
        case 15:
            return `negyed ${hourStrings[hours + 1]} van`;
        case 20:
        case 25:
            return `fél ${hourStrings[hours + 1]} lesz ${minStrings[30 - mins]}${minsAffix} perc múlva`;
        case 30:
            return `fél ${hourStrings[hours + 1]} van`;
        case 35:
        case 40:
            return `fél ${hourStrings[hours + 1]} múlt ${minStrings[mins - 30]}${minsAffix} perccel`;
        case 45:
            return `háromnegyed ${hourStrings[hours + 1]} van`;
        case 50:
        case 55:
            return `${hourStrings[hours + 1]} óra lesz ${minStrings[60 - mins]}${minsAffix} perc múlva`;
        default:
            return `${hourStrings[hours]} óra múlt ${mins} perccel`;
    }
}

function normalizeTime(date) {
    let hours = date.getHours();
    let mins = date.getMinutes();
    if(mins > 57) {
        hours++;
    }
    mins = Math.round(mins / 5) * 5 % 60;
    hours = hours > 12 ? hours - 12 : hours;
    return [hours, mins];
}

