import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import OurCourses from './OurCourses/OurCourses'; // Path check kar lein
import Products from './Products/Products';
import Services from './Services/Services';
import ServiceDetail from './Services/ServiceDetail';
import ContactUs from './Contact us/ContactUs';
import WhatsappButton from './WhatsappButton/WhatsappButton';
import Blog from './Blog/Blog';
import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        
        {/* UPDATED: Courses Routes */}
        <Route path='/courses' element={<OurCourses />} />
        <Route path='/courses/:courseId' element={<OurCourses />} />
        
        {/* Products Routes */}
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<Products />} />
        
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/services/:serviceId' element={<ServiceDetail />} />
      </Routes>
      <WhatsappButton />
    </>
  );
}

export default App;