import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../../data/products/all-products-data';
import ProductCard from '../common/ProductCard';

const Filter = ({ products, category }) => {
  const navigate = useNavigate();

  const handleReadMoreClick = (productName) => {
    navigate(`/products/${category}/${productName}`);
  };

const Filter = ({ products }) => {
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
                onReadMoreClick={() => handleReadMoreClick(item.name)}
              />
            ))
          )
        ) : (
          <p className='text-lg text-center text-gray-500'>No products found.</p>
        )}
      </div>
    </div>
  );
}
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
  "C. Rotundus", "Cyperus Iria", "Fruit & Shoot Borer", "Hoppers", "Yellow Mite", "Seeding Blight", "Leaf Spot",
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

  useEffect(() => {
    const filterData = () => {
      let filtered = allProducts;

      if (selectedCategory && selectedCategory !== 'All Products') {
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
  
console.log(filtered);
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
