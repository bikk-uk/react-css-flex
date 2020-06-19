"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Flex({ inline, row, rowReverse, column, columnReverse, flexDirection, wrap, noWrap, wrapReverse, flexWrap, justifyStart, justifyEnd, justifyCenter, justifySpaceBetween, justifySpaceAround, justifyContent, alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsBaseline, alignItemsStretch, alignItems, alignContentStart, alignContentEnd, alignContentCenter, alignContentSpaceBetween, alignContentSpaceAround, alignContentStretch, alignContent, flow, style = {}, children, ...rest }) {
    const parseDisplay = react_1.default.useCallback(() => ({
        display: inline ? 'inline-flex' : 'flex',
    }), [inline]);
    const parseFlexDirection = react_1.default.useCallback(() => {
        if (flexDirection)
            return { flexDirection };
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
    const parseFlexWrap = react_1.default.useCallback(() => {
        if (flexWrap)
            return { flexWrap };
        let value = null;
        if (wrap)
            value = 'wrap';
        else if (noWrap)
            value = 'nowrap';
        else if (wrapReverse)
            value = 'wrap-reverse';
        return value ? { flexWrap: value } : {};
    }, [flexWrap, noWrap, wrap, wrapReverse]);
    const parseJustifyContent = react_1.default.useCallback(() => {
        if (justifyContent)
            return { justifyContent };
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
    const parseAlignItems = react_1.default.useCallback(() => {
        if (alignItems)
            return { alignItems };
        let value = null;
        if (alignItemsStart)
            value = 'flex-start';
        if (alignItemsEnd)
            value = 'flex-end';
        if (alignItemsCenter)
            value = 'center';
        if (alignItemsBaseline)
            value = 'baseline';
        if (alignItemsStretch)
            value = 'stretch';
        return value ? { alignItems: value } : {};
    }, [alignItems, alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsBaseline, alignItemsStretch]);
    const parseAlignContent = react_1.default.useCallback(() => {
        if (alignContent)
            return { alignContent };
        let value = null;
        if (alignContentStart)
            value = 'flex-start';
        if (alignContentEnd)
            value = 'flex-end';
        if (alignContentCenter)
            value = 'center';
        if (alignContentSpaceBetween)
            value = 'space-between';
        if (alignContentSpaceAround)
            value = 'space-around';
        if (alignContentStretch)
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
    const parseFlexFlow = react_1.default.useCallback(() => {
        return flow ? { flexFlow: flow } : {};
    }, [flow]);
    return (react_1.default.createElement("div", Object.assign({ style: {
            ...parseDisplay(),
            ...parseFlexDirection(),
            ...parseFlexWrap(),
            ...parseJustifyContent(),
            ...parseAlignItems(),
            ...parseAlignContent(),
            ...parseFlexFlow(),
            ...style,
        } }, rest), children));
}
exports.default = Flex;
