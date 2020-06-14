// Libraries
import React from 'react'

// Types
import type { DivProps } from '../index'

export interface Props extends DivProps {
  test?: string
}

function Item({ children, style = {}, ...rest }: Props): React.ReactElement {
  return (
    <div style={{ ...style }} {...rest}>
      {children}
    </div>
  )
}

export default Item
