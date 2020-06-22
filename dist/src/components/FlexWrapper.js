"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const react_1 = __importDefault(require("react"));
const FlexItem_1 = __importDefault(require("./FlexItem"));
const FlexContainer_1 = __importDefault(require("./FlexContainer"));
class Flex extends react_1.default.Component {
    render() {
        return react_1.default.createElement(FlexContainer_1.default, Object.assign({}, this.props));
    }
}
exports.Flex = Flex;
Flex.Item = FlexItem_1.default;
exports.default = Flex;
