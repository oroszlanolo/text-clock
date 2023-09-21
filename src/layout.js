import { layoutData } from "./clock.js";

const clockElement = document.getElementById("clock");

export function createLayout() {
    for(let row of layoutData) {
        const rowElement = document.createElement('div');
        rowElement.className = 'row';
        for(let item of row) {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = item.val.toUpperCase()  ;
            itemElement.className = item.classes.join(' ');
            rowElement.appendChild(itemElement);
        }
        clockElement.appendChild(rowElement);
    }
}

let highlights = [];

export function highlightWord(word) {
    highlights.push(word);
    const items = document.getElementsByClassName(word)
    for(let element of items){
        element.classList.add("highlighted");
    };
}

export function resetHighlight() {
    for(let word of highlights) {
        const items = document.getElementsByClassName(word)
        for(let element of items){
            element.classList.remove("highlighted");
        };
    }
    highlights = [];
}