import React from 'react'

export default function Preloader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#ffffff',
        zIndex: '99999',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'auto',
          height: 'auto',
          zIndex: '99999',
        }}
      >
        <span
          id="circle1"
          style={{
            margin: '0 4px',
            width: '12px',
            height: '12px',
            borderRadius: '12px',
            backgroundColor: '#CDCECD',
          }}
        />
        <span
          id="circle2"
          style={{
            margin: '0 4px',
            width: '12px',
            height: '12px',
            borderRadius: '12px',
            backgroundColor: '#CDCECD',
          }}
        />
        <span
          id="circle3"
          style={{
            margin: '0 4px',
            width: '12px',
            height: '12px',
            borderRadius: '12px',
            backgroundColor: '#CDCECD',
          }}
        />
      </div>
      <style jsx>{`
        #circle1 {
          animation: fadeIn 2s ease-in-out forwards;
        }
        #circle2 {
          animation: fadeIn 2s ease-in-out forwards;
          animation-delay: 200ms;
        }
        #circle3 {
          animation: fadeIn 2s ease-in-out forwards;
          animation-delay: 400ms;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
