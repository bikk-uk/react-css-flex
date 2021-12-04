// Libraries
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import FlexItem from '../../components/FlexItem'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('<FlexItem /> - General', () => {
  it('renders an empty flex item', async () => {
    const component = <FlexItem />
    const snapshot = `<div />`
    matchesSnapshot(component, snapshot)
  })

  it('renders an empty flex item with tagName', async () => {
    const component = <FlexItem as='section' />
    const snapshot = `<section />`
    matchesSnapshot(component, snapshot)
  })

  it('applies custom style to the div', async () => {
    const component = (
      <FlexItem
        style={{
          color: 'red',
        }}
      />
    )
    const snapshot = `
<div
  style="color: red;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('exposes existing div props', async () => {
    const component = <FlexItem id='123' />
    const snapshot = `
<div
  id="123"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('exposes existing div event handlers', async () => {
    const onClick = jest.fn()
    const component = <FlexItem data-testid='flex-item' onClick={onClick} />

    const { findByTestId } = render(component)

    fireEvent.click(await findByTestId('flex-item'))
    expect(onClick).toHaveBeenCalled()
  })
})

describe('<FlexItem /> - as', () => {
  it('defaults to rendering as a <div/>', async () => {
    const component = <FlexItem />
    const snapshot = `<div />`
    matchesSnapshot(component, snapshot)
  })

  it('renders explicitly as a <div/>', async () => {
    const component = <FlexItem as='div' />
    const snapshot = `<div />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <nav/>', async () => {
    const component = <FlexItem as='nav' />
    const snapshot = `<nav />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <main/>', async () => {
    const component = <FlexItem as='main' />
    const snapshot = `<main />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as an <aside/>', async () => {
    const component = <FlexItem as='aside' />
    const snapshot = `<aside />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as an <article/>', async () => {
    const component = <FlexItem as='article' />
    const snapshot = `<article />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <header/>', async () => {
    const component = <FlexItem as='header' />
    const snapshot = `<header />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <section/>', async () => {
    const component = <FlexItem as='section' />
    const snapshot = `<section />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <footer/>', async () => {
    const component = <FlexItem as='footer' />
    const snapshot = `<footer />`
    matchesSnapshot(component, snapshot)
  })
})

describe('<FlexItem /> - order', () => {
  it('allows the order value to be set', async () => {
    const component = <FlexItem order={5} />
    const snapshot = `
<div
  style="order: 5;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<FlexItem /> - flex-grow', () => {
  it('allows the flex-grow value to be set', async () => {
    const component = <FlexItem grow={67} />
    const snapshot = `
<div
  style="flex-grow: 67;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<FlexItem /> - flex-shrink', () => {
  it('allows the flex-shrink value to be set', async () => {
    const component = <FlexItem shrink={32} />
    const snapshot = `
<div
  style="flex-shrink: 32;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<FlexItem /> - flex-basis', () => {
  it('allows the flex-basis value to be set', async () => {
    const component = <FlexItem basis='auto' />
    const snapshot = `
<div
  style="flex-basis: auto;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<FlexItem /> - flex', () => {
  it('allows the flex value to be set', async () => {
    const component = <FlexItem flex='0 1 auto' />
    const snapshot = `
<div
  style="flex: 0 1 auto;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<FlexItem /> - align-self', () => {
  it('allows the align-self to be manually set', async () => {
    const component = <FlexItem alignSelf='flex-end' />
    const snapshot = `
<div
  style="align-self: flex-end;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-self auto to be set', async () => {
    const component = <FlexItem alignSelfAuto />
    const snapshot = `
<div
  style="align-self: auto;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-self flex-start to be set', async () => {
    const component = <FlexItem alignSelfStart />
    const snapshot = `
<div
  style="align-self: flex-start;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-self flex-end to be set', async () => {
    const component = <FlexItem alignSelfEnd />
    const snapshot = `
<div
  style="align-self: flex-end;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-self center to be set', async () => {
    const component = <FlexItem alignSelfCenter />
    const snapshot = `
<div
  style="align-self: center;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-self baseline to be set', async () => {
    const component = <FlexItem alignSelfBaseline />
    const snapshot = `
<div
  style="align-self: baseline;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-self stretch to be set', async () => {
    const component = <FlexItem alignSelfStretch />
    const snapshot = `
<div
  style="align-self: stretch;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for align-self - part 1', async () => {
    const component = <FlexItem alignSelfAuto alignSelfStart />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for align-self.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for align-self - part 2', async () => {
    const component = <FlexItem alignSelfEnd alignSelfCenter />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for align-self.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for align-self - part 3', async () => {
    const component = <FlexItem alignSelfBaseline alignSelfStretch />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for align-self.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})
