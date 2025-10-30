import React from 'react'
import Logo from '../Logo/Logo'
import Tabs from '../Tabs/Tabs'
import HomeText from '../HomeText/HomeText'
import Rating from '../Rating/Rating'
import Offer from '../Offer/Offer'
import WhatsappButton from '../WhatsappButton/WhatsappButton'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className='main mx-auto h-fit max-w-[1600px]'>
      <Logo/>
      <WhatsappButton/>
      <Tabs/>
      <HomeText />
      <Rating />
      <Offer />
      <Footer/>
    </div>
  )
}

export default Home
