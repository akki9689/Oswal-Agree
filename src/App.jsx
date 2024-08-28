
import './App.css'

import Product from './components/Home/Product'
import Footer from './components/common/Footer'
// import OurVision from './components/Home/OurVision'

import Navbar from './components/common/Navbar'
import OurVision from './components/Home/OurVision'
import IconSection from './components/Home/IconSection'
import HeroSection from './components/Home/HeroSection'
import PhotoGallery from './components/Galllery/PhotoGallery'
import ProductCard from './components/common/ProductCard'
import image from './images/Products/Bio-Products/Borohit-Plus.png'
const App = () => {

    return (
        <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-open-sans'>
            <Navbar />

            <ProductCard
                imageSrc={image}
                productName="Fila Plus"
                productDescription="Alphacypermethrin 10% SC"
                // onReadMoreClick={handleReadMoreClick}
            />
           

            <Footer />

        </div>

    )

}

export default App
