// Libraries
import React from 'react'
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

export interface Props extends DivProps {
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
}

function Flex({
  // display
  inline,
  // flex-direction
  row,
  rowReverse,
  column,
  columnReverse,
  flexDirection,
  // flex-wrap
  wrap,
  noWrap,
  wrapReverse,
  flexWrap,
  // required
  style = {},
  children,
  ...rest
}: Props): React.ReactElement {
  const parseDisplay = React.useCallback(
    (): React.CSSProperties => ({
      display: inline ? 'inline-flex' : 'flex',
    }),
    [inline],
  )

  const parseFlexDirection = React.useCallback((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (flexDirection) return { flexDirection }
    // see if a specific value has been provided, first come first serve
    let value: FlexDirectionProperty | null = null
    if (row) value = 'row'
    else if (rowReverse) value = 'row-reverse'
    else if (column) value = 'column'
    else if (columnReverse) value = 'column-reverse'
    return value ? { flexDirection: value } : {}
  }, [column, columnReverse, flexDirection, row, rowReverse])

  const parseFlexWrap = React.useCallback((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (flexWrap) return { flexWrap }
    // see if a specific value has been provided, first come first serve
    let value: FlexWrapProperty | null = null
    if (wrap) value = 'wrap'
    else if (noWrap) value = 'nowrap'
    else if (wrapReverse) value = 'wrap-reverse'
    return value ? { flexWrap: value } : {}
  }, [flexWrap, noWrap, wrap, wrapReverse])

  return (
    <div
      style={{
        ...parseDisplay(),
        ...parseFlexDirection(),
        ...parseFlexWrap(),
        ...style,
      }}
      {...rest}>
      {children}
    </div>
  )
}

export default Flex
