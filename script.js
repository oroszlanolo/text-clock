import timeToString from "./timeToString.js";
import {createLayout, highlightWord, resetHighlight} from "./layout.js";

createLayout();

function updateLayout() {
    resetHighlight();
    const date = new Date();
    const timeString = timeToString(date, "-perc");
    timeString.split(' ').forEach(word => {
        highlightWord(word);
    });
}



updateLayout(updateLayout, 1000);