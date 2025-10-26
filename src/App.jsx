import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import OurCourses from './OurCourses/OurCourses'
import Products from './Products/Products'
import Services from './Services/Services'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />  
      <Route path='/courses' element={<OurCourses/>} />  
      <Route path='/products' element={<Products/>} />  
      <Route path='/services' element={<Services/>} />  
    </Routes>
  )
}

export default App
