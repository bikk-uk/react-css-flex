# @react-css/flex

A thin wrapper to help make CSS Flexbox simpler, more expressive, and faster to use

## Getting Started

Installation:

`yarn add --dev @react-css/flex`

`npm install --save-dev @react-css/flex`

Importing:

```typescript
import Flex from '@react-css/flex'
```

## Usage

All components are simply `<div />`s with all the usual props fully exposed.

### Flex

In its simplest form, to get a basic Flexbox:

```tsx
<Flex>
  <MyComponent />
</Flex>
```

#### Inline

For an inline Flexbox with `display: inline-flex;`:

```tsx
<Flex inline>
  <MyComponent />
</Flex>
```

#### Flex Direction

To modify `flex-direction`, the typed prop is simply exposed with the default `React.CSSProperties` types.

```tsx
<Flex flexDirection='row'>
  <MyComponent />
</Flex>
```

To keep it cleaner you can use:

```tsx
<Flex row></Flex> // flex-direction: row;
<Flex rowReverse></Flex> // flex-direction: row-reverse;
<Flex column></Flex> // flex-direction: column;
<Flex columnReverse></Flex> // flex-direction: column-reverse;
```

_These are first come first served, in this order. They will be ignored if you provide it manually via the `flexDirection='row'` prop._

#### Flex Wrap

To modify `flex-wrap`, the typed prop is simply exposed with the default `React.CSSProperties` types.

```tsx
<Flex flexWrap='nowrap'>
  <MyComponent />
</Flex>
```

To keep it cleaner you can use:

```tsx
<Flex wrap></Flex> // flex-wrap: wrap;
<Flex noWrap></Flex> // flex-wrap: nowrap;
<Flex wrapReverse></Flex> // flex-wrap: wrap-reverse;
```

_These are first come first served, in this order. They will be ignored if you provide it manually via the `flexWrap='nowrap'` prop._

#### Justify Content

To modify `justify-content`, the typed prop is simply exposed with the default `React.CSSProperties` types.

```tsx
<Flex justifyContent='center'>
  <MyComponent />
</Flex>
```

To keep it cleaner you can use:

```tsx
<Flex justifyStart></Flex> // justify-content: flex-start;
<Flex justifyEnd></Flex> // justify-content: flex-end;
<Flex justifyCenter></Flex> // justify-content: center;
<Flex justifySpaceBetween></Flex> // justify-content: space-between;
<Flex justifySpaceAround></Flex> // justify-content: space-around;
```

_These are first come first served, in this order. They will be ignored if you provide it manually via the `justifyContent='center'` prop._

#### Align Items

To modify `align-items`, the typed prop is simply exposed with the default `React.CSSProperties` types.

```tsx
<Flex alignItems='baseline'>
  <MyComponent />
</Flex>
```

To keep it cleaner you can use:

```tsx
<Flex alignItemsStart></Flex> // align-items: flex-start;
<Flex alignItemsEnd></Flex> // align-items: flex-end;
<Flex alignItemsCenter></Flex> // align-items: center;
<Flex alignItemsBaseline></Flex> // align-items: baseline;
<Flex alignItemsStretch></Flex> // align-items: stretch;
```

_These are first come first served, in this order. They will be ignored if you provide it manually via the `alignItems='baseline'` prop._

#### Align Content

To modify `align-content`, the typed prop is simply exposed with the default `React.CSSProperties` types.

```tsx
<Flex alignContent='flex-end'>
  <MyComponent />
</Flex>
```

To keep it cleaner you can use:

```tsx
<Flex alignContentStart></Flex> // align-content: flex-start;
<Flex alignContentEnd></Flex> // align-content: flex-end;
<Flex alignContentCenter></Flex> // align-content: center;
<Flex alignContentSpaceBetween></Flex> // align-content: space-between;
<Flex alignContentSpaceAround></Flex> // align-content: space-around;
<Flex alignContentStretch></Flex> // align-content: stretch;
```

_These are first come first served, in this order. They will be ignored if you provide it manually via the `alignItems='center'` prop._

#### Flex Flow (Shorthand)

To modify `flex-flow`, the typed prop is simply exposed with the default `React.CSSProperties` types. The React types (or underlying [csstype](https://www.npmjs.com/package/csstype) package) unfortunately add very little type support for this.

```tsx
<Flex flow='row nowrap'>
  <MyComponent />
</Flex>
```

### Flex Items

To help with laying out your components, a Flex Item is also available.

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

_**Note**: At this time `<Flex.Item />` is purely syntactic sugar, available to make the structure of the component clearer. It will behave (and is) just like a `<div />` with all the typed properties. Development is ongoing to add support for the Flex Item properties. For now you can just apply them via standard React styles:_

```tsx
<Flex>
  <Flex.Item
    style={{
      flexGrow: 2,
    }}>
    <MyFirstComponent />
  </Flex.Item>
</Flex>
```

## Notes

All the React `div` props and TypeScript types are exposed. This allows for complete control whilst being able to ignore any Flexbox related CSS.

```tsx
<Flex
  onMouseEnter={onMouseEnter}
  style={{
    background: 'red',
  }}>
  <MyComponent />
</Flex>
```

CSS provided via `styles` is applied last, this allows all generated CSS to be overridden.

```tsx
<Flex
  inline // this will get overridden
  style={{
    display: 'flex', // this will override everything else
  }}>
  <MyComponent />
</Flex>
```
