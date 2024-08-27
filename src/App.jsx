
import './App.css'

import Product from './components/Home/Product'
import Footer from './components/common/Footer'
// import OurVision from './components/Home/OurVision'

import Navbar from './components/Home/Navbar'
import OurVision from './components/Home/OurVision'
import IconSection from './components/Home/IconSection'
import HeroSection from './components/Home/HeroSection'
import PhotoGallery from './components/Galllery/PhotoGallery'

const App = () => {
   
    return (
        <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-open-sans'>
           <Navbar/>
           <HeroSection/>
           <Product />
           <OurVision/>

           <IconSection/>
           <PhotoGallery/>
        
            <Footer/>
          
        </div>
        
    )

}

export default App
