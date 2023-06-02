import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = (): React.JSX.Element => {
  return (
    <div>
      <nav>
        <ul><li><Link to="/">Home</Link></li></ul>
        <ul><li><Link to="/about">About</Link></li></ul>
        <ul><li><Link to="/how-to-play">How To Play</Link></li></ul>
        <ul><li><Link to="/play">Play</Link></li></ul>
        <ul><li><Link to="/profile">Profile</Link></li></ul>
        <ul><li><Link to="/settings">Settings</Link></li></ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default NavBar
