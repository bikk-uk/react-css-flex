// Libraries
import React from 'react'
import { render } from '@testing-library/react'

// Tested Module
import Flex from '../components/Flex'

describe('test', () => {
  test('it renders', async () => {
    const { findByText } = render(<Flex />)

    await findByText('Flex')
  })
})
