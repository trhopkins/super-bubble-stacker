import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (): React.JSX.Element => {
  return (
    <footer className='p-1 drop-shadow-lg bg-slate-100 flex flex-row justify-items-start'>
      <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer
