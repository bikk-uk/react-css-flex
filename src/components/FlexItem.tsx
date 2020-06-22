// Libraries
import React from 'react'

// Types
import type { FlexItemProps } from '../index'

function Item({ children, style = {}, ...rest }: FlexItemProps): React.ReactElement {
  return (
    <div style={{ ...style }} {...rest}>
      {children}
    </div>
  )
}

export default Item
