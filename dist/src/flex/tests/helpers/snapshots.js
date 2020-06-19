"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchesSnapshot = void 0;
const react_1 = require("@testing-library/react");
exports.matchesSnapshot = (input, snapshot) => {
    const { container } = react_1.render(input);
    expect(container.firstChild).toMatchInlineSnapshot(snapshot);
};
