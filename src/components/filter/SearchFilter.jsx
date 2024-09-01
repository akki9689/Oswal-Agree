import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../../data/products/all-products-data';
import ProductCard from '../common/ProductCard';
import Popupname from '../common/Popupname';

const Filter = ({ products }) => {
    const navigate = useNavigate();

    const handleReadMoreClick = (title, productName) => {
        navigate(`/products/${title}/${productName}`);
    };

    return (
        <div className='relative w-full py-8 md:py-16'>
            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {products.length > 0 ? (
                    products.map((product) =>

                        <ProductCard
                            key={`${product.name} - ${product.id}`}
                            imageSrc={product.img}
                            productName={product.name}
                            productDescription={product.activeIngredient}
                            onReadMoreClick={() => handleReadMoreClick(product.productType.toLowerCase() , product.name.split(" ").join("-").toLowerCase())}
                        />

                    )
                ) : (
                    <p className='text-lg text-center text-gray-500'>No products found.</p>
                )}
            </div>
        </div>
    );
};

const categories = [
    "All Products", "Bio-Products", "Fertilizers", "Fungicides", "Herbicides",
    "Insecticides", "Micro-nutrients", "Plant-Growth-Regulator"
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
    "Brown Plant Hopper", "Early shoot borer", "Root borer", "Termite",
    "Green Leaf Hopper", "Leaf folder", "Gall midge",
    "White Backed Plant Hopper", "Whorl maggot", "Diamon Back Moth",
    "Fruit borer", "Yellow Stem borer", "Thrips", "Pod borer", "Ball worms",
    "Mite", "Mealy Bug", "Aphids", "Jassid", "White Fly", "White fly", "BPH (Brown Plant Hopper)",
    "GLH (Green Leaf Hopper)", "Hispa", "Psylla", "Mosquito bug", "Girdle beetle",
    "Semilooper", "Shoot fly", "Steam borer", "Rhizome weevil", "Nematode",
    "Ear cockle", "Pink bollworm", "American bollworm", "Spodoptera litura",
    "Spotted bollworm", "Epliachna Grubs", "Phalaris minor",
    "Medicago spp", "Chenopodium album", "Cronopus didymus", "Vicia sativa",
    "Rumex spp", "Dinebra Vetroflexa", "Goose grass", "Wild finger",
    "Crab grass", "Barnyard grass", "Crowfoot grass", "Eragrostispilosa",
    "Eviscosa", "Digitariamarginata", "Echinocloa spp", "Cyperus difformis",
    "Ciria", "Monochoria vaginalis", "Eclipta alba", "Echinocloa crusigalli",
    "Convolvulus arvensis", "Amaranthus viridis", "Parthenium hysterophorus",
    "Cyperus Rotundus", "Cyperus rotundus", "Cesculentum", "Convolvulus Aevensis", "Amaranthus sp",
    "Digeteria sp", "Boerhaavia diffusa", "Imparata cylindrica", "Digeria arvensis",
    "Anagallis arvensis", "Portulaca oleracea", "Powdery Mildew", "Powdery mildew", "Scab",
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

const SearchFilter = () => {


    const allPro = allProducts.map(pro => pro.productName).flat();

  
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCrop, setSelectedCrop] = useState('');
    const [selectedPest, setSelectedPest] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(allPro);

   
    const filterHandler = () => {

      
      let filteredCategory;
      let filteringData;

        if (selectedCategory) {



            if (selectedCategory.toLowerCase() === "all products") {
                setFilteredProducts(allPro);
            } else {

                filteredCategory = allProducts.filter(pro => pro.title.toLowerCase() === selectedCategory.toLowerCase())[0].productName



                if (selectedCrop && selectedPest) {

                    filteringData = filteredCategory.filter(item =>
                        (item.details.targetCrops.includes(selectedCrop) || item.details.targetCrops.includes("All Crops")) &&
                        item.details.pest.includes(selectedPest)
                    )


                    return setFilteredProducts(filteringData);

                } else if (selectedCrop) {

                    filteringData = filteredCategory.filter(item =>
                        item.details.targetCrops.includes(selectedCrop) || item.details.targetCrops.includes("All Crops")
                    )

                    return setFilteredProducts(filteringData);

                } else if (selectedPest) {
                    filteringData = filteredCategory.filter(item =>
                        item.details.pest.includes(selectedPest)
                    )

                }

                return setFilteredProducts(filteredCategory);


            }

        } else {



            if (selectedCrop && selectedPest) {

                filteringData = allPro.filter(item =>
                    (item.details.targetCrops.includes(selectedCrop) || item.details.targetCrops.includes("All Crops")) &&
                    item.details.pest.includes(selectedPest)
                )


                return setFilteredProducts(filteringData);


            } else if (selectedCrop) {

                filteringData = allPro.filter(item =>
                    item.details.targetCrops.includes(selectedCrop) || item.details.targetCrops.includes("All Crops")
                )

                return setFilteredProducts(filteringData);

            } else if (selectedPest) {
                filteringData = allPro.filter(item =>
                    item.details.pest.includes(selectedPest)
                )

                return setFilteredProducts(filteringData);
            }

            return setFilteredProducts(allPro)

        }

    }





    return (
        <section className='w-full'>

            <Popupname title='Search Product' />
            <div className="relative  md:h-[200px] h-[300px] flex items-center justify-center md:justify-start  lg:pl-10 lg:pr-4 px-4 filter-bg mt-10">

                {/* --------- white filter -------- */}

                <div className='absolute top-0 right-0 left-0 bottom-0 z-[1] bg-white bg-opacity-30'></div>


                <div data-aos="fade-right" className="xlg:w-10/12 w-11/12 mx-auto flex flex-col items-center justify-between z-[2] space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className=" w-full xs:w-9/12 md:w-full px-4 py-2 text-base text-gray-700 bg-white border border-richblack-500 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                        <option value=''>Select Category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {
                                    category.includes('-') ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : category
                                }
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedCrop}
                        onChange={(e) => setSelectedCrop(e.target.value)}
                        className="w-full xs:w-9/12 md:w-full px-4 py-2 text-base text-gray-700 bg-white border border-richblack-500 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                        <option value=''>Select Crop</option>
                        {crops.map((crop) => (
                            <option key={crop} value={crop}>
                                {crop}
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedPest}
                        onChange={(e) => setSelectedPest(e.target.value)}
                        className="w-full xs:w-9/12 md:w-full px-4 py-2 text-base text-gray-700 bg-white border border-richblack-500 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                        <option value=''>Select Pest</option>
                        {pests.map((pest) => (
                            <option key={pest} value={pest}>
                                {pest}
                            </option>
                        ))}
                    </select>

                    <div>
                        <button className='border border-richblack-500  w-max flex px-3 py-2 rounded-lg bg-dark-green-200 text-white' onClick={filterHandler}>Apply Filter</button>
                    </div>


                </div>
            </div>

            <div className='xlg:w-10/12 w-11/12 mx-auto  '>

                <Filter products={filteredProducts} />
            </div>

        </section>
    );
};

export default SearchFilter;
