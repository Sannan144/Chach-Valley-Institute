import React from 'react'
import Logo from '../Logo/Logo'
import Tabs from '../Tabs/Tabs'

const Services = () => {
  return (
    <>
    <Logo/>
    <Tabs/>
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-green-700">Services Page</h1>
      <p className="mt-2 text-gray-600">
        Yeh Services page hai — yahan aap apni services ke details show kar sakte ho.
      </p>
    </div>
    </>
  )
}

export default Services
