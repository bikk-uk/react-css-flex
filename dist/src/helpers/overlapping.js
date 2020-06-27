"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOverlapping = void 0;
exports.checkOverlapping = (propName, ...props) => {
    let foundOne = false;
    props.forEach((prop) => {
        if (prop) {
            if (foundOne) {
                console.warn(`[@react-css/flex] Multiple values have been provided for ${propName}.`);
                return;
            }
            foundOne = true;
        }
    });
};
