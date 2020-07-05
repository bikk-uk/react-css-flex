import React from 'react'
import type { FlexContainerProps } from '../index'
import FlexItem from './FlexItem'
export declare class Flex extends React.Component<FlexContainerProps> {
  static Item: typeof FlexItem
  render(): React.ReactElement
}
export default Flex
