
import './App.css'

import Product from './components/Home/Product'
import Footer from './components/Home/Footer'
import Companyprotection from './components/home/Companyprotection'
// import OurVision from './components/Home/OurVision'
import {protectionData} from './data/home/protectionData'
import Navbar from './components/Home/Navbar'
import OurVision from './components/Home/OurVision'
import IconSection from './components/Home/IconSection'


const App = () => {
    return (
        <div className='w-screen min-h-screen overflow-x-hidden font-open-sans'>
        
             <Navbar/>
        <HeroSection/>
           <Companyprotection data={protectionData}/>
          
           {/* <Companyprotection/> */}
           <Product />
           <OurVision/>
           <IconSection/>
            <Footer/>
          
        </div>
        
    )

}

export default App
