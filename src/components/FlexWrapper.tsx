// Libraries
import React from 'react'

// Props
import type { FlexContainerProps } from '../index'

// Components
import FlexItem from './FlexItem'
import FlexContainer from './FlexContainer'

export class Flex extends React.Component<FlexContainerProps> {
  static Item = FlexItem

  render(): React.ReactElement {
    return <FlexContainer {...this.props} />
  }
}

export default Flex
