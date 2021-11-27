// Libraries
import React from 'react'
import type { Property } from 'csstype'

// Helpers
import { checkOverlapping } from '../helpers/overlapping'
import { trimUndefined } from '../helpers/trim'

// Types
import type { FlexItemProps, ContainerTags } from '../index'

function FlexItem({
  // 'order'
  order,

  // 'flex-grow'
  grow,

  // 'flex-shrink'
  shrink,

  // 'flex-basis'
  basis,

  // 'flex'
  flex,

  // 'align-self' short
  alignSelfAuto,
  alignSelfStart,
  alignSelfEnd,
  alignSelfCenter,
  alignSelfBaseline,
  alignSelfStretch,
  // 'align-self' manual
  alignSelf,

  // tag name
  as: tagName,

  // required
  style = {},
  children,
  ...rest
}: FlexItemProps): React.ReactElement {
  const orderStyle = React.useMemo((): React.CSSProperties => {
    return order !== undefined ? { order: order } : {}
  }, [order])

  const flexGrowStyle = React.useMemo((): React.CSSProperties => {
    return grow !== undefined ? { flexGrow: grow } : {}
  }, [grow])

  const flexShrinkStyle = React.useMemo((): React.CSSProperties => {
    return shrink !== undefined ? { flexShrink: shrink } : {}
  }, [shrink])

  const flexBasisStyle = React.useMemo((): React.CSSProperties => {
    return basis !== undefined ? { flexBasis: basis } : {}
  }, [basis])

  const flexStyle = React.useMemo((): React.CSSProperties => {
    return flex !== undefined ? { flex: flex } : {}
  }, [flex])

  const alignSelfStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (alignSelf) return { alignSelf }
    // see if a specific value has been provided, first come first serve
    checkOverlapping(
      'align-self',
      alignSelfAuto,
      alignSelfStart,
      alignSelfEnd,
      alignSelfCenter,
      alignSelfBaseline,
      alignSelfStretch,
    )
    let value: Property.AlignSelf | null = null
    if (alignSelfAuto) value = 'auto'
    else if (alignSelfStart) value = 'flex-start'
    else if (alignSelfEnd) value = 'flex-end'
    else if (alignSelfCenter) value = 'center'
    else if (alignSelfBaseline) value = 'baseline'
    else if (alignSelfStretch) value = 'stretch'
    return value ? { alignSelf: value } : {}
  }, [alignSelf, alignSelfAuto, alignSelfStart, alignSelfEnd, alignSelfCenter, alignSelfBaseline, alignSelfStretch])

  const combinedStyle = trimUndefined({
    ...orderStyle,
    ...flexGrowStyle,
    ...flexShrinkStyle,
    ...flexBasisStyle,
    ...flexStyle,
    ...alignSelfStyle,
    ...style,
  })

  const Tag = (tagName ?? 'div') as keyof ContainerTags
  return (
    <Tag style={combinedStyle} {...rest}>
      {children}
    </Tag>
  )
}

export default FlexItem
