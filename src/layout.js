import { layoutData } from "./clock.js";


export function createLayout(doc = document) {
    const clockElement = doc.getElementById("clock");
    for(let row of layoutData) {
        const rowElement = doc.createElement('div');
        rowElement.className = 'row';
        for(let item of row) {
            const itemElement = doc.createElement('div');
            itemElement.innerHTML = item.val.toUpperCase()  ;
            itemElement.className = item.classes.join(' ');
            rowElement.appendChild(itemElement);
        }
        clockElement.appendChild(rowElement);
    }
}

let highlights = [];

export function highlightWord(word, doc = document) {
    highlights.push(word);
    const items = doc.getElementsByClassName(word)
    for(let element of items){
        element.classList.add("highlighted");
    };
}

export function resetHighlight(doc = document) {
    for(let word of highlights) {
        const items = doc.getElementsByClassName(word)
        for(let element of items){
            element.classList.remove("highlighted");
        };
    }
    highlights = [];
}