"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
let App = (props) => {
    return (React.createElement("h1", null,
        React.createElement("p", null, "Welcome to App")));
};
exports.default = App;
