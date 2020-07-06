"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const overlapping_1 = require("../helpers/overlapping");
const trim_1 = require("../helpers/trim");
function FlexContainer({ inline, row, rowReverse, column, columnReverse, flexDirection, wrap, noWrap, wrapReverse, flexWrap, justifyStart, justifyEnd, justifyCenter, justifySpaceBetween, justifySpaceAround, justifyContent, alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsBaseline, alignItemsStretch, alignItems, alignContentStart, alignContentEnd, alignContentCenter, alignContentSpaceBetween, alignContentSpaceAround, alignContentStretch, alignContent, flow, style = {}, children, ...rest }) {
    const displayStyle = react_1.default.useMemo(() => ({
        display: inline ? 'inline-flex' : 'flex',
    }), [inline]);
    const flexDirectionStyle = react_1.default.useMemo(() => {
        if (flexDirection)
            return { flexDirection };
        overlapping_1.checkOverlapping('flex-direction', row, rowReverse, column, columnReverse);
        let value = null;
        if (row)
            value = 'row';
        else if (rowReverse)
            value = 'row-reverse';
        else if (column)
            value = 'column';
        else if (columnReverse)
            value = 'column-reverse';
        return value ? { flexDirection: value } : {};
    }, [column, columnReverse, flexDirection, row, rowReverse]);
    const flexWrapStyle = react_1.default.useMemo(() => {
        if (flexWrap)
            return { flexWrap };
        overlapping_1.checkOverlapping('flex-wrap', wrap, noWrap, wrapReverse);
        let value = null;
        if (wrap)
            value = 'wrap';
        else if (noWrap)
            value = 'nowrap';
        else if (wrapReverse)
            value = 'wrap-reverse';
        return value ? { flexWrap: value } : {};
    }, [flexWrap, noWrap, wrap, wrapReverse]);
    const justifyContentStyle = react_1.default.useMemo(() => {
        if (justifyContent)
            return { justifyContent };
        overlapping_1.checkOverlapping('justify-content', justifyStart, justifyEnd, justifyCenter, justifySpaceBetween, justifySpaceAround);
        let value = null;
        if (justifyStart)
            value = 'flex-start';
        else if (justifyEnd)
            value = 'flex-end';
        else if (justifyCenter)
            value = 'center';
        else if (justifySpaceBetween)
            value = 'space-between';
        else if (justifySpaceAround)
            value = 'space-around';
        return value ? { justifyContent: value } : {};
    }, [justifyContent, justifyStart, justifyEnd, justifyCenter, justifySpaceBetween, justifySpaceAround]);
    const alignItemsStyle = react_1.default.useMemo(() => {
        if (alignItems)
            return { alignItems };
        overlapping_1.checkOverlapping('align-items', alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsBaseline, alignItemsStretch);
        let value = null;
        if (alignItemsStart)
            value = 'flex-start';
        else if (alignItemsEnd)
            value = 'flex-end';
        else if (alignItemsCenter)
            value = 'center';
        else if (alignItemsBaseline)
            value = 'baseline';
        else if (alignItemsStretch)
            value = 'stretch';
        return value ? { alignItems: value } : {};
    }, [alignItems, alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsBaseline, alignItemsStretch]);
    const alignContentStyle = react_1.default.useMemo(() => {
        if (alignContent)
            return { alignContent };
        overlapping_1.checkOverlapping('align-content', alignContentStart, alignContentEnd, alignContentCenter, alignContentSpaceBetween, alignContentSpaceAround, alignContentStretch);
        let value = null;
        if (alignContentStart)
            value = 'flex-start';
        else if (alignContentEnd)
            value = 'flex-end';
        else if (alignContentCenter)
            value = 'center';
        else if (alignContentSpaceBetween)
            value = 'space-between';
        else if (alignContentSpaceAround)
            value = 'space-around';
        else if (alignContentStretch)
            value = 'stretch';
        return value ? { alignContent: value } : {};
    }, [
        alignContent,
        alignContentStart,
        alignContentEnd,
        alignContentCenter,
        alignContentSpaceBetween,
        alignContentSpaceAround,
        alignContentStretch,
    ]);
    const flexFlowStyle = react_1.default.useMemo(() => {
        return flow !== undefined ? { flexFlow: flow } : {};
    }, [flow]);
    const combinedStyle = trim_1.trimUndefined({
        ...displayStyle,
        ...flexDirectionStyle,
        ...flexWrapStyle,
        ...justifyContentStyle,
        ...alignItemsStyle,
        ...alignContentStyle,
        ...flexFlowStyle,
        ...style,
    });
    return (react_1.default.createElement("div", Object.assign({ style: combinedStyle }, rest), children));
}
exports.default = FlexContainer;
