import Canvas from '../components/Canvas'
import React from 'react'

const Home = (): React.JSX.Element => {
  return (
    <>
      <h1 className='p-2'>This is the Home page.</h1>
      <div id='playing-field' className='m-2'>
        <Canvas // playing field: 32x32 pixels in a 6x13 grid
          draw={drawField}
          width={192}
          height={416}
        />
      </div>
    </>
  )
}

const drawField = (context: CanvasRenderingContext2D): void => {
  context.fillStyle = 'rgb(200, 0, 0)'
  context.fillRect(10, 10, 50, 50)
  context.fillStyle = 'rgba(0, 0, 200, 0.5)'
  context.fillRect(30, 30, 50, 50)
}

export default Home
