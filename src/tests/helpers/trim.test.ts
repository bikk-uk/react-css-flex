// Tested Module
import { trimUndefined } from '../../helpers/trim'

describe('trimUndefined', () => {
  it('returns a copy of the provided value back', () => {
    const input = {
      one: 1,
      two: 2,
    }
    const output = trimUndefined(input)
    // should be a duplicate
    expect(input).toEqual(output)
    // should not be the same value
    expect(input).not.toBe(output)
  })

  it('removed the undefined values', () => {
    const input = {
      one: 1,
      two: undefined,
      three: 'three',
    }
    const output = trimUndefined(input)
    // the input should have all the keys
    expect(Object.keys(input)).toEqual(['one', 'two', 'three'])
    // the output should only have keys with defined values
    expect(Object.keys(output)).toEqual(['one', 'three'])
  })
})
