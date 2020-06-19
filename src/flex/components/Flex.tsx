// Libraries
import React from 'react'
import {
  FlexDirectionProperty,
  FlexWrapProperty,
  JustifyContentProperty,
  AlignItemsProperty,
  AlignContentProperty,
} from 'csstype'

// Props
import { FlexProps } from './index'

function Flex({
  // 'display'
  inline,

  // 'flex-direction' short
  row,
  rowReverse,
  column,
  columnReverse,
  // 'flex-direction' manual
  flexDirection,

  // 'flex-wrap' short
  wrap,
  noWrap,
  wrapReverse,
  // 'flex-wrap' manual
  flexWrap,

  // 'justify-content' short
  justifyStart,
  justifyEnd,
  justifyCenter,
  justifySpaceBetween,
  justifySpaceAround,
  // 'justify-content' manual
  justifyContent,

  // 'align-items' short
  alignItemsStart,
  alignItemsEnd,
  alignItemsCenter,
  alignItemsBaseline,
  alignItemsStretch,
  // 'align-items' manual
  alignItems,

  // 'align-content' short
  alignContentStart,
  alignContentEnd,
  alignContentCenter,
  alignContentSpaceBetween,
  alignContentSpaceAround,
  alignContentStretch,
  // 'align-content' manual
  alignContent,

  // 'flex-flow'
  flow,

  // required
  style = {},
  children,
  ...rest
}: FlexProps): React.ReactElement {
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

  const parseJustifyContent = React.useCallback(() => {
    // the manual version has been provided, that takes precedence
    if (justifyContent) return { justifyContent }
    // see if a specific value has been provided, first come first serve
    let value: JustifyContentProperty | null = null
    if (justifyStart) value = 'flex-start'
    else if (justifyEnd) value = 'flex-end'
    else if (justifyCenter) value = 'center'
    else if (justifySpaceBetween) value = 'space-between'
    else if (justifySpaceAround) value = 'space-around'
    return value ? { justifyContent: value } : {}
  }, [justifyContent, justifyStart, justifyEnd, justifyCenter, justifySpaceBetween, justifySpaceAround])

  const parseAlignItems = React.useCallback(() => {
    // the manual version has been provided, that takes precedence
    if (alignItems) return { alignItems }
    // see if a specific value has been provided, first come first serve
    let value: AlignItemsProperty | null = null
    if (alignItemsStart) value = 'flex-start'
    if (alignItemsEnd) value = 'flex-end'
    if (alignItemsCenter) value = 'center'
    if (alignItemsBaseline) value = 'baseline'
    if (alignItemsStretch) value = 'stretch'
    return value ? { alignItems: value } : {}
  }, [alignItems, alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsBaseline, alignItemsStretch])

  const parseAlignContent = React.useCallback(() => {
    // the manual version has been provided, that takes precedence
    if (alignContent) return { alignContent }
    // see if a specific value has been provided, first come first serve
    let value: AlignContentProperty | null = null
    if (alignContentStart) value = 'flex-start'
    if (alignContentEnd) value = 'flex-end'
    if (alignContentCenter) value = 'center'
    if (alignContentSpaceBetween) value = 'space-between'
    if (alignContentSpaceAround) value = 'space-around'
    if (alignContentStretch) value = 'stretch'
    return value ? { alignContent: value } : {}
  }, [
    alignContent,
    alignContentStart,
    alignContentEnd,
    alignContentCenter,
    alignContentSpaceBetween,
    alignContentSpaceAround,
    alignContentStretch,
  ])

  const parseFlexFlow = React.useCallback(() => {
    // the manual version has been provided, that takes precedence
    return flow ? { flexFlow: flow } : {}
  }, [flow])

  return (
    <div
      style={{
        ...parseDisplay(),
        ...parseFlexDirection(),
        ...parseFlexWrap(),
        ...parseJustifyContent(),
        ...parseAlignItems(),
        ...parseAlignContent(),
        ...parseFlexFlow(),
        ...style,
      }}
      {...rest}>
      {children}
    </div>
  )
}

export default Flex
