import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (): React.JSX.Element => {
  return (
    <header className="sticky top-0">
      <nav className="p-2 flex flex-wrap drop-shadow-md bg-slate-100 justify-start gap-2">
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
    <div className="text-lg text-slate-900 select-none hover:bg-pink-200 px-2 border-blue-950 border rounded-md">
      <Link
        to={props.link}
      >
        {props.text}
      </Link>
    </div>
  )
}

export default NavBar
