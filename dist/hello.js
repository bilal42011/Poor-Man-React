"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const some_1 = __importDefault(require("./some"));
console.log("hello world");
let React = {
    createElement: (tag, props, children) => {
        if (typeof (tag) !== "function") {
            let element = { tag, props: Object.assign(Object.assign({}, props), { children }) };
            return element;
        }
        else {
            return tag(props);
        }
    }
};
console.log(React.createElement("div", { name: "div" },
    React.createElement(some_1.default, { name: "app" })));
