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
    return classes
  }

  const relevantBreakpoints = getRelevantBreakpoints(breakpoint)

  const classArray = classes.split(' ')

  const finalClassSet = new Set<string>()

  // Add base classes and dark classes
  classArray.forEach(cls => {
    if (!cls.includes(':') || cls.startsWith('dark:') || cls.startsWith('prose-')) {
      finalClassSet.add(cls)
    }
  })

  // Add classes for relevant breakpoints, ensuring correct precedence
  relevantBreakpoints.forEach(bp => {
    classArray.forEach(cls => {
      if (cls.startsWith(`${bp}:`)) {
        finalClassSet.add(cls)
      }
    })
  })

  const finalClasses = Array.from(finalClassSet).join(' ')

  return finalClasses
}
