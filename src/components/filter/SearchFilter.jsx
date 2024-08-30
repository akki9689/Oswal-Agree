import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProducts } from '../../data/products/all-products-data';
import ProductCard from '../common/ProductCard';
import Popupname from '../common/Popupname';
import { motion, useAnimation } from 'framer-motion';
//import ProductDetails from '../common/ProductDetails';
const Filter = ({ products, category }) => { 
 
  // console.log(category);
  const [filteredProducts, setFilteredProducts] = useState([]);
const navigate = useNavigate();
const controls = useAnimation();
useEffect(() => {
  const getProducts = () => {
    if (category) {
      const categoryData = allProducts.find(cat => cat.title.toLowerCase() === category.toLowerCase());
      if (categoryData) {
        setFilteredProducts(categoryData.productName || []);
      } else {
        setFilteredProducts([]);
      }
    } else {
      const allProductsList = allProducts.flatMap(cat => cat.productName || []);
      setFilteredProducts(allProductsList);
    }
  };

  getProducts();
}, [category]);

useEffect(() => {
  controls.start({
    opacity: [0, 1],
    scale: [0.9, 1],
    transition: { duration: 0.5 },
  });
}, [category, controls]);


const handleReadMoreClick = (productName) => {
  navigate(`/products/${category}/${productName}`);
};

  return (
    <div className='w-full py-16 relative'>
      <motion.div animate={controls}>
        <Popupname title={category ? category : 'All Products'} />
      </motion.div>
      <div className='grid grid-cols-4 gap-6'>
        {products.map((product) => product.productName?.map((item) => (
          <ProductCard
            key={item.id}
            imageSrc={item.img}
            productName={item.name}
            productDescription={item.activeIngredient}
            onReadMoreClick={() => handleReadMoreClick(product.name)}
          />
        )))}
      </div>
    </div>
  );
};
const categories = [
  "All Products", "Bio Products", "Fertilizer", "Fungicide", "Herbicide",
  "Insecticide", "Micronutrient", "PGR (Plant Growth Regular)"
];

const crops = [
  "Cotton", "Grapes", "Red Gram", "ChickPea", "Cabbage", "Brinjal", "Okra",
  "Chilli", "Mango", "Rice", "Sugarcane", "Tomato", "Paddy", "Citrus", "Sunflower",
  "Groundnut", "Tea", "Maize", "Peach", "Potato", "Banana", "Wheat", "Jute", 
  "Barley", "Sorghum", "Bajra", "Bhindi", "Mustard", "Cardamom", "Onion", 
  "Soybean", "Black gram", "Direct sown Rice", "Transplanted Rice", "Cowpea", 
  "Guar", "Pea", "Apple", "Aquatic weeds", "Turmeric", "Coffee", "Papaya", 
  "Bottle Gourd", "Black Pepper", "Tobacco", "Pearl Millet", "Sugarbeet", 
  "Peas", "Topioca", "Moong", "Cluster bean", "Walnut", "Rose", "Ber", 
  "Cucurbits", "Vegetables", "Fruits", "All Crops", "Horticulture", 
  "Pomgranate", "Mentha", "Cucumber", "Watermelon", "Cardemom", "Cumin", 
  "Legumes", "Cereals", "Rubber", "Pulses", "Oil Seeds", "Jawar", 
  "Pumpkin", "Flowers", "Spices", "Orange", "Lentil", "Mint", "Gheya", 
  "Capsicum", "Pigeon", "Bittergourd", "Bengal gram", "Pigeon Pea"
];

const pests = [
  "Brown Plant Hopper", "Early Shoot Borer", "Root Borer", "Termite", 
  "Green Leaf Hopper", "Leaf Folder", "Stem Borer", "Gall Midge", 
  "White Backed Plant Hopper", "Whorl Maggot", "Diamon Back Moth", 
  "Fruit Borer", "Yellow Stem Borer", "Thrips", "Pod Borer", "Ballworm", 
  "Mite", "Mealy Bug", "Aphids", "Jassid", "White Fly", "BPH (Brown Plant Hopper)", 
  "GLH (Green Leaf Hopper)", "Hispa", "Psylla", "Mosquito Bug", "Girdle Beetle", 
  "Semilooper", "Shoot Fly", "Steam Borer", "Rhizome Weevil", "Nematode", 
  "Ear Cockle", "Pink Bollworm", "American Bollworm", "Spodoptera litura", 
  "Spotted Bollworm", "Epliachna Grubs", "White Grub", "Phalaris Minor", 
  "Medicago Spp", "Chenopodium Album", "Cronopus Didymus", "Vicia Sativa", 
  "Rumex Spp", "Dinebra Vetroflexa", "Goose Grass", "Wild Finger", 
  "Crab Grass", "Barnyard Grass", "Crowfoot Grass", "Eragrostispilosa", 
  "Eviscosa", "Digitariamarginata", "Echinocloa Spp", "Cyperus Difformis", 
  "Ciria", "Monochoria Vaginalis", "Eclipta Alba", "Echinocloa Crusigalli", 
  "Convolvulus Arvensis", "Amaranthus Viridis", "Parthenium Hysterophorus", 
  "Cyperus Rotundus", "Cesculentum", "Convolvulus Aevensis", "Amaranthus SP", 
  "Digeteria SP", "Boerhaavia Diffusa", "Imparata Cylindrica", "Digeria Arvensis", 
  "Anagallis Arvensis", "Portulaca Oleracea", "Powdery Mildew", "Scab", 
  "Late Blight", "Anthracnose", "Fruit Rot", "Sheath Blight", "Grey Mildew", 
  "Red Rot", "Smut", "Rust", "Leaf Blotch", "Purple Blotch", "Dieback", 
  "Yellow Rust", "Downey Mildew", "Tikka Leaf Spot", "Blister Blight", 
  "Stripe Rust", "Sigatoka Leaf Spot", "Loose Smut", "Flag Smut", 
  "Collar Rot", "Root Rot", "Rhizoctonia Solani", "Dirty Panicle", 
  "Set Rot", "Frog Eye Spot", "Blast", "Damping Off", "C. esculantum", 
  "Early Blight", "Anthacnose", "C. Iria", "Cynadon Ductylon", 
  "Phaloris Minor", "Lathyrus Aphaca", "Melilotus Indica", "Euphorbia Hirta", 
  "C. Rotundus", "Cyperus Iria","Fruit & Shoot Borer", "Hoppers", "Yellow Mite", "Seeding Blight", "Leaf Spot", 
  "Alternaria Leaf Spot/Blight and Scab", "Red Rust", "Grey Blight", "Late Blight Tikka Leaf Spot", 
  "Rice Blast", "White Fly Brown Plant Hopper", "Thrips and Whitefly", "Leaf Eating Caterpillar", 
  "Boll Worms", "Leaf Hoppers", "Red Spider Mite", "Mites", "Capsule Borer", "E. Viscosa", 
  "Mellilotus Alba", "Seath Blight", "Early Leaf Spot", "Stem Rust", "Brown rust", "Leaf Rust", 
  "Karnal Bunt", "Eichhornia Crassipes", "Echinochloa Colonum", "Short Duration Varieties 20-25 DAT", 
  "At the Time of Boll Formation", "30-35 Days After Prunning", "Leaf Minor", "Top Borer", 
  "Jassids", "Leaf Curl", "E. Crusigalli", "Echinocloa Colonum", "Stem Fly", "Bollworm", 
  "Flea Beetle", "Increase Yield", "Broadcast", "WBPH", "White Rust", "Alterneria Blight", 
  "Phytophthora Foot Rot", "Echinochloa SPP", "Benghalensis", "Commelina", "Euphorbia SPP", 
  "Ring Rot", "Ludwigia Parviflora", "Fimbristylis Miliacea", "White Grub", "Leaf Roller", 
  "Green Semilooper", "Pod Blight", "Alternaria Leaf Spot", "Leaf Blight", "Adult Mosquitoes", 
  "Adult Houseflies", "Cockroach", "Gram pod borer", "Pod Fly", "American Boll Warm", 
  "Tabacoo Caterpillar", "Fruit Borers & Caterpillars", "Top Borer ", "Leaf Floder ", 
  "Diamond Back Moth ", "Fruit and Shoot Borer ", "Green Semiloopers ", 
  "Stem Fly Girdle Beetle", "Paddy Leaf Folder", "Top Borer Scirphophaga Excerptalis", 
  "Enchinochloa sp", "Trianthema portulacastrum", "Bracharia sp"
];

const CropFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedPest, setSelectedPest] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
  };

  const handlePestChange = (event) => {
    setSelectedPest(event.target.value);
  };

  const filterData = () => {
    let filtered = allProducts;

    if (selectedCategory && selectedCategory !== 'All Product') {
      filtered = filtered.filter(product =>
        product.title.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedCrop) {
      filtered = filtered.filter(product =>
        product.productName.some(productItem =>
          productItem.details.targetCrops.some(
            crop => crop.toLowerCase() === selectedCrop.toLowerCase()
          )
        )
      );
    }

    if (selectedPest) {
      filtered = filtered.filter(product =>
        product.productName.some(productItem =>
          productItem.details.pest.some(
            pest => pest.toLowerCase() === selectedPest.toLowerCase()
          )
        )
      );
    }

    setFilteredProducts(filtered);
  };

  const handleFilterClick = () => {
    filterData();
  };

  return (
    <section className='w-full py-10 relative'>
      <div className="border-custom-border p-10 filter-bg bg-top">
        <div className="w-11/12 xl:w-10/12 mx-auto">
          <div className="flex flex-wrap gap-6 items-center py-20">
            <select
              className="jet-select__control block w-38 px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              name="select-category"
              aria-label="Select Category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
               <option value="">Select...</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              className="jet-select__control block w-38 px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              name="select-crop"
              aria-label="Select Crop"
              value={selectedCrop}
              onChange={handleCropChange}
            >
             
             <option value="">Select Crop...</option>
              {crops.map(crop => (
                <option key={crop} value={crop}>{crop}</option>
              ))} 
             </select>

            <select
              className="jet-select__control block w-38 px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              name="select-pest"
              aria-label="Select Pest"
              value={selectedPest}
              onChange={handlePestChange}
            >
             <option value="">Select Pest...</option>
              {pests.map(pest => (
                <option key={pest} value={pest}>{pest}</option>
              ))}
              
            </select>

            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none"
              onClick={handleFilterClick}
            >
              Filter
            </button>
          </div>
        </div>
      </div>

      <Filter products={filteredProducts} />
    </section>
  );
};

export default CropFilter;
