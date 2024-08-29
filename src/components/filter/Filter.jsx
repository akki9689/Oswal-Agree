import React, { useState } from 'react';

const CropFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedPest, setSelectedPest] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
  };

  const handlePestChange = (event) => {
    setSelectedPest(event.target.value);
  };

  // Sample filter logic (replace this with your actual logic)
  const filterData = () => {
    console.log('Filter data based on:', {
      category: selectedCategory,
      crop: selectedCrop,
      pest: selectedPest,
    });
    // Implement your data filtering logic here
  };

  // Trigger filtering logic when the filter button is clicked
  const handleFilterClick = () => {
    filterData();
  };

  return (
    <div className="border-custom-border p-0.5 bg-filter-bg bg-cover bg-center bg-no-repeat mt-5">
    <div className="flex flex-wrap gap-4 items-center mt-20 mb-40 ml-20">
      {/* Select Category */}
      <select
        className="jet-select__control block w-38 px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        name="select-category"
        aria-label="Select Category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Select Category...</option>
        <option value="Category1">Category1</option>
        <option value="Category2">Category2</option>
        {/* Add more categories as needed */}
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
        <option value="Cotton">Cotton</option>
        <option value="Grapes">Grapes</option>
        <option value="Red Gram">Red Gram</option>
        <option value="ChickPea">ChickPea</option>
        <option value="Cabbage">Cabbage</option>
        <option value="Brinjal">Brinjal</option>
        <option value="Okra">Okra</option>
        <option value="Chilli">Chilli</option>
        <option value="Mango">Mango</option>
        <option value="Rice">Rice</option>
        <option value="Sugarcane">Sugarcane</option>
        <option value="Tomato">Tomato</option>
        <option value="Paddy">Paddy</option>
        <option value="Citrus">Citrus</option>
        <option value="Sunflower">Sunflower</option>
        <option value="Groundnut">Groundnut</option>
        <option value="Tea">Tea</option>
        <option value="Maize">Maize</option>
        <option value="Peach">Peach</option>
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
        <option value="Pest1">Pest1</option>
        <option value="Pest2">Pest2</option>
        {/* Add more pests as needed */}
      </select>

      {/* Filter Button */}
      <button
  className="px-4 py-2 bg-dark-green-200 text-white rounded-sm shadow-sm hover:bg-dark-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
  onClick={handleFilterClick}
>
 

        Apply Filter
      </button>
    </div>
    </div>
  );
};

export default CropFilter;
