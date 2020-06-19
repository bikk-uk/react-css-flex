"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexWrapper = void 0;
const react_1 = __importDefault(require("react"));
const Flex_1 = __importDefault(require("./Flex"));
const FlexItem_1 = __importDefault(require("./FlexItem"));
class FlexWrapper extends react_1.default.Component {
    render() {
        return react_1.default.createElement(Flex_1.default, Object.assign({}, this.props));
    }
}
exports.FlexWrapper = FlexWrapper;
FlexWrapper.Item = FlexItem_1.default;
exports.default = FlexWrapper;
