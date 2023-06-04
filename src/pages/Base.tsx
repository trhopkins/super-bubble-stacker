import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import React from 'react'
import { Outlet } from 'react-router'

/** page which all pages are built atop */
const Base = (): React.JSX.Element => {
  return (
    <>
      <NavBar />
      {/* <main className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 min-h-screen'> */}
      <main className='h-screen bg-slate-200'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Base
