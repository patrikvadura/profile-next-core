export const simulateBreakpoint = (breakpoint: string) => {
  const breakpoints = {
    sm: 'only screen and (max-width: 640px)',
    md: 'only screen and (max-width: 768px)',
    lg: 'only screen and (max-width: 1024px)',
  }

  // @ts-ignore
  const mediaQuery = breakpoints[breakpoint]

  if (!mediaQuery) {
    console.warn(`Breakpoint ${breakpoint} is not defined`)
    return
  }

  const mediaQueryList = window.matchMedia(mediaQuery)

  Object.defineProperty(mediaQueryList, 'matches', {
    value: true,
    writable: false,
  })

  window.dispatchEvent(new Event('resize'))
}
