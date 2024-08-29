import React from "react";
import HeroSection from "../components/Home/HeroSection";

import Companyprotection from "../components/home/Companyprotection";
import Product from "../components/Home/Product";
import OurVision from "../components/Home/OurVision";
import IconSection from "../components/Home/IconSection";

import PhotoGallery from "../components/Galllery/PhotoGallery";


const Home = () => {
  return (
    <div>
      
      <HeroSection />
      <Companyprotection />
      <Product />
      <OurVision />
      <IconSection />
      <PhotoGallery />
      
    </div>
  );
};

export default Home;
