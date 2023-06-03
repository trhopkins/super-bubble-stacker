import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (): React.JSX.Element => {
  return (
    <header className="sticky top-0">
      <nav className="py-1 flex flex-wrap drop-shadow-md bg-slate-100 justify-start">
        <NavigationLink link='/' text='Super Bubble Stacker' />
        <NavigationLink link='/play' text='Play' />
        <NavigationLink link='/how-to-play' text='Tutorial' />
        <NavigationLink link='/about' text='About' />
        <NavigationLink link='/profile' text='Profile' />
        <NavigationLink link='/settings' text='Settings' />
      </nav>
    </header>
  )
}

const NavigationLink = (props: { link: string, text: string }): React.JSX.Element => {
  return (
    <Link
      to={props.link}
      className='text-lg text-slate-900 select-all hover:bg-pink-200 px-2 border-blue-50'
    >
      {props.text}
    </Link>
  )
}

export default NavBar
