# @react-css/flex

A thin wrapper to help make CSS Flexbox simpler and more expressive

## Getting Started

Installation:

`yarn add --dev @react-css/flex`

`npm install --save-dev @react-css/flex`

Importing:

```typescript
import Flex from '@react-css/flex'
```

## Usage

All components are simply `<div />`s with all props fully exposed.

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

To modify `flex-direction` you can use (these are first come first served, in this order):

```tsx
<Flex row></Flex>
<Flex rowReverse></Flex>
<Flex column></Flex>
<Flex columnReverse></Flex>
```

For full control (if provided, overrides the related helper props). Uses standard `React.CSSProperties` types.

```tsx
<Flex flexDirection='row'>
  <MyComponent />
</Flex>
```

#### Flex Wrap

To modify `flex-wrap` you can use (these are first come first served, in this order):

```tsx
<Flex wrap></Flex>
<Flex noWrap></Flex>
<Flex wrapReverse></Flex>
```

For full control (if provided, overrides the related helper props). Uses standard `React.CSSProperties` types.

```tsx
<Flex flexWrap='nowrap'>
  <MyComponent />
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
