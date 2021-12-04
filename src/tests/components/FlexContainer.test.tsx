// Libraries
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import FlexContainer from '../../components/FlexContainer'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('<FlexContainer /> - General', () => {
  it('renders an empty flex container', async () => {
    const component = <FlexContainer />
    const snapshot = `
<div
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders an empty flex container with tagName', async () => {
    const component = <FlexContainer as='main' />
    const snapshot = `
<main
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('applies custom style to the div', async () => {
    const component = (
      <FlexContainer
        style={{
          color: 'blue',
        }}
      />
    )
    const snapshot = `
<div
  style="display: flex; color: blue;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  test('custom styles can be an override to the props', async () => {
    const component = (
      <FlexContainer
        style={{
          display: 'none',
        }}
      />
    )
    const snapshot = `
<div
  style="display: none;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('exposes existing div props', async () => {
    const component = <FlexContainer id='123' />
    const snapshot = `
  <div
    id="123"
    style="display: flex;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('exposes existing div event handlers', async () => {
    const onClick = jest.fn()
    const component = <FlexContainer data-testid='flex' onClick={onClick} />

    const { findByTestId } = render(component)

    fireEvent.click(await findByTestId('flex'))
    expect(onClick).toHaveBeenCalled()
  })
})

describe('<FlexContainer /> - as', () => {
  it('defaults to rendering as a <div/>', async () => {
    const component = <FlexContainer />
    const snapshot = `
<div
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders explicitly as a <div/>', async () => {
    const component = <FlexContainer as='div' />
    const snapshot = `
<div
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <nav/>', async () => {
    const component = <FlexContainer as='nav' />
    const snapshot = `
<nav
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <main/>', async () => {
    const component = <FlexContainer as='main' />
    const snapshot = `
<main
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as an <aside/>', async () => {
    const component = <FlexContainer as='aside' />
    const snapshot = `
<aside
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as an <article/>', async () => {
    const component = <FlexContainer as='article' />
    const snapshot = `
<article
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <header/>', async () => {
    const component = <FlexContainer as='header' />
    const snapshot = `
<header
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <section/>', async () => {
    const component = <FlexContainer as='section' />
    const snapshot = `
<section
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <footer/>', async () => {
    const component = <FlexContainer as='footer' />
    const snapshot = `
<footer
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<FlexContainer /> - inline', () => {
  it('renders an empty inline flex container', async () => {
    const component = <FlexContainer inline />
    const snapshot = `
<div
  style="display: inline-flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<FlexContainer /> - gap', () => {
  it('allows the gap value to be set', async () => {
    const component = <FlexContainer gap='5px' />
    const snapshot = `
<div
  style="display: flex; gap: 5px;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<FlexContainer /> - row-gap', () => {
  it('allows the row-gap value to be set', async () => {
    const component = <FlexContainer rowGap='8px' />
    const snapshot = `
<div
  style="display: flex; row-gap: 8px;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<FlexContainer /> - column-gap', () => {
  it('allows the column-gap value to be set', async () => {
    const component = <FlexContainer columnGap='20px' />
    const snapshot = `
<div
  style="display: flex; column-gap: 20px;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<FlexContainer /> - flex-direction', () => {
  it('allows flex-direction to be manually set', async () => {
    const component = <FlexContainer flexDirection='column' />
    const snapshot = `
  <div
    style="display: flex; flex-direction: column;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-direction row to be set', async () => {
    const component = <FlexContainer row />
    const snapshot = `
  <div
    style="display: flex; flex-direction: row;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-direction row-reverse to be set', async () => {
    const component = <FlexContainer rowReverse />
    const snapshot = `
  <div
    style="display: flex; flex-direction: row-reverse;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-direction column to be set', async () => {
    const component = <FlexContainer column />
    const snapshot = `
  <div
    style="display: flex; flex-direction: column;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-direction column-reverse to be set', async () => {
    const component = <FlexContainer columnReverse />
    const snapshot = `
  <div
    style="display: flex; flex-direction: column-reverse;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for flex-direction - part 1', async () => {
    const component = <FlexContainer row rowReverse />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for flex-direction.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for flex-direction - part 2', async () => {
    const component = <FlexContainer column columnReverse />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for flex-direction.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

describe('<FlexContainer /> - flex-wrap', () => {
  it('allows flex-wrap to be manually set', async () => {
    const component = <FlexContainer flexWrap='nowrap' />
    const snapshot = `
  <div
    style="display: flex; flex-wrap: nowrap;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-wrap wrap to be set', async () => {
    const component = <FlexContainer wrap />
    const snapshot = `
  <div
    style="display: flex; flex-wrap: wrap;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-wrap nowrap to be set', async () => {
    const component = <FlexContainer noWrap />
    const snapshot = `
  <div
    style="display: flex; flex-wrap: nowrap;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-wrap wrap-reverse to be set', async () => {
    const component = <FlexContainer wrapReverse />
    const snapshot = `
  <div
    style="display: flex; flex-wrap: wrap-reverse;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for flex-wrap - part 1', async () => {
    const component = <FlexContainer wrap noWrap />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for flex-wrap.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for flex-wrap - part 2', async () => {
    const component = <FlexContainer noWrap wrapReverse />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for flex-wrap.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

describe('<FlexContainer /> - justify-content', () => {
  it('allows justify-content to be manually set', async () => {
    const component = <FlexContainer justifyContent='flex-start' />
    const snapshot = `
  <div
    style="display: flex; justify-content: flex-start;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the justify-content flex-start to be set', async () => {
    const component = <FlexContainer justifyStart />
    const snapshot = `
  <div
    style="display: flex; justify-content: flex-start;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the justify-content flex-end to be set', async () => {
    const component = <FlexContainer justifyEnd />
    const snapshot = `
  <div
    style="display: flex; justify-content: flex-end;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the justify-content center to be set', async () => {
    const component = <FlexContainer justifyCenter />
    const snapshot = `
  <div
    style="display: flex; justify-content: center;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the justify-content space-between to be set', async () => {
    const component = <FlexContainer justifySpaceBetween />
    const snapshot = `
  <div
    style="display: flex; justify-content: space-between;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the justify-content space-around to be set', async () => {
    const component = <FlexContainer justifySpaceAround />
    const snapshot = `
  <div
    style="display: flex; justify-content: space-around;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for justify-content - part 1', async () => {
    const component = <FlexContainer justifyStart justifyEnd />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for justify-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for justify-content - part 2', async () => {
    const component = <FlexContainer justifyCenter justifySpaceBetween />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for justify-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for justify-content - part 3', async () => {
    const component = <FlexContainer justifySpaceBetween justifySpaceAround />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for justify-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

describe('<FlexContainer /> - align-items', () => {
  it('allows align-items to be manually set', async () => {
    const component = <FlexContainer alignItems='flex-start' />
    const snapshot = `
  <div
    style="display: flex; align-items: flex-start;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-items flex-start to be set', async () => {
    const component = <FlexContainer alignItemsStart />
    const snapshot = `
  <div
    style="display: flex; align-items: flex-start;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-items flex-end to be set', async () => {
    const component = <FlexContainer alignItemsEnd />
    const snapshot = `
  <div
    style="display: flex; align-items: flex-end;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-items center to be set', async () => {
    const component = <FlexContainer alignItemsCenter />
    const snapshot = `
  <div
    style="display: flex; align-items: center;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-items baseline to be set', async () => {
    const component = <FlexContainer alignItemsBaseline />
    const snapshot = `
  <div
    style="display: flex; align-items: baseline;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-items stretch to be set', async () => {
    const component = <FlexContainer alignItemsStretch />
    const snapshot = `
  <div
    style="display: flex; align-items: stretch;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for align-items - part 1', async () => {
    const component = <FlexContainer alignItemsStart alignItemsEnd />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for align-items.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for align-items - part 2', async () => {
    const component = <FlexContainer alignItemsCenter alignItemsBaseline />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for align-items.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for align-items - part 3', async () => {
    const component = <FlexContainer alignItemsBaseline alignItemsStretch />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for align-items.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

describe('<FlexContainer /> - align-content', () => {
  it('allows align-content to be manually set', async () => {
    const component = <FlexContainer alignContent='flex-start' />
    const snapshot = `
  <div
    style="display: flex; align-content: flex-start;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-content flex-start to be set', async () => {
    const component = <FlexContainer alignContentStart />
    const snapshot = `
  <div
    style="display: flex; align-content: flex-start;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-content flex-end to be set', async () => {
    const component = <FlexContainer alignContentEnd />
    const snapshot = `
  <div
    style="display: flex; align-content: flex-end;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-content center to be set', async () => {
    const component = <FlexContainer alignContentCenter />
    const snapshot = `
  <div
    style="display: flex; align-content: center;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-content space-between to be set', async () => {
    const component = <FlexContainer alignContentSpaceBetween />
    const snapshot = `
  <div
    style="display: flex; align-content: space-between;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-content space-around to be set', async () => {
    const component = <FlexContainer alignContentSpaceAround />
    const snapshot = `
  <div
    style="display: flex; align-content: space-around;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-content stretch to be set', async () => {
    const component = <FlexContainer alignContentStretch />
    const snapshot = `
  <div
    style="display: flex; align-content: stretch;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for align-content - part 1', async () => {
    const component = <FlexContainer alignContentStart alignContentEnd />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for align-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for align-content - part 2', async () => {
    const component = <FlexContainer alignContentCenter alignContentSpaceBetween />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for align-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for align-content - part 3', async () => {
    const component = <FlexContainer alignContentSpaceAround alignContentStretch />

    render(component)

    const expectedMessage = '[@react-css/flex] Multiple values have been provided for align-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

describe('<FlexContainer /> - flex-flow', () => {
  it('allows flex-flow to be set', async () => {
    const component = <FlexContainer flow='row nowrap' />
    const snapshot = `
  <div
    style="display: flex; flex-flow: row nowrap;"
  />
  `
    matchesSnapshot(component, snapshot)
  })
})
