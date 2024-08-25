import HeroSection from './components/Home/HeroSection'
import './App.css'
import Navbar from './components/Home/Navbar'
import Product from './components/Home/Product'
import Footer from './components/Home/Footer'
// import OurVision from './components/Home/OurVision'
// import {protectionData} from './data/home/protectionData'
// import Navbar from './components/Home/Navbar'

const App = () => {
    return (
        <div className='w-screen min-h-screen overflow-x-hidden font-open-sans'>
            <Navbar/>
           <HeroSection/>
           <Product />
          <Footer/>
          
        </div>
        
    )

}

export default App
