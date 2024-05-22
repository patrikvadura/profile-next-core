import React, { useEffect, useRef } from 'react'
import ReactDOMServer from 'react-dom/server'

interface DeviceEmulatorProps {
  width: number
  height: number
  children: React.ReactNode
}

const DeviceEmulator: React.FC<DeviceEmulatorProps> = ({ width, height, children }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframeDoc = iframeRef.current?.contentDocument
    if (iframeDoc) {
      iframeDoc.open()
      iframeDoc.write(`
        <html>
          <head>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>body { margin: 0; padding: 0; }</style>
          </head>
          <body>
            <div id="root">${ReactDOMServer.renderToString(<>{children}</>)}</div>
          </body>
        </html>
      `)
      iframeDoc.close()
    }
  }, [children])

  return (
    <div
      style={{
        border: '12px solid black',
        borderRadius: '1rem',
        overflow: 'hidden',
        width,
        height,
        margin: 'auto',
      }}
    >
      <iframe
        ref={iframeRef}
        title="device-emulator"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  )
}

export default DeviceEmulator
