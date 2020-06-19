// Libraries
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from './helpers/snapshots'

// Tested Module
import Flex from '../components/Flex'

describe('<Flex /> - General', () => {
  it('renders an empty flex container', async () => {
    const component = <Flex />
    const snapshot = `
<div
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('applies custom style to the div', async () => {
    const component = (
      <Flex
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
      <Flex
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
    const component = <Flex id='123' />
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
    const component = <Flex data-testid='flex' onClick={onClick} />

    const { findByTestId } = render(component)

    fireEvent.click(await findByTestId('flex'))
    expect(onClick).toHaveBeenCalled()
  })
})

describe('<Flex /> - flex-direction', () => {
  it('allows the flex-direction row to be set', async () => {
    const component = <Flex row />
    const snapshot = `
  <div
    style="display: flex; flex-direction: row;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-direction row-reverse to be set', async () => {
    const component = <Flex rowReverse />
    const snapshot = `
  <div
    style="display: flex; flex-direction: row-reverse;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-direction column to be set', async () => {
    const component = <Flex column />
    const snapshot = `
  <div
    style="display: flex; flex-direction: column;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-direction column-reverse to be set', async () => {
    const component = <Flex columnReverse />
    const snapshot = `
  <div
    style="display: flex; flex-direction: column-reverse;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-direction to be manually set', async () => {
    const component = <Flex flexDirection='column' />
    const snapshot = `
  <div
    style="display: flex; flex-direction: column;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  test('flex-direction when manually set, overrides simple props', async () => {
    const component = <Flex flexDirection='column' row rowReverse />
    const snapshot = `
  <div
    style="display: flex; flex-direction: column;"
  />
  `
    matchesSnapshot(component, snapshot)
  })
})

describe('<Flex /> - flex-wrap', () => {
  it('allows the flex-wrap wrap to be set', async () => {
    const component = <Flex wrap />
    const snapshot = `
  <div
    style="display: flex; flex-wrap: wrap;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-wrap wrap-reverse to be set', async () => {
    const component = <Flex wrapReverse />
    const snapshot = `
  <div
    style="display: flex; flex-wrap: wrap-reverse;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the flex-wrap nowrap to be set', async () => {
    const component = <Flex noWrap />
    const snapshot = `
  <div
    style="display: flex; flex-wrap: nowrap;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  test('flex-wrap when manually set, overrides simple props', async () => {
    const component = <Flex flexWrap='wrap' noWrap wrapReverse />
    const snapshot = `
  <div
    style="display: flex; flex-wrap: wrap;"
  />
  `
    matchesSnapshot(component, snapshot)
  })
})

describe('<Flex /> - justify-content', () => {
  it('allows the justify-content flex-start to be set', async () => {
    const component = <Flex justifyStart />
    const snapshot = `
  <div
    style="display: flex; justify-content: flex-start;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the justify-content flex-end to be set', async () => {
    const component = <Flex justifyEnd />
    const snapshot = `
  <div
    style="display: flex; justify-content: flex-end;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the justify-content center to be set', async () => {
    const component = <Flex justifyCenter />
    const snapshot = `
  <div
    style="display: flex; justify-content: center;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the justify-content space-between to be set', async () => {
    const component = <Flex justifySpaceBetween />
    const snapshot = `
  <div
    style="display: flex; justify-content: space-between;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the justify-content space-around to be set', async () => {
    const component = <Flex justifySpaceAround />
    const snapshot = `
  <div
    style="display: flex; justify-content: space-around;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  test('justify-content when manually set, overrides simple props', async () => {
    const component = <Flex justifyContent='center' justifyEnd justifySpaceAround />
    const snapshot = `
  <div
    style="display: flex; justify-content: center;"
  />
  `
    matchesSnapshot(component, snapshot)
  })
})

describe('<Flex /> - align-items', () => {
  it('allows the align-items flex-start to be set', async () => {
    const component = <Flex alignItemsStart />
    const snapshot = `
  <div
    style="display: flex; align-items: flex-start;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-items flex-end to be set', async () => {
    const component = <Flex alignItemsEnd />
    const snapshot = `
  <div
    style="display: flex; align-items: flex-end;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-items center to be set', async () => {
    const component = <Flex alignItemsCenter />
    const snapshot = `
  <div
    style="display: flex; align-items: center;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-items baseline to be set', async () => {
    const component = <Flex alignItemsBaseline />
    const snapshot = `
  <div
    style="display: flex; align-items: baseline;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-items stretch to be set', async () => {
    const component = <Flex alignItemsStretch />
    const snapshot = `
  <div
    style="display: flex; align-items: stretch;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  test('align-items when manually set, overrides simple props', async () => {
    const component = <Flex alignItems='center' alignItemsBaseline alignItemsStretch />
    const snapshot = `
  <div
    style="display: flex; align-items: center;"
  />
  `
    matchesSnapshot(component, snapshot)
  })
})

describe('<Flex /> - align-content', () => {
  it('allows the align-content flex-start to be set', async () => {
    const component = <Flex alignContentStart />
    const snapshot = `
  <div
    style="display: flex; align-content: flex-start;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-content flex-end to be set', async () => {
    const component = <Flex alignContentEnd />
    const snapshot = `
  <div
    style="display: flex; align-content: flex-end;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-content center to be set', async () => {
    const component = <Flex alignContentCenter />
    const snapshot = `
  <div
    style="display: flex; align-content: center;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-content space-between to be set', async () => {
    const component = <Flex alignContentSpaceBetween />
    const snapshot = `
  <div
    style="display: flex; align-content: space-between;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-content space-around to be set', async () => {
    const component = <Flex alignContentSpaceAround />
    const snapshot = `
  <div
    style="display: flex; align-content: space-around;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('allows the align-content stretch to be set', async () => {
    const component = <Flex alignContentStretch />
    const snapshot = `
  <div
    style="display: flex; align-content: stretch;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  test('align-content when manually set, overrides simple props', async () => {
    const component = <Flex alignContent='center' alignContentEnd alignContentStart />
    const snapshot = `
  <div
    style="display: flex; align-content: center;"
  />
  `
    matchesSnapshot(component, snapshot)
  })
})

describe('<Flex /> - flex-flow', () => {
  it('allows flex-flow to be set', async () => {
    const component = <Flex flow='row nowrap' />
    const snapshot = `
  <div
    style="display: flex; flex-flow: row nowrap;"
  />
  `
    matchesSnapshot(component, snapshot)
  })
})
