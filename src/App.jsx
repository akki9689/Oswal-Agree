
import './App.css'

import Product from './components/Home/Product'
import Footer from './components/common/Footer'
import Companyprotection from './components/home/Companyprotection'
// import OurVision from './components/Home/OurVision'

import Navbar from './components/Home/Navbar'
import OurVision from './components/Home/OurVision'
import IconSection from './components/Home/IconSection'
import HeroSection from './components/Home/HeroSection'
import Companyprofile from './components/about/Companyprofile'
import PhotoGallery from './components/Galllery/PhotoGallery'
import Visionabt from './components/about/Visionabt'

const App = () => {
    return (
        <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-open-sans'>
           <Navbar/>
           {/* <HeroSection/>
           <Companyprotection/>
           <Product />
           <OurVision/>

           <IconSection/>
           <PhotoGallery/> */}
           
            <Footer/>
          
        </div>
        
    )

}

export default App
