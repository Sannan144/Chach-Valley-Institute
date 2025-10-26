import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Tabs from '../Tabs/Tabs'

const Layout = () => {
  return (
    <>
      <header className='max-w-[1600px] mx-auto p-4 flex justify-between items-center'>
        <Logo />
        <Tabs />
      </header>
      <main className='max-w-[1600px] mx-auto'>
        <Outlet /> {/* Ye render karega child routes */}
      </main>
    </>
  )
}

export default Layout
