import HeroSection from './components/Home/HeroSection'
import './App.css'
import Product from './components/Home/Product'
import Footer from './components/Home/Footer'
// import OurVision from './components/Home/OurVision'
// import {protectionData} from './data/home/protectionData'

const App = () => {
    return (
        <div className='w-screen min-h-screen overflow-x-hidden font-open-sans'>
        <HeroSection/>
           <HeroSection/>
           <Product />
          <Footer/>
        </div>
        
    )

}

export default App
