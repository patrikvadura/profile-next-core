export const setBreakpointClass = (breakpoint: string) => {
  const root = document.documentElement

  root.classList.remove('sm', 'md', 'lg')

  root.classList.add(breakpoint)
}
