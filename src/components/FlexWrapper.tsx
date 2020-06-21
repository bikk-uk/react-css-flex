// Libraries
import React from 'react'

// Props
import type { FlexProps } from './index'

// Components
import Flex from './Flex'
import FlexItem from './FlexItem'

export class FlexWrapper extends React.Component<FlexProps> {
  static Item = FlexItem

  render(): React.ReactElement {
    return <Flex {...this.props} />
  }
}

export default FlexWrapper
