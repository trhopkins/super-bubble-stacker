import React from 'react'
import './styles.css'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Home from './pages/Home'
import Tutorial from './pages/Tutorial'
import Play from './pages/Play'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Base from './pages/Base'

const App = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Base />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='how-to-play' element={<Tutorial />} />
        <Route path='play' element={<Play />} />
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
