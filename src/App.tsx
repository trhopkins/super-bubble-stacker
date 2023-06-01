import React from 'react'
import './styles.css'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import HowToPlay from './pages/HowToPlay'
import Play from './pages/Play'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

const App = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='how-to-play' element={<HowToPlay />} />
        <Route path='play' element={<Play />} />
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
