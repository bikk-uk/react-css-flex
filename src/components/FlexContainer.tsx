// Libraries
import React from 'react'
import type { Property } from 'csstype'

// Helpers
import { checkOverlapping } from '../helpers/overlapping'
import { trimUndefined } from '../helpers/trim'

// Types
import type { FlexContainerProps, ContainerTags } from '../index'

function FlexContainer({
  // 'display'
  inline,

  // 'gap'
  gap,

  // 'row-gap'
  rowGap,

  // 'column-gap'
  columnGap,

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

  // tag name
  as: tagName,

  // required
  style = {},
  children,
  ...rest
}: FlexContainerProps): React.ReactElement {
  const displayStyle = React.useMemo(
    (): React.CSSProperties => ({
      display: inline ? 'inline-flex' : 'flex',
    }),
    [inline],
  )

  const gapStyle = React.useMemo((): React.CSSProperties => {
    return gap !== undefined ? { gap } : {}
  }, [gap])

  const rowGapStyle = React.useMemo((): React.CSSProperties => {
    return rowGap !== undefined ? { rowGap } : {}
  }, [rowGap])

  const columnGapStyle = React.useMemo((): React.CSSProperties => {
    return columnGap !== undefined ? { columnGap } : {}
  }, [columnGap])

  const flexDirectionStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (flexDirection) return { flexDirection }
    // see if a specific value has been provided, first come first serve
    checkOverlapping('flex-direction', row, rowReverse, column, columnReverse)
    let value: Property.FlexDirection | null = null
    if (row) value = 'row'
    else if (rowReverse) value = 'row-reverse'
    else if (column) value = 'column'
    else if (columnReverse) value = 'column-reverse'
    return value ? { flexDirection: value } : {}
  }, [column, columnReverse, flexDirection, row, rowReverse])

  const flexWrapStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (flexWrap) return { flexWrap }
    // see if a specific value has been provided, first come first serve
    checkOverlapping('flex-wrap', wrap, noWrap, wrapReverse)
    let value: Property.FlexWrap | null = null
    if (wrap) value = 'wrap'
    else if (noWrap) value = 'nowrap'
    else if (wrapReverse) value = 'wrap-reverse'
    return value ? { flexWrap: value } : {}
  }, [flexWrap, noWrap, wrap, wrapReverse])

  const justifyContentStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (justifyContent) return { justifyContent }
    // see if a specific value has been provided, first come first serve
    checkOverlapping(
      'justify-content',
      justifyStart,
      justifyEnd,
      justifyCenter,
      justifySpaceBetween,
      justifySpaceAround,
    )
    let value: Property.JustifyContent | null = null
    if (justifyStart) value = 'flex-start'
    else if (justifyEnd) value = 'flex-end'
    else if (justifyCenter) value = 'center'
    else if (justifySpaceBetween) value = 'space-between'
    else if (justifySpaceAround) value = 'space-around'
    return value ? { justifyContent: value } : {}
  }, [justifyContent, justifyStart, justifyEnd, justifyCenter, justifySpaceBetween, justifySpaceAround])

  const alignItemsStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (alignItems) return { alignItems }
    // see if a specific value has been provided, first come first serve
    checkOverlapping(
      'align-items',
      alignItemsStart,
      alignItemsEnd,
      alignItemsCenter,
      alignItemsBaseline,
      alignItemsStretch,
    )
    let value: Property.AlignItems | null = null
    if (alignItemsStart) value = 'flex-start'
    else if (alignItemsEnd) value = 'flex-end'
    else if (alignItemsCenter) value = 'center'
    else if (alignItemsBaseline) value = 'baseline'
    else if (alignItemsStretch) value = 'stretch'
    return value ? { alignItems: value } : {}
  }, [alignItems, alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsBaseline, alignItemsStretch])

  const alignContentStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (alignContent) return { alignContent }
    // see if a specific value has been provided, first come first serve
    checkOverlapping(
      'align-content',
      alignContentStart,
      alignContentEnd,
      alignContentCenter,
      alignContentSpaceBetween,
      alignContentSpaceAround,
      alignContentStretch,
    )
    let value: Property.AlignContent | null = null
    if (alignContentStart) value = 'flex-start'
    else if (alignContentEnd) value = 'flex-end'
    else if (alignContentCenter) value = 'center'
    else if (alignContentSpaceBetween) value = 'space-between'
    else if (alignContentSpaceAround) value = 'space-around'
    else if (alignContentStretch) value = 'stretch'
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

  const flexFlowStyle = React.useMemo((): React.CSSProperties => {
    return flow !== undefined ? { flexFlow: flow } : {}
  }, [flow])

  const combinedStyle = trimUndefined({
    ...displayStyle,
    ...gapStyle,
    ...rowGapStyle,
    ...columnGapStyle,
    ...flexDirectionStyle,
    ...flexWrapStyle,
    ...justifyContentStyle,
    ...alignItemsStyle,
    ...alignContentStyle,
    ...flexFlowStyle,
    ...style,
  })

  const Tag = (tagName ?? 'div') as keyof ContainerTags
  return (
    <Tag style={combinedStyle} {...rest}>
      {children}
    </Tag>
  )
}

export default FlexContainer
