import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = (): React.JSX.Element => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
