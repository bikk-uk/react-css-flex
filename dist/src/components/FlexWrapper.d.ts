import React from 'react'
import type { FlexProps } from './index'
import FlexItem from './FlexItem'
export declare class FlexWrapper extends React.Component<FlexProps> {
  static Item: typeof FlexItem
  render(): React.ReactElement
}
export default FlexWrapper
