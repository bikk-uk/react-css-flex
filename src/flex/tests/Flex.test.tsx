// Libraries
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from './helpers/snapshots'

// Tested Module
import Flex from '../components/Flex'

describe('<Flex />', () => {
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

  test('flex-direction when manually set overrides simple props', async () => {
    const component = <Flex flexDirection='column' row rowReverse />
    const snapshot = `
  <div
    style="display: flex; flex-direction: column;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

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

  test('flex-wrap when manually set overrides simple props', async () => {
    const component = <Flex flexWrap='wrap' noWrap wrapReverse />
    const snapshot = `
  <div
    style="display: flex; flex-wrap: wrap;"
  />
  `
    matchesSnapshot(component, snapshot)
  })
})
