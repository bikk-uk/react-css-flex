// Libraries
import React from 'react'
import { render } from '@testing-library/react'

export const matchesSnapshot = (input: React.ReactElement, snapshot: string): void => {
  const { container } = render(input)
  expect(container.firstChild).toMatchInlineSnapshot(snapshot)
}
