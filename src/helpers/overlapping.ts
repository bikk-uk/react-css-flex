export const checkOverlapping = (propName: string, ...props: (boolean | undefined)[]): void => {
  let foundOne = false
  props.forEach((prop: boolean | undefined) => {
    if (prop) {
      if (foundOne) {
        console.warn(`[@react-css/flex] Multiple values have been provided for ${propName}.`)
        return
      }
      foundOne = true
    }
  })
}
