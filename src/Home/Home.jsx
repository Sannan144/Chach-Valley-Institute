import React from 'react'
import Logo from '../Logo/Logo'
import Tabs from '../Tabs/Tabs'
import HomeText from '../HomeText/Hometext'
import Rating from '../Rating/Rating'
import Offer from '../Offer/Offer'

const Home = () => {
  return (
    <div className='main mx-auto h-fit max-w-[1600px]'>
      <Logo/>
      <Tabs/>
      <HomeText />
      <Rating />
      <Offer />
    </div>
  )
}

export default Home
