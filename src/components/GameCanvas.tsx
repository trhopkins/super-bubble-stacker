import React from 'react'
import CanvasComponent from './Canvas'

const GameCanvas = (): React.JSX.Element => {
  return (
    <div id='full-view' className='flex flex-row'>
      <div id='player-stage' className='flex flex-row m-2'>
        <div id='left-stage' className='border-green-500 border-2 w-20 m-2'></div>
        <div id='center-stage' className='flex flex-col m-2'>
          <div id='nuisance' className='border-red-500 border-2 m-2'>
            <CanvasComponent draw={drawGame} width={192} height={32} />
          </div>
          <div id='stage' className='border-blue-500 border-2 m-2'>
            <CanvasComponent draw={drawGame} width={192} height={416} />
          </div>
        </div>
        <div id='right-stage'>
          <div id='queue' className='border-yellow-500 border-2 m-2'>
            <CanvasComponent draw={drawGame} width={64} height={128} />
          </div>
        </div>
      </div>
    </div>
  )
}

const drawGame = (context: CanvasRenderingContext2D): void => {
  context.fillStyle = 'rgb(200, 0, 0)'
  context.fillRect(10, 10, 50, 50)
  context.fillStyle = 'rgba(0, 0, 200, 0.5)'
  context.fillRect(30, 30, 50, 50)
}

export default GameCanvas

// {/* player's viewports: nuisance, game, queue */}
// <Canvas draw={drawGame} width={192} height={32} />
// <Canvas draw={drawGame} width={192} height={416} />
// <Canvas draw={drawGame} width={48} height={128} />
// {/* opponent's viewports */}
// <Canvas draw={drawGame} width={192} height={32} />
// <Canvas draw={drawGame} width={192} height={416} />
// <Canvas draw={drawGame} width={48} height={128} />
