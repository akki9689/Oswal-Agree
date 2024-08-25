import HeroSection from './components/Home/HeroSection'
import './App.css'
import Navbar from './components/Home/Navbar'
import Product from './components/Home/Product'
import Footer from './components/Home/Footer'
import Companyprotection from './components/home/Companyprotection'
import OurVision from './components/Home/OurVision'
import IconSection from './components/Home/IconSection'


const App = () => {
    return (
        <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-open-sans'>
           <Navbar/>
           <HeroSection/>
           {/* <Companyprotection/> */}
           <Product />
           <OurVision/>
           <IconSection/>
            <Footer/>
          
        </div>
        
    )

}

export default App
