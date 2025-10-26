import React from 'react'
import Logo from '../Logo/Logo'
import Offer from '../Offer/Offer'

const Products = () => {
  return (
    <>
    <Logo/>
    <Offer/>
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-blue-700">Products Page</h1>
      <p className="mt-2 text-gray-600">
        Yeh Products page hai — yahan aap apne products ka content show kar sakte ho.
      </p>
    </div>
    </>
  )
}

export default Products
