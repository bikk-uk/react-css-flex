"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const snapshots_1 = require("./helpers/snapshots");
const FlexWrapper_1 = __importDefault(require("../components/FlexWrapper"));
describe('<FlexWrapper />', () => {
    it('renders an empty flex container', async () => {
        const component = react_1.default.createElement(FlexWrapper_1.default, null);
        const snapshot = `
<div
  style="display: flex;"
/>
`;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('renders a flex container with string content', async () => {
        const component = react_1.default.createElement(FlexWrapper_1.default, null, "Children");
        const snapshot = `
<div
  style="display: flex;"
>
  Children
</div>
`;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('renders a flex container with children', async () => {
        const component = (react_1.default.createElement(FlexWrapper_1.default, null,
            react_1.default.createElement("div", null, "Children")));
        const snapshot = `
<div
  style="display: flex;"
>
  <div>
    Children
  </div>
</div>
`;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('renders a flex container with a flex item', async () => {
        const component = (react_1.default.createElement(FlexWrapper_1.default, null,
            react_1.default.createElement(FlexWrapper_1.default.Item, null, "Item 1")));
        const snapshot = `
<div
  style="display: flex;"
>
  <div>
    Item 1
  </div>
</div>
`;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
    it('renders a flex container with flex items', async () => {
        const component = (react_1.default.createElement(FlexWrapper_1.default, null,
            react_1.default.createElement(FlexWrapper_1.default.Item, null, "Item 1"),
            react_1.default.createElement(FlexWrapper_1.default.Item, null, "Item 2")));
        const snapshot = `
<div
  style="display: flex;"
>
  <div>
    Item 1
  </div>
  <div>
    Item 2
  </div>
</div>
`;
        snapshots_1.matchesSnapshot(component, snapshot);
    });
});
