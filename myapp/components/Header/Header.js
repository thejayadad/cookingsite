import React from 'react'
import TopHeader from './TopHeader/TopHeader'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'

const Header = () => {
  return (
    <header className='bg-header-image bg-cover bg-center bg-no-repeat min-h-screen flex flex-col overflow-hidden'>
        <TopHeader />
        <Navbar />
        <Hero />
    </header>
  )
}

export default Header