
const hourStrings = [
    "nulla",
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
    "tizenkettő"
]


export default function timeToString(date) {
    let [hours, mins] = normalizeTime(date);
    if(mins == 0)
        return wholeHourString(hours);
    if(mins === 15)
        return quarterString(hours);
    if(mins === 30)
        return halfString(hours);
    if(mins === 45)
        return threequarterString(hours);

    switch(mins) {
        case 5:
        case 10:
            return `${hours} óra múlt ${mins} perccel`;
        case 15:
            return `${hours} óra múlt ${mins} perccel`;
        case 20:
            return `${hours} óra múlt ${mins} perccel`;
        case 25:
            return `${hours} óra múlt ${mins} perccel`;
        case 30:
            return `${hours} óra múlt ${mins} perccel`;
        case 35:
            return `${hours} óra múlt ${mins} perccel`;
        case 40:
            return `${hours} óra múlt ${mins} perccel`;
        case 45:
            return `${hours} óra múlt ${mins} perccel`;
        case 50:
            return `${hours} óra múlt ${mins} perccel`;
        case 55:
            return `${hours} óra múlt ${mins} perccel`;
    }
}

function normalizeTime(date) {
    let hours = date.getHours();
    let mins = date.getMinutes();
    if(mins > 57) {
        hours++;
    }
    mins = Math.round(mins / 5) * 5;
    hours = hours > 12 ? hours - 12 : hours;
    return [hours, mins];
}

function wholeHourString(hours) {
    return `${hourStrings[hours]} óra van`;
}
function quarterString(hours) {
    const hourToShow = hours == 12 ? 1 : hours + 1;
    return `negyed ${hourStrings[hourToShow]} van`;
}
function halfString(hours) {
    const hourToShow = hours == 12 ? 1 : hours + 1;
    return `fél ${hourStrings[hourToShow]} van`;
}
function threequarterString(hours) {
    const hourToShow = hours == 12 ? 1 : hours + 1;
    return `háromnegyed ${hourStrings[hourToShow]} van`;
}

