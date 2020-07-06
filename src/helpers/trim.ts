// Types
import type { IndexableCSS } from '../index'

export const trimUndefined = (style: IndexableCSS): IndexableCSS => {
  style = { ...style }
  // remove all CSS Properties that are undefined
  Object.keys(style).forEach((key) => style[key] === undefined && delete style[key])
  return style
}
