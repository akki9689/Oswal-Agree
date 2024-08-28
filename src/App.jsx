
import './App.css'

import Product from './components/Home/Product'
import Footer from './components/common/Footer'
// import OurVision from './components/Home/OurVision'

import Navbar from './components/common/Navbar'
import Products from './components/product/Products'
const App = () => {

    return (
        <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-open-sans'>
            <Navbar />
            <Product/>

          <Products/>

            <Footer />

        </div>

    )

}

export default App
