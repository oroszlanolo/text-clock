import { default as jsdom } from "jsdom";
import { default as test } from "unit.js";
import { createLayout, highlightWord, resetHighlight } from "../src/layout.js";
import { layoutData } from "../src/clock.js";


const { JSDOM } = jsdom;

describe("Layout tests", function () {
    let DOM;

    this.beforeEach(() => {
        return JSDOM.fromFile("./index.html", {
            runScripts: "dangerously",
            resources: "usable",
        }).then((dom) => {
            DOM = dom;
            createLayout(dom.window.document);
        });
    });

    it("the letters are correct on the layout", function () {
        for(let i = 0; i < DOM.window.document.querySelector(".clock").children.length; i++) {
            const row = DOM.window.document.querySelector(".clock").children[i];
            // console.log(row.children.length);
            for(let j = 0; j < row.children.length; j++) {
                test.string(row.children[j].textContent).isEqualTo(layoutData[i][j].val.toUpperCase());
            }
        }
    });

    it("the classes of the letters are correct on the layout", function () {
        for(let i = 0; i < DOM.window.document.querySelector(".clock").children.length; i++) {
            const row = DOM.window.document.querySelector(".clock").children[i];
            for(let j = 0; j < row.children.length; j++) {
                test.number(row.children[j].classList.length).isEqualTo(layoutData[i][j].classes.length);
                test.string(row.children[j].classList.value).isEqualTo(layoutData[i][j].classes.join(" "));
            }
        }
    });

    describe("highlight", function() {
        

        it("is highlighted correctly by default", function() {
            for(let i = 0; i < DOM.window.document.querySelector(".clock").children.length; i++) {
                const row = DOM.window.document.querySelector(".clock").children[i];
                for(let j = 0; j < row.children.length; j++) {
                    test.array(row.children[j].classList.value.split(" ")).notHasValue("highlighted");
                }
            }
        });

        it("highlightWord works correctly", function() {
            highlightWord("nyolc", DOM.window.document);
            for(let i = 0; i < DOM.window.document.querySelector(".clock").children.length; i++) {
                const row = DOM.window.document.querySelector(".clock").children[i];
                for(let j = 0; j < row.children.length; j++) {
                    if(layoutData[i][j].classes.includes("nyolc")) {
                        test.array(row.children[j].classList.value.split(" ")).hasValue("highlighted");
                    } else {
                        test.array(row.children[j].classList.value.split(" ")).notHasValue("highlighted");
                    }
                }
            }
        });

        it("resetHighlight works correctly", function() {
            highlightWord("nyolc", DOM.window.document);
            resetHighlight(DOM.window.document);
            for(let i = 0; i < DOM.window.document.querySelector(".clock").children.length; i++) {
                const row = DOM.window.document.querySelector(".clock").children[i];
                for(let j = 0; j < row.children.length; j++) {
                    test.array(row.children[j].classList.value.split(" ")).notHasValue("highlighted");
                }
            }
        });
    })
});
