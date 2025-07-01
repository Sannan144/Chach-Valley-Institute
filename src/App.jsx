import './App.css'
import Logo from './Logo/Logo'
import Tabs from './Tabs/Tabs'
import HomeText from './HomeText/Hometext'
import OurCourses from './OurCourses/OurCourses'
import Rating from './Rating/Rating'

function App() {


  return (
    <>
      <div className='main max-w-[1600px] h-fit mx-auto'>
        
        <Logo/>
        <Tabs/>
        <div className='hidden md:block'>
          <HomeText/>
          <Rating/>
          <OurCourses/>
        </div>
        <div className='block md:hidden'>
          <OurCourses/>
          <Rating/>
          <HomeText/>
        </div>

      </div>     
    </>
  )
}

export default App
