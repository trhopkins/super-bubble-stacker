import React from 'react'
import './styles.css'
import { Outlet, Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'

const App = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  )
}

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

const Home = (): React.JSX.Element => {
  return (
    <h1>Homepage</h1>
  )
}

const About = (): React.JSX.Element => {
  return (
    <h1>About me.</h1>
  )
}

export default App
