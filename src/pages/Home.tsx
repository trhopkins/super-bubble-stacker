import GameCanvas from '../components/GameCanvas'
import React from 'react'

const Home = (): React.JSX.Element => {
  return (
    <>
      <h1 className='p-2'>This is the Home page.</h1>
      <div id='playing-field' className='m-2 border-2 border-solid border-blue-500'>
        <GameCanvas />
      </div>
    </>
  )
}

export default Home
