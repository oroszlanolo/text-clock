import timeToString from "./timeToString.js";
import {createLayout, highlightWord, resetHighlight} from "./layout.js";

createLayout();

let prevString;

function updateLayout() {
    const date = new Date();
    const timeString = timeToString(date, "-perc");
    if(prevString != timeString) {
        prevString = timeString;
        resetHighlight();
        timeString.split(' ').forEach(word => {
            highlightWord(word);
        });
    }
}


updateLayout();
setInterval(updateLayout, 1000);