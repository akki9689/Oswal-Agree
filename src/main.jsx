import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// index.js or App.js
import 'swiper/swiper-bundle.css';
import { Toaster } from 'react-hot-toast';
import { LoadingProvider } from './components/common/LoadingContext.jsx';


AOS.init();


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <LoadingProvider>
   <App />
   <Toaster/>
   </LoadingProvider>
  </BrowserRouter>
   

);
