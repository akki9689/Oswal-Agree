import React, { useState } from 'react';
import { allProducts } from '../../data/products/all-products-data';
import ProductCard from '../common/ProductCard';

const Filter = ({ products }) => {
  return (
    <div className='w-full py-16 relative'>
   
        <div className='grid grid-cols-4 gap-6'>
          {products.map((product) => product.productName?.map((item) => (
            <ProductCard
              key={item.id}
              imageSrc={item.img}
              productName={item.name}
              productDescription={item.activeIngredient}
            />
          )))}
        </div>
      
    </div>
  );
};

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

    let filtered;

    if (selectedCategory.toLowerCase() === "all product") {
      setFilteredProducts(allProducts)
    } else {

      filtered = allProducts.filter((product) =>
        product.title.toLowerCase() === selectedCategory.toLowerCase()

        // const categoryMatch = selectedCategory ? product.title === selectedCategory : true;
        // const cropMatch = selectedCrop ? product.targetcrop === selectedCrop : true;
        // const pestMatch = selectedPest ? product.pest === selectedPest : true;
        // return categoryMatch
        //  && cropMatch && pestMatch;

      );

    }





    setFilteredProducts(filtered);
  };

  const handleFilterClick = () => {
    filterData();
  };

  return (
    <section className='w-full py-10 relative'>

      {/* Filter Section with Background Image */}
      <div className="border-custom-border p-10 filter-bg bg-top">
        <div className="w-11/12 xl:w-10/12 mx-auto">
          <div className="flex flex-wrap gap-6 items-center py-20">
            {/* Select Category */}
            <select
              className="jet-select__control block w-38 px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              name="select-category"
              aria-label="Select Category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select...</option>
              <option value="All Product">All Products</option>
              <option value="BioProducts">Bio Products</option>
              <option value="Fertilizers">Fertilizer</option>
              <option value="Fungicides">Fungicide</option>
              <option value="Herbicides">Herbicide</option>
              {/* <option value="Immunomodulator">Immunomodulator</option> */}
              <option value="Insecticides">Insecticide</option>
              <option value="micronutrients">Micronutrient </option>
              <option value="plantgrowth">PGR (Plant Growth Regular)</option>
            </select>

            {/* Select Crop */}
            <select
              className="jet-select__control block w-38 px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              name="select-crop"
              aria-label="Select Crop"
              value={selectedCrop}
              onChange={handleCropChange}
            >
              <option value="">Select Crop...</option>
              <option value="" data-label="Select...">Select...</option>
              <option value="Cotton" data-label="Cotton">Cotton</option>
              <option value="Grapes" data-label="Grapes">Grapes</option>
              <option value="Red Gram" data-label="Red Gram">Red Gram</option>
              <option value="ChickPea" data-label="ChickPea">ChickPea</option>
              <option value="Cabbage" data-label="Cabbage">Cabbage</option>
              <option value="Brinjal" data-label="Brinjal">Brinjal</option>
              <option value="Okra" data-label="Okra">Okra</option>
              <option value="Chilli" data-label="Chilli">Chilli</option>
              <option value="Mango" data-label="Mango">Mango</option>
              <option value="Rice" data-label="Rice">Rice</option>
              <option value="Sugarcane" data-label="Sugarcane">Sugarcane</option>
              <option value="Tomato" data-label="Tomato">Tomato</option>
              <option value="Paddy" data-label="Paddy">Paddy</option>
              <option value="Citrus" data-label="Citrus">Citrus</option>
              <option value="Sunflower" data-label="Sunflower">Sunflower</option>
              <option value="Groundnut" data-label="Groundnut">Groundnut</option>
              <option value="Tea" data-label="Tea">Tea</option>
              <option value="Maize" data-label="Maize">Maize</option>
              <option value="Peach" data-label="Peach">Peach</option>
              <option value="Potato" data-label="Potato">Potato</option>
              <option value="Banana" data-label="Banana">Banana</option>
              <option value="Wheat" data-label="Wheat">Wheat</option>
              <option value="Jute" data-label="Jute">Jute</option>
              <option value="Barley" data-label="Barley">Barley</option>
              <option value="Sorghum" data-label="Sorghum">Sorghum</option>
              <option value="Bajra" data-label="Bajra">Bajra</option>
              <option value="Bhindi" data-label="Bhindi">Bhindi</option>
              <option value="Mustard" data-label="Mustard">Mustard</option>
              <option value="Cardamom" data-label="Cardamom">Cardamom</option>
              <option value="Onion" data-label="Onion">Onion</option>
              <option value="Soybean" data-label="Soybean">Soybean</option>
              <option value="Black gram" data-label="Black gram">Black gram</option>
              <option value="Direct sown Rice" data-label="Direct sown Rice">Direct sown Rice</option>
              <option value="Transplanted Rice" data-label="Transplanted Rice">Transplanted Rice</option>
              <option value="Cowpea" data-label="Cowpea">Cowpea</option>
              <option value="Guar" data-label="Guar">Guar</option>
              <option value="Pea" data-label="Pea">Pea</option>
              <option value="Apple" data-label="Apple">Apple</option>
              <option value="Aquatic weeds" data-label="Aquatic weeds">Aquatic weeds</option>
              <option value="Turmeric" data-label="Turmeric">Turmeric</option>
              <option value="Coffee" data-label="Coffee">Coffee</option>
              <option value="Papaya" data-label="Papaya">Papaya</option>
              <option value="Bottle Gourd" data-label="Bottle Gourd">Bottle Gourd</option>
              <option value="Black Pepper" data-label="Black Pepper">Black Pepper</option>
              <option value="Tobacco" data-label="Tobacco">Tobacco</option>
              <option value="Pearl Millet" data-label="Pearl Millet">Pearl Millet</option>
              <option value="Sugarbeet" data-label="Sugarbeet">Sugarbeet</option>
              <option value="Peas" data-label="Peas">Peas</option>
              <option value="Topioca" data-label="Topioca">Topioca</option>
              <option value="Moong" data-label="Moong">Moong</option>
              <option value="Cluster bean" data-label="Cluster bean">Cluster bean</option>
              <option value="Walnut" data-label="Walnut">Walnut</option>
              <option value="Rose" data-label="Rose">Rose</option>
              <option value="Ber" data-label="Ber">Ber</option>
              <option value="Cucurbits" data-label="Cucurbits">Cucurbits</option>
              <option value="Vegetables" data-label="Vegetables">Vegetables</option>
              <option value="Fruits" data-label="Fruits">Fruits</option>
              <option value="All Crops" data-label="All Crops">All Crops</option>
              <option value="Horticulture" data-label="Horticulture">Horticulture</option>
              <option value="Pomgranate" data-label="Pomgranate">Pomgranate</option>
              <option value="Mentha" data-label="Mentha">Mentha</option>
              <option value="Cucumber" data-label="Cucumber">Cucumber</option>
              <option value="Watermelon" data-label="Watermelon">Watermelon</option>
              <option value="Cardemom" data-label="Cardemom">Cardemom</option>
              <option value="Cumin" data-label="Cumin">Cumin</option>
              <option value="Legumes" data-label="Legumes">Legumes</option>
              <option value="Cereals" data-label="Cereals">Cereals</option>
              <option value="Rubber" data-label="Rubber">Rubber</option>
              <option value="Pulses" data-label="Pulses">Pulses</option>
              <option value="Oil Seeds" data-label="Oil Seeds">Oil Seeds</option>
              <option value="Jawar" data-label="Jawar">Jawar</option>
              <option value="Pumpkin" data-label="Pumpkin">Pumpkin</option>
              <option value="Flowers" data-label="Flowers">Flowers</option>
              <option value="Spices" data-label="Spices">Spices</option>
              <option value="Orange" data-label="Orange">Orange</option>
              <option value="Lentil" data-label="Lentil">Lentil</option>
              <option value="Mint" data-label="Mint">Mint</option>
              <option value="Gheya" data-label="Gheya">Gheya</option>
              <option value="Capsicum" data-label="Capsicum">Capsicum</option>
              <option value="Pigeon" data-label="Pigeon">Pigeon</option>
              <option value="Bittergourd" data-label="Bittergourd">Bittergourd</option>
              <option value="Bengal gram" data-label="Bengal gram">Bengal gram</option>
              <option value="Pigeon Pea" data-label="Pigeon Pea">Pigeon Pea</option>


              {/* Add more crops as needed */}
            </select>

            {/* Select Pest */}
            <select
              className="jet-select__control block w-38 px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              name="select-pest"
              aria-label="Select Pest"
              value={selectedPest}
              onChange={handlePestChange}
            >
              <option value="">Select Pest...</option>

              <option value="Brown Plant Hopper">Brown Plant Hopper</option>
              <option value="Early Shoot Borer">Early Shoot Borer</option>
              <option value="Root Borer">Root Borer</option>
              <option value="Termite">Termite</option>
              <option value="Green Leaf Hopper">Green Leaf Hopper</option>
              <option value="Leaf Folder">Leaf Folder</option>
              <option value="Stem Borer">Stem Borer</option>
              <option value="Gall Midge">Gall Midge</option>
              <option value="White Backed Plant Hopper">White Backed Plant Hopper</option>
              <option value="Whorl Maggot">Whorl Maggot</option>
              <option value="Diamon Back Moth">Diamon Back Moth</option>
              <option value="Fruit Borer">Fruit Borer</option>
              <option value="Yellow Stem Borer">Yellow Stem Borer</option>
              <option value="Thrips">Thrips</option>
              <option value="Pod Borer">Pod Borer</option>
              <option value="Ballworm">Ballworm</option>
              <option value="Mite">Mite</option>
              <option value="Mealy Bug">Mealy Bug</option>
              <option value="Aphids">Aphids</option>
              <option value="Jassid">Jassid</option>
              <option value="White Fly">White Fly</option>
              <option value="BPH (Brown Plant Hopper)">BPH (Brown Plant Hopper)</option>
              <option value="GLH (Green Leaf Hopper)">GLH (Green Leaf Hopper)</option>
              <option value="Hispa">Hispa</option>
              <option value="Psylla">Psylla</option>
              <option value="Mosquito Bug">Mosquito Bug</option>
              <option value="Girdle Beetle">Girdle Beetle</option>
              <option value="Semilooper">Semilooper</option>
              <option value="Shoot Fly">Shoot Fly</option>
              <option value="Steam Borer">Steam Borer</option>
              <option value="Rhizome Weevil">Rhizome Weevil</option>
              <option value="Nematode">Nematode</option>
              <option value="Ear Cockle">Ear Cockle</option>
              <option value="Pink Bollworm">Pink Bollworm</option>
              <option value="American Bollworm">American Bollworm</option>
              <option value="Spodoptera litura">Spodoptera litura</option>
              <option value="Spotted Bollworm">Spotted Bollworm</option>
              <option value="Epliachna Grubs">Epliachna Grubs</option>
              <option value="White Grub">White Grub</option>
              <option value="Phalaris Minor">Phalaris Minor</option>
              <option value="Medicago Spp">Medicago Spp</option>
              <option value="Chenopodium Album">Chenopodium Album</option>
              <option value="Cronopus Didymus">Cronopus Didymus</option>
              <option value="Vicia Sativa">Vicia Sativa</option>
              <option value="Rumex Spp">Rumex Spp</option>
              <option value="Dinebra Vetroflexa">Dinebra Vetroflexa</option>
              <option value="Goose Grass">Goose Grass</option>
              <option value="Wild Finger">Wild Finger</option>
              <option value="Crab Grass">Crab Grass</option>
              <option value="Barnyard Grass">Barnyard Grass</option>
              <option value="Crowfoot Grass">Crowfoot Grass</option>
              <option value="Eragrostispilosa">Eragrostispilosa</option>
              <option value="Eviscosa">Eviscosa</option>
              <option value="Digitariamarginata">Digitariamarginata</option>
              <option value="Echinocloa Spp">Echinocloa Spp</option>
              <option value="Cyperus Difformis">Cyperus Difformis</option>
              <option value="Ciria">Ciria</option>
              <option value="Monochoria Vaginalis">Monochoria Vaginalis</option>
              <option value="Eclipta Alba">Eclipta Alba</option>
              <option value="Echinocloa Crusigalli">Echinocloa Crusigalli</option>
              <option value="Convolvulus Arvensis">Convolvulus Arvensis</option>
              <option value="Amaranthus Viridis">Amaranthus Viridis</option>
              <option value="Parthenium Hysterophorus">Parthenium Hysterophorus</option>
              <option value="Cyperus Rotundus">Cyperus Rotundus</option>
              <option value="Cesculentum">Cesculentum</option>
              <option value="Convolvulus Aevensis">Convolvulus Aevensis</option>
              <option value="Amaranthus SP">Amaranthus SP</option>
              <option value="Digeteria SP" data-label="Digeteria SP">Digeteria SP</option>
              <option value="Boerhaavia Diffusa" data-label="Boerhaavia Diffusa">Boerhaavia Diffusa</option>
              <option value="Imparata Cylindrica" data-label="Imparata Cylindrica">Imparata Cylindrica</option>
              <option value="Digeria Arvensis" data-label="Digeria Arvensis">Digeria Arvensis</option>
              <option value="Anagallis Arvensis" data-label="Anagallis Arvensis">Anagallis Arvensis</option>
              <option value="Portulaca Oleracea" data-label="Portulaca Oleracea">Portulaca Oleracea</option>
              <option value="Powdery Mildew" data-label="Powdery Mildew">Powdery Mildew</option>
              <option value="Scab" data-label="Scab">Scab</option>
              <option value="Late Blight" data-label="Late Blight">Late Blight</option>
              <option value="Anthracnose" data-label="Anthracnose">Anthracnose</option>
              <option value="Fruit Rot" data-label="Fruit Rot">Fruit Rot</option>
              <option value="Sheath Blight" data-label="Sheath Blight">Sheath Blight</option>
              <option value="Grey Mildew" data-label="Grey Mildew">Grey Mildew</option>
              <option value="Red Rot" data-label="Red Rot">Red Rot</option>
              <option value="Smut" data-label="Smut">Smut</option>
              <option value="Rust" data-label="Rust">Rust</option>
              <option value="Leaf Blotch" data-label="Leaf Blotch">Leaf Blotch</option>
              <option value="Purple Blotch" data-label="Purple Blotch">Purple Blotch</option>
              <option value="Dieback" data-label="Dieback">Dieback</option>
              <option value="Yellow Rust" data-label="Yellow Rust">Yellow Rust</option>
              <option value="Downey Mildew" data-label="Downey Mildew">Downey Mildew</option>
              <option value="Tikka Leaf Spot" data-label="Tikka Leaf Spot">Tikka Leaf Spot</option>
              <option value="Blister Blight" data-label="Blister Blight">Blister Blight</option>
              <option value="Stripe Rust" data-label="Stripe Rust">Stripe Rust</option>
              <option value="Sigatoka Leaf Spot" data-label="Sigatoka Leaf Spot">Sigatoka Leaf Spot</option>
              <option value="Loose Smut" data-label="Loose Smut">Loose Smut</option>
              <option value="Flag Smut" data-label="Flag Smut">Flag Smut</option>
              <option value="Collar Rot" data-label="Collar Rot">Collar Rot</option>
              <option value="Root Rot" data-label="Root Rot">Root Rot</option>
              <option value="Rhizoctonia Solani" data-label="Rhizoctonia Solani">Rhizoctonia Solani</option>
              <option value="Dirty Panicle" data-label="Dirty Panicle">Dirty Panicle</option>
              <option value="Set Rot" data-label="Set Rot">Set Rot</option>
              <option value="Frog Eye Spot" data-label="Frog Eye Spot">Frog Eye Spot</option>
              <option value="Blast" data-label="Blast">Blast</option>
              <option value="Damping Off" data-label="Damping Off">Damping Off</option>
              <option value="C. esculantum" data-label="C. esculantum">C. esculantum</option>
              <option value="Early Blight" data-label="Early Blight">Early Blight</option>
              <option value="Anthacnose" data-label="Anthacnose">Anthacnose</option>
              <option value="C. Iria" data-label="C. Iria">C. Iria</option>
              <option value="Cynadon Ductylon" data-label="Cynadon Ductylon">Cynadon Ductylon</option>
              <option value="Phaloris Minor" data-label="Phaloris Minor">Phaloris Minor</option>
              <option value="Lathyrus Aphaca" data-label="Lathyrus Aphaca">Lathyrus Aphaca</option>
              <option value="Melilotus Indica" data-label="Melilotus Indica">Melilotus Indica</option>
              <option value="Euphorbia Hirta" data-label="Euphorbia Hirta">Euphorbia Hirta</option>
              <option value="C. Rotundus" data-label="C. Rotundus">C. Rotundus</option>
              <option value="Cyperus Iria" data-label="Cyperus Iria">Cyperus Iria</option>
              <option value="Fruit & Shoot Borer" data-label="Fruit & Shoot Borer">Fruit & Shoot Borer</option>
              <option value="Hoppers" data-label="Hoppers">Hoppers</option>
              <option value="Yellow Mite" data-label="Yellow Mite">Yellow Mite</option>
              <option value="Seeding Blight" data-label="Seeding Blight">Seeding Blight</option>
              <option value="Leaf Spot" data-label="Leaf Spot">Leaf Spot</option>
              {/* Add more pests as needed */}
            </select>

            {/* Filter Button */}
            <button
              className="px-4 py-2 bg-dark-green-200 text-white rounded-sm shadow-sm hover:bg-dark-green-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleFilterClick}
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      {/* Render the Filter component with filtered products */}

      <div className="w-11/12 xl:w-10/12 mx-auto">
        <Filter products={filteredProducts} />
      </div>


    </section>
  );
};

export default CropFilter;
