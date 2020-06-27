// Tested Module
import { checkOverlapping } from '../../helpers/overlapping'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('checkOverlapping', () => {
  it('handles providing no props', () => {
    checkOverlapping('name')
    expect(global.console.warn).not.toHaveBeenCalled()
  })

  it('does not warn if there are no truthy values', () => {
    checkOverlapping('name', undefined, undefined, false)
    expect(global.console.warn).not.toHaveBeenCalled()
  })

  it('does not warn if there is one truthy value', () => {
    checkOverlapping('name', undefined, true, false)
    expect(global.console.warn).not.toHaveBeenCalled()
  })

  it('warns if there are multiple truthy values', () => {
    checkOverlapping('name', true, undefined, true)
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith('[@react-css/flex] Multiple values have been provided for name.')
  })
})
