"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimUndefined = void 0;
exports.trimUndefined = (style) => {
    style = { ...style };
    Object.keys(style).forEach((key) => style[key] === undefined && delete style[key]);
    return style;
};
