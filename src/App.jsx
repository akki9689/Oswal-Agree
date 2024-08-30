import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Loader from './components/common/Loader';
import './App.css';
import './index.css';


// Lazy load components
const Home = lazy(() => import('./pages/Home'));

const About = lazy(() => import('./pages/About'));
const Companyprofile = lazy(() => import('./components/about/Companyprofile'));
const Visionabt = lazy(() => import('./components/about/Visionabt'));
const Awards = lazy(() => import('./components/about/Awards'));
const Terms = lazy(() => import('./components/about/Terms'));
const Faq = lazy(() => import('./components/about/Faq'));

const PhotoGallery = lazy(() => import('./components/Galllery/PhotoGallery'))
const Products = lazy(() => import('./components/product/Products'));
const ProductPage = lazy(() => import('./components/product/ProductPage'));
const Filter = lazy(() => import('./components/filter/SearchFilter'));


const App = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate a loading delay for demonstration purposes
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100); // Adjust the timing as needed

        //     return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-open-sans'>
            <Navbar />

            <Suspense fallback={<Loader />}>
                <Routes>
                    {/* Homepage */}
                    <Route path='/' element={<Home />} />

                    {/* About */}
                    <Route path='/about' element={<About />}>
                        {/* Redirect /about to /about/company-profile */}
                        <Route index element={<Navigate to="/about/company-profile" replace />} />
                        <Route path='company-profile' element={<Companyprofile />} />
                        <Route path='vision' element={<Visionabt />} />
                        <Route path='awards' element={<Awards />} />
                        <Route path='terms' element={<Terms />} />
                        <Route path='faq' element={<Faq />} />
                    </Route>

                    {/* Products with dynamic category */}

                    <Route path="/products/:category" element={<Products />} />
                    <Route path="/products/:category/:productName" element={<ProductPage />} />
                    <Route path='/Filter' element={<Filter />} />

                    {/* Gallery */}
                    <Route path='/photo-gallery' element={<PhotoGallery />} />

                    {/* Contact */}


                </Routes>
            </Suspense>
            <Footer />
            {/* 
            <Contact/> */}
        </div>
    );

};

export default App;
