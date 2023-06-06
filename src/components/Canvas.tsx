import React, { useEffect, useRef } from 'react'

interface PlayingFieldProps {
  draw: (context: CanvasRenderingContext2D) => void
  width: number
  height: number
}

const CanvasView = ({ draw, width, height }: PlayingFieldProps): React.JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d')
    if (context != null) {
      draw(context)
    }
  })

  // 32x32 squares in a 6x13 grid
  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
    />
  )
}

export default CanvasView
