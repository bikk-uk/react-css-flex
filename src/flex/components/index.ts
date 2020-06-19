// Libraries
import {
  FlexDirectionProperty,
  FlexWrapProperty,
  JustifyContentProperty,
  AlignItemsProperty,
  AlignContentProperty,
  FlexFlowProperty,
} from 'csstype'

// Types
import type { DivProps } from '../index'

export interface FlexProps extends DivProps {
  // 'display'
  inline?: boolean

  // 'flex-direction' short
  row?: boolean
  rowReverse?: boolean
  column?: boolean
  columnReverse?: boolean
  // 'flex-direction' manual
  flexDirection?: FlexDirectionProperty

  // 'flex-wrap' short
  wrap?: boolean
  noWrap?: boolean
  wrapReverse?: boolean
  // 'flex-wrap' manual
  flexWrap?: FlexWrapProperty

  // 'justify-content' short
  justifyStart?: boolean
  justifyEnd?: boolean
  justifyCenter?: boolean
  justifySpaceBetween?: boolean
  justifySpaceAround?: boolean
  // 'justify-content' manual
  justifyContent?: JustifyContentProperty

  // 'align-items' short
  alignItemsStart?: boolean
  alignItemsEnd?: boolean
  alignItemsCenter?: boolean
  alignItemsBaseline?: boolean
  alignItemsStretch?: boolean
  // 'align-items' manual
  alignItems?: AlignItemsProperty

  // 'align-content' short
  alignContentStart?: boolean
  alignContentEnd?: boolean
  alignContentCenter?: boolean
  alignContentSpaceBetween?: boolean
  alignContentSpaceAround?: boolean
  alignContentStretch?: boolean
  // 'align-content' manual
  alignContent?: AlignContentProperty

  flow?: FlexFlowProperty
}
