const tailwindBreakpoints = ['base', 'sm', 'md', 'lg', 'xl', '2xl']

const getRelevantBreakpoints = (breakpoint: string): string[] => {
  const index = tailwindBreakpoints.indexOf(breakpoint)
  if (index === -1) return ['base']
  return tailwindBreakpoints.slice(0, index + 1)
}

export const getBreakpointStyles = (
  classes: string,
  breakpoint: string,
  preview: boolean = false,
): string => {
  if (!preview) {
    console.log(`Preview is false, returning original classes: ${classes}`)
    return classes
  }

  const relevantBreakpoints = getRelevantBreakpoints(breakpoint)
  console.log(`Relevant breakpoints for ${breakpoint}: ${relevantBreakpoints}`)

  const classArray = classes.split(' ')

  const finalClassSet = new Set<string>()

  // Add base classes
  classArray.forEach(cls => {
    if (!cls.includes(':')) {
      finalClassSet.add(cls)
    }
  })

  console.log(`Base classes: ${Array.from(finalClassSet).join(' ')}`)

  // Add classes for relevant breakpoints, ensuring correct precedence
  relevantBreakpoints.forEach(bp => {
    classArray.forEach(cls => {
      if (cls.startsWith(`${bp}:`)) {
        finalClassSet.add(cls)
      }
    })
  })

  const finalClasses = Array.from(finalClassSet).join(' ')
  console.log(`Final classes for breakpoint ${breakpoint}: ${finalClasses}`)

  return finalClasses
}
