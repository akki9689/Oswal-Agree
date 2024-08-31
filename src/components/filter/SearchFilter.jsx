import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../../data/products/all-products-data';
import ProductCard from '../common/ProductCard';

const Filter = ({ products, category }) => {
  const navigate = useNavigate();

  const handleReadMoreClick = (title, productName) => {
    navigate(`/products/${title}/${productName}`);
  };

  return (
    <div className='relative w-full py-16'>
      <div className='grid grid-cols-4 gap-6'>
        {products.length > 0 ? (
          products.map((product) =>
            product.productName.map((item) => (
              <ProductCard
                key={item.id}
                imageSrc={item.img}
                productName={item.name}
                productDescription={item.activeIngredient}
                onReadMoreClick={() => handleReadMoreClick(product.title, item.name)}
              />
            ))
          )
        ) : (
          <p className='text-lg text-center text-gray-500'>No products found.</p>
        )}
      </div>
    </div>
  );
};

const categories = [
  "All Products", "BioProducts", "Fertilizers", "Fungicides", "Herbicides",
  "Insecticides", "micronutrients", "plantgrowth"
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
  "Green Leaf Hopper", "Leaf Folder", "Stem Borer", "Gall midge",
  "White Backed Plant Hopper", "Whorl maggot", "Diamon Back Moth",
  "Fruit borer", "Yellow Stem borer", "Thrips", "Pod borer", "Ballworm",
  "Mite", "Mealy Bug", "Aphids", "Jassid", "White Fly","White fly", "BPH (Brown Plant Hopper)",
  "GLH (Green Leaf Hopper)", "Hispa", "Psylla", "Mosquito bug", "Girdle beetle",
  "Semilooper", "Shoot fly", "Steam borer", "Rhizome weevil", "Nematode",
  "Ear cockle", "Pink bollworm", "American bollworm", "Spodoptera litura",
  "Spotted bollworm", "Epliachna Grubs", "White Grub", "Phalaris minor",
  "Medicago spp", "Chenopodium album", "Cronopus didymus", "Vicia sativa",
  "Rumex spp", "Dinebra Vetroflexa", "Goose grass", "Wild finger",
  "Crab grass", "Barnyard grass", "Crowfoot grass", "Eragrostispilosa",
  "Eviscosa", "Digitariamarginata", "Echinocloa spp", "Cyperus difformis",
  "Ciria", "Monochoria vaginalis", "Eclipta alba", "Echinocloa crusigalli",
  "Convolvulus arvensis", "Amaranthus viridis", "Parthenium hysterophorus",
  "Cyperus Rotundus","Cyperus rotundus", "Cesculentum", "Convolvulus Aevensis", "Amaranthus sp",
  "Digeteria sp", "Boerhaavia diffusa", "Imparata cylindrica", "Digeria arvensis",
  "Anagallis arvensis", "Portulaca oleracea", "Powdery Mildew","Powdery mildew", "Scab",
  "Late BLIGHT", "Anthracnose", "fruit Rot", "Sheath blight", "Grey mildew",
  "Red rot", "Smut", "Rust", "Leaf Blotch", "Purple Blotch", "Dieback",
  "Yellow Rust", "Downey Mildew", "Tikka Leaf Spot", "Blister blight",
  "Stripe rust", "Sigatoka leaf spot", "Loose Smut", "Flag Smut",
  "Collar Rot", "Root Rot", "Rhizoctonia Solani", "Dirty panicle",
  "Set rot", "Frog eye spot", "Blast", "Damping Off", "C. esculantum",
  "Early blight", "Anthacnose", "C. iria", "Cynadon ductylon",
  "Phaloris minor", "Lathyrus aphaca", "Melilotus indica", "Euphorbia hirta",
  "C. rotundus", "Cyperus iria", "Fruit & shoot borer", "Hoppers", "Yellow Mite", "Seeding Blight", "Leaf Spot",
  "Alternaria leaf spot/blight and scab", "Red rust", "Grey Blight", "Late Blight Tikka Leaf Spot",
  "Rice blast", "White fly Brown plant hopper", "Thrips and Whitefly", "Leaf eating caterpillar",
  "Boll worms", "Leaf hoppers", "Red spider mite", "mites", "Capsule borer", "E. viscosa",
  "Mellilotus alba", "Seath Blight", "Early leaf spot", "Stem rust", "Brown rust", "Leaf rust",
  "Karnal bunt", "Eichhornia crassipes", "Echinochloa colonum", "Short duration varieties 20-25 DAT",
  "At the time of boll formation", "30-35 days after prunning", "Leaf minor", "Top borer",
  "Jassids", "Leaf curl", "E. crusigalli", "Echinocloa colonum", "Stem fly", "Bollworm",
  "Flea beetle", "Increase yield", "Broadcast", "WBPH", "White rust", "Alterneria blight",
  "Phytophthora foot rot", "Echinochloa spp", "Benghalensis", "Commelina", "Euphorbia spp",
  "Ring rot", "Ludwigia parviflora", "Fimbristylis miliacea", "White Grub", "Leaf roller",
  "Green semilooper", "Pod blight", "Alternaria Leaf Spot", "Leaf Blight", "Adult Mosquitoes",
  "Adult Houseflies", "Cockroach", "Gram pod borer", "Pod fly", "American Boll Warm",
  "Tabacoo caterpillar", "Fruit Borers & Caterpillars", "Top Borer ", "Leaf Floder ",
  "Diamond Back Moth ", "Fruit and Shoot Borer ", "Green semiloopers ",
  "stem fly Girdle Beetle", "Paddy leaf Folder", "Top Borer Scirphophaga excerptalis",
  "Enchinochloa sp", "Trianthema portulacastrum", "Bracharia sp"
];

const CropFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedPest, setSelectedPest] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    const filterData = () => {
      let filtered = allProducts;

      // Filter by Category
      if (selectedCategory && selectedCategory !== 'All Products') {
        filtered = filtered.filter(product =>
          product.title.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      // Filter by Crop
      if (selectedCrop) {
        filtered = filtered.filter(product =>
          product.productName.some(productItem =>
            productItem.details.targetCrops.some(
              crop => crop.toLowerCase() === selectedCrop.toLowerCase()
            )
          )
        );
      }

      // Filter by Pest
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

    filterData();
  }, [selectedCategory, selectedCrop, selectedPest]);

  return (
    <div>
      <div className='py-4 bg-black'>
        <h2 className='text-3xl text-center text-white'>Search Product</h2>
      </div>
      <div className='w-full px-5 my-8'>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className='p-2 mx-2 border rounded'
        >
          <option value=''>Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
          className='p-2 mx-2 border rounded'
        >
          <option value=''>Select Crop</option>
          {crops.map((crop, index) => (
            <option key={index} value={crop}>
              {crop}
            </option>
          ))}
        </select>
        <select
          value={selectedPest}
          onChange={(e) => setSelectedPest(e.target.value)}
          className='p-2 mx-2 border rounded'
        >
          <option value=''>Select Pest</option>
          {pests.map((pest, index) => (
            <option key={index} value={pest}>
              {pest}
            </option>
          ))}
        </select>
      </div>

      <Filter products={filteredProducts} category={selectedCategory} />
    </div>
  );
};

export default CropFilter;
