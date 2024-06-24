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
        backgroundColor: '#232E88',
        zIndex: '99999',
      }}
    >
      <svg width={100} viewBox="0 0 175 155">
        <path
          className="path"
          fill="none"
          stroke="#05e988"
          strokeWidth="20px"
          d="M10 85.6s108 16.9 21.8-53M97.6 10s-35.8 103.3 49 31M164.4 98.3s-107.6-38.5-35 46.2"
        />
        <circle className="circle" fill="#fca4ed" cx="64.1" cy="133.9" r="17.9" />
      </svg>
      <style jsx>{`
        .path {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: dash 2s ease-in-out forwards;
        }

        .circle {
          animation: fadeIn 2s ease-in-out forwards;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
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
