import React from 'react'

interface Props {
  currentBreakpoint: any
  children?: React.ReactNode
}

export default function BreakpointPreview({ currentBreakpoint, children }: Props) {
  return (
    <div
      className={`w-full flex flex-col justify-end overflow-hidden ${
        currentBreakpoint === 0 ? 'mb-12' : currentBreakpoint === 1 ? 'mb-12' : 'mb-0'
      }`}
    >
      <div
        className={`mx-auto px-0 border-white bg-white overflow-x-hidden overflow-y-scroll z-20 ${
          currentBreakpoint === 0
            ? 'rounded-3xl border-[12px]'
            : currentBreakpoint === 1
            ? 'rounded-3xl border-[12px]'
            : 'rounded-t-3xl border-l-[12px] border-r-[12px] border-t-[12px]'
        }`}
      >
        <div
          className="overflow-hidden"
          style={{
            width: currentBreakpoint === 0 ? '20vw' : currentBreakpoint === 1 ? '65vw' : '90vw',
            height: currentBreakpoint === 0 ? '70vh' : currentBreakpoint === 1 ? '75vh' : '80vh',
            margin: '0',
            padding: '0',
          }}
        >
          <div
            className={`${
              currentBreakpoint === 0 ? 'pb-12' : currentBreakpoint === 1 ? 'pb-32' : 'pb-24'
            } fontDefault`}
            style={{
              transform:
                currentBreakpoint === 0
                  ? 'scale(0.73)'
                  : currentBreakpoint === 1
                  ? 'scale(0.90)'
                  : 'scale(0.91)',
              transformOrigin: 'top left',
              width: currentBreakpoint === 0 ? '28vw' : currentBreakpoint === 1 ? '73vw' : '100vw',
              height: '100vh',
              overflow: 'scroll',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
