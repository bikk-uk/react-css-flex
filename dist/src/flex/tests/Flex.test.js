"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const snapshots_1 = require("./helpers/snapshots");
const Flex_1 = __importDefault(require("../components/Flex"));
describe('<Flex /> - General', () => {
    it('renders an empty flex container', async () => {
        const component = react_1.default.createElement(Flex_1.default, null);
        const snapshot = `
<div
  style="display: flex;"
/>
`;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('applies custom style to the div', async () => {
        const component = (react_1.default.createElement(Flex_1.default, { style: {
                color: 'blue',
            } }));
        const snapshot = `
<div
  style="display: flex; color: blue;"
/>
`;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    test('custom styles can be an override to the props', async () => {
        const component = (react_1.default.createElement(Flex_1.default, { style: {
                display: 'none',
            } }));
        const snapshot = `
<div
  style="display: none;"
/>
`;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('exposes existing div props', async () => {
        const component = react_1.default.createElement(Flex_1.default, { id: '123' });
        const snapshot = `
  <div
    id="123"
    style="display: flex;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('exposes existing div event handlers', async () => {
        const onClick = jest.fn();
        const component = react_1.default.createElement(Flex_1.default, { "data-testid": 'flex', onClick: onClick });
        const { findByTestId } = react_2.render(component);
        react_2.fireEvent.click(await findByTestId('flex'));
        expect(onClick).toHaveBeenCalled();
    });
});
describe('<Flex /> - Inline', () => {
    it('renders an empty flex container', async () => {
        const component = react_1.default.createElement(Flex_1.default, { inline: true });
        const snapshot = `
<div
  style="display: inline-flex;"
/>
`;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
});
describe('<Flex /> - flex-direction', () => {
    it('allows the flex-direction row to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { row: true });
        const snapshot = `
  <div
    style="display: flex; flex-direction: row;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the flex-direction row-reverse to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { rowReverse: true });
        const snapshot = `
  <div
    style="display: flex; flex-direction: row-reverse;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the flex-direction column to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { column: true });
        const snapshot = `
  <div
    style="display: flex; flex-direction: column;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the flex-direction column-reverse to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { columnReverse: true });
        const snapshot = `
  <div
    style="display: flex; flex-direction: column-reverse;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the flex-direction to be manually set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { flexDirection: 'column' });
        const snapshot = `
  <div
    style="display: flex; flex-direction: column;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    test('flex-direction when manually set, overrides simple props', async () => {
        const component = react_1.default.createElement(Flex_1.default, { flexDirection: 'column', row: true, rowReverse: true });
        const snapshot = `
  <div
    style="display: flex; flex-direction: column;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
});
describe('<Flex /> - flex-wrap', () => {
    it('allows the flex-wrap wrap to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { wrap: true });
        const snapshot = `
  <div
    style="display: flex; flex-wrap: wrap;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the flex-wrap nowrap to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { noWrap: true });
        const snapshot = `
  <div
    style="display: flex; flex-wrap: nowrap;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the flex-wrap wrap-reverse to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { wrapReverse: true });
        const snapshot = `
  <div
    style="display: flex; flex-wrap: wrap-reverse;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    test('flex-wrap when manually set, overrides simple props', async () => {
        const component = react_1.default.createElement(Flex_1.default, { flexWrap: 'wrap', noWrap: true, wrapReverse: true });
        const snapshot = `
  <div
    style="display: flex; flex-wrap: wrap;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
});
describe('<Flex /> - justify-content', () => {
    it('allows the justify-content flex-start to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { justifyStart: true });
        const snapshot = `
  <div
    style="display: flex; justify-content: flex-start;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the justify-content flex-end to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { justifyEnd: true });
        const snapshot = `
  <div
    style="display: flex; justify-content: flex-end;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the justify-content center to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { justifyCenter: true });
        const snapshot = `
  <div
    style="display: flex; justify-content: center;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the justify-content space-between to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { justifySpaceBetween: true });
        const snapshot = `
  <div
    style="display: flex; justify-content: space-between;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the justify-content space-around to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { justifySpaceAround: true });
        const snapshot = `
  <div
    style="display: flex; justify-content: space-around;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    test('justify-content when manually set, overrides simple props', async () => {
        const component = react_1.default.createElement(Flex_1.default, { justifyContent: 'center', justifyEnd: true, justifySpaceAround: true });
        const snapshot = `
  <div
    style="display: flex; justify-content: center;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
});
describe('<Flex /> - align-items', () => {
    it('allows the align-items flex-start to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignItemsStart: true });
        const snapshot = `
  <div
    style="display: flex; align-items: flex-start;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the align-items flex-end to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignItemsEnd: true });
        const snapshot = `
  <div
    style="display: flex; align-items: flex-end;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the align-items center to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignItemsCenter: true });
        const snapshot = `
  <div
    style="display: flex; align-items: center;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the align-items baseline to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignItemsBaseline: true });
        const snapshot = `
  <div
    style="display: flex; align-items: baseline;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the align-items stretch to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignItemsStretch: true });
        const snapshot = `
  <div
    style="display: flex; align-items: stretch;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    test('align-items when manually set, overrides simple props', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignItems: 'center', alignItemsBaseline: true, alignItemsStretch: true });
        const snapshot = `
  <div
    style="display: flex; align-items: center;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
});
describe('<Flex /> - align-content', () => {
    it('allows the align-content flex-start to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignContentStart: true });
        const snapshot = `
  <div
    style="display: flex; align-content: flex-start;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the align-content flex-end to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignContentEnd: true });
        const snapshot = `
  <div
    style="display: flex; align-content: flex-end;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the align-content center to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignContentCenter: true });
        const snapshot = `
  <div
    style="display: flex; align-content: center;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the align-content space-between to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignContentSpaceBetween: true });
        const snapshot = `
  <div
    style="display: flex; align-content: space-between;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the align-content space-around to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignContentSpaceAround: true });
        const snapshot = `
  <div
    style="display: flex; align-content: space-around;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('allows the align-content stretch to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignContentStretch: true });
        const snapshot = `
  <div
    style="display: flex; align-content: stretch;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    test('align-content when manually set, overrides simple props', async () => {
        const component = react_1.default.createElement(Flex_1.default, { alignContent: 'center', alignContentEnd: true, alignContentStart: true });
        const snapshot = `
  <div
    style="display: flex; align-content: center;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
});
describe('<Flex /> - flex-flow', () => {
    it('allows flex-flow to be set', async () => {
        const component = react_1.default.createElement(Flex_1.default, { flow: 'row nowrap' });
        const snapshot = `
  <div
    style="display: flex; flex-flow: row nowrap;"
  />
  `;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
});
