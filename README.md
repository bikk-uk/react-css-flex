# @react-css/flex

A thin wrapper to help make CSS Flexbox simpler and more expressive

[![Build and Test](https://github.com/bikk-uk/react-css-flex/actions/workflows/build-test.yml/badge.svg?branch=master)](https://github.com/bikk-uk/react-css-flex/actions/workflows/build-test.yml)
[![Coverage Status](https://coveralls.io/repos/github/bikk-uk/react-css-flex/badge.svg?branch=master)](https://coveralls.io/github/bikk-uk/react-css-flex?branch=master)
[![react-css-test](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/hksco8/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/hksco8/runs)
[![Known Vulnerabilities](https://snyk.io/test/github/bikk-uk/react-css-flex/badge.svg?targetFile=package.json)](https://snyk.io/test/github/bikk-uk/react-css-flex?targetFile=package.json)
![GitHub package.json version](https://img.shields.io/github/package-json/v/bikk-uk/react-css-flex?label=github)
![npm](https://img.shields.io/npm/v/@react-css/flex)
![NPM](https://img.shields.io/npm/l/@react-css/flex)

## Getting Started

Installation:

`yarn add @react-css/flex`

`npm install @react-css/flex`

Importing:

```typescript
import Flex from '@react-css/flex'
```

## Usage

All components are `<div />`s with the React props fully exposed. You can change what is rendered for both `<Flex />` and `<Flex.Item />` via the `as` prop:

```tsx
<Flex as='main'>
  <MyComponent />
</Flex>
```

### Flex

To get a basic Flexbox:

```tsx
<Flex>
  <MyComponent />
</Flex>
```

#### Inline

For an inline Flexbox:

```tsx
<Flex inline>
  <MyComponent />
</Flex>
```

#### Flex Direction

To modify `flex-direction` _(with `React.CSSProperties` types)_:

```tsx
<Flex flexDirection='row'>
  <MyComponent />
</Flex>
```

To simplify, you can use:

```tsx
<Flex row></Flex> // flex-direction: row;
<Flex rowReverse></Flex> // flex-direction: row-reverse;
<Flex column></Flex> // flex-direction: column;
<Flex columnReverse></Flex> // flex-direction: column-reverse;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `flexDirection` prop. Providing multiple will result in a console warning._

#### Flex Wrap

To modify `flex-wrap` _(with `React.CSSProperties` types)_:

```tsx
<Flex flexWrap='nowrap'>
  <MyComponent />
</Flex>
```

To simplify, you can use:

```tsx
<Flex wrap></Flex> // flex-wrap: wrap;
<Flex noWrap></Flex> // flex-wrap: nowrap;
<Flex wrapReverse></Flex> // flex-wrap: wrap-reverse;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `flexWrap` prop. Providing multiple will result in a console warning._

#### Justify Content

To modify `justify-content` _(with `React.CSSProperties` types)_:

```tsx
<Flex justifyContent='center'>
  <MyComponent />
</Flex>
```

To simplify, you can use:

```tsx
<Flex justifyStart></Flex> // justify-content: flex-start;
<Flex justifyEnd></Flex> // justify-content: flex-end;
<Flex justifyCenter></Flex> // justify-content: center;
<Flex justifySpaceBetween></Flex> // justify-content: space-between;
<Flex justifySpaceAround></Flex> // justify-content: space-around;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `justifyContent` prop. Providing multiple will result in a console warning._

#### Align Items

To modify `align-items` _(with `React.CSSProperties` types)_:

```tsx
<Flex alignItems='baseline'>
  <MyComponent />
</Flex>
```

To simplify, you can use:

```tsx
<Flex alignItemsStart></Flex> // align-items: flex-start;
<Flex alignItemsEnd></Flex> // align-items: flex-end;
<Flex alignItemsCenter></Flex> // align-items: center;
<Flex alignItemsBaseline></Flex> // align-items: baseline;
<Flex alignItemsStretch></Flex> // align-items: stretch;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `alignItems` prop. Providing multiple will result in a console warning._

#### Align Content

To modify `align-content` _(with `React.CSSProperties` types)_:

```tsx
<Flex alignContent='flex-end'>
  <MyComponent />
</Flex>
```

To simplify, you can use:

```tsx
<Flex alignContentStart></Flex> // align-content: flex-start;
<Flex alignContentEnd></Flex> // align-content: flex-end;
<Flex alignContentCenter></Flex> // align-content: center;
<Flex alignContentSpaceBetween></Flex> // align-content: space-between;
<Flex alignContentSpaceAround></Flex> // align-content: space-around;
<Flex alignContentStretch></Flex> // align-content: stretch;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `alignContent` prop. Providing multiple will result in a console warning._

#### Flex Flow (Shorthand)

To modify `flex-flow` _(with `React.CSSProperties` types)_:

```tsx
<Flex flow='row nowrap'>
  <MyComponent />
</Flex>
```

_The React TypeScript definitions (or underlying [csstype](https://www.npmjs.com/package/csstype) package) unfortunately adds very little type support for this value._

### Flex Items

To help with structuring your components, a Flex Item is also available.

```tsx
<Flex column alignItemsCenter>
  <Flex.Item>
    <MyFirstComponent />
  </Flex.Item>
  <Flex.Item>
    <MySecondComponent />
  </Flex.Item>
</Flex>
```

#### Order

To modify `order` _(with `React.CSSProperties` types)_:

```tsx
<Flex>
  <Flex.Item order={2}>
    <MyComponent />
</Flex>
```

#### Flex Grow

To modify `flex-grow` _(with `React.CSSProperties` types)_:

```tsx
<Flex>
  <Flex.Item grow={5}>
    <MyComponent />
  </Flex.Item>
</Flex>
```

#### Flex Shrink

To modify `flex-shrink` _(with `React.CSSProperties` types)_:

```tsx
<Flex>
  <Flex.Item shrink={3}>
    <MyComponent />
  </Flex.Item>
</Flex>
```

#### Flex Basis

To modify `flex-basis` _(with `React.CSSProperties` types)_:

```tsx
<Flex>
  <Flex.Item basis='4em'>
    <MyComponent />
  </Flex.Item>
</Flex>
```

#### Flex (Shorthand)

To modify `flex` _(with `React.CSSProperties` types)_:

```tsx
<Flex>
  <Flex.Item flex='1 0'>
    <MyComponent />
  </Flex.Item>
</Flex>
```

#### Align Self

To modify `align-self` _(with `React.CSSProperties` types)_:

```tsx
<Flex>
  <Flex.Item alignSelf='flex-end'>
    <MyComponent />
  </Flex.Item>
</Flex>
```

To simplify, you can use:

```tsx
<Flex.Item alignSelfAuto></Flex.Item> // align-self: auto;
<Flex.Item alignSelfStart></Flex.Item> // align-self: flex-start;
<Flex.Item alignSelfEnd></Flex.Item> // align-self: flex-end;
<Flex.Item alignSelfCenter></Flex.Item> // align-self: center;
<Flex.Item alignSelfBaseline></Flex.Item> // align-self: baseline;
<Flex.Item alignSelfStretch></Flex.Item> // align-self: stretch;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `alignSelf` prop. Providing multiple will result in a console warning._

## Notes

### Exposed Props

All the React `div` props and TypeScript definitions are exposed/passed through. This allows for an identical development experience whilst being able to ignore any Flexbox related CSS.

```tsx
<Flex column onMouseEnter={onMouseEnter}>
  <Flex.Item grow={2}>
    <MyComponent />
  </Flex.Item>
  <Flex.Item alignSelfCenter onClick={handleItemClick}>
    <MyComponent />
  </Flex.Item>
</Flex>
```

### Style Override

CSS provided via `styles` will be applied last, this allows all generated CSS to be overridden.

```tsx
<Flex
  inline // this will get overridden
  style={{
    display: 'flex', // this will override everything else
  }}>
  <Flex.Item>
    <MyComponent />
  </Flex.Item>
</Flex>
```

### Rendering as different elements

If the `as` prop is not provided, it will default to a `<div />`. The supported `as` values are:

- `div`
- `nav`
- `main`
- `aside`
- `article`
- `header`
- `section`
- `footer`

### Limitations

Whilst the type definitions prevent you from using both the short and manual prop for each style, it is not feasible to expand this to stop you from being able to provide more than one of the short props for each style. These were implemented but due to the possible number of combinations (over 5000), TypeScript would not transpile it and the developer experience was poor as VS Code tried to work out the Props via IntelliSense.

To help prevent accidentally doing this, a warning will log if you have provided multiple values that would overlap/contradict.
