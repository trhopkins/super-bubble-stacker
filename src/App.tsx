import React from 'react'
import './styles.css'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'

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

export default App
