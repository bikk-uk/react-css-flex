// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module (export named as it would be)
import Flex from '../../components/FlexWrapper'

describe('<FlexWrapper />', () => {
  it('renders an empty flex container', async () => {
    const component = <Flex />
    const snapshot = `
<div
  style="display: flex;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a flex container with string content', async () => {
    const component = <Flex>Children</Flex>
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
      <Flex>
        <div>Children</div>
      </Flex>
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
      <Flex>
        <Flex.Item>Item 1</Flex.Item>
      </Flex>
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

  it('renders a flex container with a flex item, both support independent props', async () => {
    const component = (
      <Flex alignContentCenter>
        <Flex.Item order={5}>Item 1</Flex.Item>
      </Flex>
    )
    const snapshot = `
<div
  style="display: flex; align-content: center;"
>
  <div
    style="order: 5;"
  >
    Item 1
  </div>
</div>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a flex container with flex items, both support independent props', async () => {
    const component = (
      <Flex row justifyEnd>
        <Flex.Item alignSelfCenter>Item 1</Flex.Item>
        <Flex.Item basis='auto'>Item 2</Flex.Item>
      </Flex>
    )
    const snapshot = `
<div
  style="display: flex; flex-direction: row; justify-content: flex-end;"
>
  <div
    style="align-self: center;"
  >
    Item 1
  </div>
  <div
    style="flex-basis: auto;"
  >
    Item 2
  </div>
</div>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a flex container with flex items, rendered as different tag names', async () => {
    const component = (
      <Flex as='main' column alignItemsCenter>
        <Flex.Item as='section' alignSelfStretch>
          Item 1
        </Flex.Item>
        <Flex.Item as='section' alignSelfStretch>
          Item 2
        </Flex.Item>
      </Flex>
    )
    const snapshot = `
<main
  style="display: flex; flex-direction: column; align-items: center;"
>
  <section
    style="align-self: stretch;"
  >
    Item 1
  </section>
  <section
    style="align-self: stretch;"
  >
    Item 2
  </section>
</main>
`
    matchesSnapshot(component, snapshot)
  })
})
