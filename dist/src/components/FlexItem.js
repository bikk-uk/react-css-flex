"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const overlapping_1 = require("../helpers/overlapping");
const trim_1 = require("../helpers/trim");
function FlexItem({ order, grow, shrink, basis, flex, alignSelfAuto, alignSelfStart, alignSelfEnd, alignSelfCenter, alignSelfBaseline, alignSelfStretch, alignSelf, style = {}, children, ...rest }) {
    const orderStyle = react_1.default.useMemo(() => {
        return order !== undefined ? { order: order } : {};
    }, [order]);
    const flexGrowStyle = react_1.default.useMemo(() => {
        return grow !== undefined ? { flexGrow: grow } : {};
    }, [grow]);
    const flexShrinkStyle = react_1.default.useMemo(() => {
        return shrink !== undefined ? { flexShrink: shrink } : {};
    }, [shrink]);
    const flexBasisStyle = react_1.default.useMemo(() => {
        return basis !== undefined ? { flexBasis: basis } : {};
    }, [basis]);
    const flexStyle = react_1.default.useMemo(() => {
        return flex !== undefined ? { flex: flex } : {};
    }, [flex]);
    const alignSelfStyle = react_1.default.useMemo(() => {
        if (alignSelf)
            return { alignSelf };
        overlapping_1.checkOverlapping('align-self', alignSelfAuto, alignSelfStart, alignSelfEnd, alignSelfCenter, alignSelfBaseline, alignSelfStretch);
        let value = null;
        if (alignSelfAuto)
            value = 'auto';
        else if (alignSelfStart)
            value = 'flex-start';
        else if (alignSelfEnd)
            value = 'flex-end';
        else if (alignSelfCenter)
            value = 'center';
        else if (alignSelfBaseline)
            value = 'baseline';
        else if (alignSelfStretch)
            value = 'stretch';
        return value ? { alignSelf: value } : {};
    }, [alignSelf, alignSelfAuto, alignSelfStart, alignSelfEnd, alignSelfCenter, alignSelfBaseline, alignSelfStretch]);
    const combinedStyle = trim_1.trimUndefined({
        ...orderStyle,
        ...flexGrowStyle,
        ...flexShrinkStyle,
        ...flexBasisStyle,
        ...flexStyle,
        ...alignSelfStyle,
        ...style,
    });
    return (react_1.default.createElement("div", Object.assign({ style: combinedStyle }, rest), children));
}
exports.default = FlexItem;
