import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Loader from './components/common/Loader';
import ScrollTop from './components/common/ScrollTop';
import AOS from "aos";
import "aos/dist/aos.css";
import { LoadingContext } from './components/common/LoadingContext';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Companyprofile = lazy(() => import('./components/about/Companyprofile'));
const Visionabt = lazy(() => import('./components/about/Visionabt'));
const Awards = lazy(() => import('./components/about/Awards'));
const Terms = lazy(() => import('./components/about/Terms'));
const Faq = lazy(() => import('./components/about/Faq'));
const PhotoGallery = lazy(() => import('./components/Galllery/PhotoGallery'));
const Products = lazy(() => import('./components/product/Products'));
const ProductPage = lazy(() => import('./components/product/ProductPage'));
const Contact = lazy(() => import('./components/contactUs/Contact'));
const Branches = lazy(() => import('./components/contactUs/Branches'));
const SearchFilter = lazy(() => import('./components/filter/SearchFilter'));

const App = () => {
    const location = useLocation();
    const { isLoading, setIsLoading } = useContext(LoadingContext);

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo({ top: 0 });
    }, [location.pathname]);

    useEffect(() => {
        // Initialize AOS animations
        AOS.init({
            once: true,
            duration: 900,
            easing: "ease-out-sine",
            delay: 100,
        });

        AOS.refresh();

        // Simulate a loading delay
        setTimeout(() => {
            setIsLoading(false);  // Stop loading after a delay
        }, 2000);  // Adjust the delay as needed
    }, [setIsLoading]);

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
                      
                        <Route path='company-profile' element={<Companyprofile />} />
                        <Route path='vision' element={<Visionabt />} />
                        <Route path='awards' element={<Awards />} />
                        <Route path='terms' element={<Terms />} />
                        <Route path='faq' element={<Faq />} />
                    </Route>

                    {/* Products with dynamic category */}
                    <Route path="/products/:category" element={<Products />} />
                    <Route path="/products/:category/:productName" element={<ProductPage />} />

                    {/* Gallery */}
                    <Route path='/photo-gallery' element={<PhotoGallery />} />

                    {/* Contact */}
                    <Route path='/contact/contact-us' element={<Contact />} />
                    <Route path='/contact/branches' element={<Branches />} />

                    {/* Search product */}
                    <Route path='/search-product' element={<SearchFilter />} />
                </Routes>
            </Suspense>
            <ScrollTop />
            <Footer />
        </div>
    );
};

export default App;
