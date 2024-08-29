
import './App.css'

import Product from './components/Home/Product'
import Footer from './components/common/Footer'
// import OurVision from './components/Home/OurVision'
import Branches from './components/contactUs/Branches'

import Navbar from './components/common/Navbar'
import ProductDetails from './components/common/ProductDetails'
import Products from './components/product/Products'

const App = () => {

    return (
        <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-open-sans'>
            <Navbar />
            <Product/>
            <ProductDetails/>

          <Products/>

            <Footer />
            <Branches/>


        </div>

    )

}

export default App
