// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from './helpers/snapshots'

// Tested Module
import FlexWrapper from '../components/FlexWrapper'

describe('<FlexWrapper />', () => {
  it('renders an empty flex container', async () => {
    const component = <FlexWrapper />
    const snapshot = `
<div
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a flex container with string content', async () => {
    const component = <FlexWrapper>Children</FlexWrapper>
    const snapshot = `
<div
  style="display: flex;"
>
  Children
</div>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a flex container with children', async () => {
    const component = (
      <FlexWrapper>
        <div>Children</div>
      </FlexWrapper>
    )
    const snapshot = `
<div
  style="display: flex;"
>
  <div>
    Children
  </div>
</div>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a flex container with a flex item', async () => {
    const component = (
      <FlexWrapper>
        <FlexWrapper.Item>Item 1</FlexWrapper.Item>
      </FlexWrapper>
    )
    const snapshot = `
<div
  style="display: flex;"
>
  <div>
    Item 1
  </div>
</div>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a flex container with flex items', async () => {
    const component = (
      <FlexWrapper>
        <FlexWrapper.Item>Item 1</FlexWrapper.Item>
        <FlexWrapper.Item>Item 2</FlexWrapper.Item>
      </FlexWrapper>
    )
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
`
    matchesSnapshot(component, snapshot)
  })
})
