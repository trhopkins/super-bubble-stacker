import React from 'react'
import './styles.css'

const App = (): React.JSX.Element => {
  return (
    <div className='wrapper'>
      <nav>
        <div className='flex flex-col items-center mt-16'>TailwindCSS</div>
        <ul>
          <li>Install</li>
          <li>Docs</li>
        </ul>
      </nav>
      <div className='hero'>
        <h1 className='header'>
          Tailwind CSS makes styling React components easier!
        </h1>
        <button className='bg-black text-white p-2.5 w-fit mt-9'>Get Started</button>
      </div>
    </div>
  )
}

export default App
