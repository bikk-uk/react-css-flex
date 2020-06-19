// Libraries
import React from 'react'

// Types
import type { DivProps } from '../index'

function Item({ children, style = {}, ...rest }: DivProps): React.ReactElement {
  return (
    <div style={{ ...style }} {...rest}>
      {children}
    </div>
  )
}

export default Item
