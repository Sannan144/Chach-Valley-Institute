import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import OurCourses from './OurCourses/OurCourses';
import Products from './Products/Products';
import Services from './Services/Services';
import ServiceDetail from './Services/ServiceDetail'; // naya component
import ContactUs from './Contact us/ContactUs';
import WhatsappButton from './WhatsappButton/WhatsappButton';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />  
      <Route path='/courses' element={<OurCourses />} />  
      <Route path='/products' element={<Products />} />  
      <Route path='/services' element={<Services />} />  
      <Route path='/contact-us' element={<ContactUs/>} />  
      
      {/* Dynamic route for each service */}
      <Route path='/services/:serviceId' element={<ServiceDetail />} />
    </Routes>
    <WhatsappButton/>
    </>
  );
}

export default App;
