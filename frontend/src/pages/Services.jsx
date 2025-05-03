import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import card from '../assets/mobile.png';

const services = [
  'Easter',
  'Wedding E-Invitation',
  'Adult Birthday',
  'Kids Birthday',
  "Baby's New Born",
  'Greeting Cards',
  'Flyer',
  'Parties',
  'Business',
  'Reception',
];

// Sample product data (replace with actual data source if available)
const products = [
  { id: 1, title: 'Wedding Invitation (WD-1)', price: '₹200', image: card, alt: 'Wedding Invitation WD-1' },
  { id: 2, title: 'Wedding Invitation (WD-1)', price: '₹200', image: card, alt: 'Wedding Invitation WD-1' },
  { id: 3, title: 'Wedding Invitation (WD-1)', price: '₹200', image: card, alt: 'Wedding Invitation WD-1' },
  { id: 4, title: 'Wedding Invitation (WD-1)', price: '₹200', image: card, alt: 'Wedding Invitation WD-1' },
  { id: 5, title: 'Wedding Invitation (WD-1)', price: '₹200', image: card, alt: 'Wedding Invitation WD-1' },
];

// Reusable ProductCard component
const ProductCard = ({ title, price, image, alt }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <img src={image} alt={alt} className="w-[250px] h-auto object-cover rounded-md" />
    <div className="flex flex-col items-center mt-3">
      <h1 className="text-lg font-medium text-gray-800">{title}</h1>
      <h2 className="text-xl font-semibold text-gray-900">{price}</h2>
    </div>
    <button
      className="mt-4 w-56 px-4 py-3 bg-amber-950 text-white rounded-md cursor-pointer hover:bg-amber-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600"
    >
      Add to Cart
    </button>
  </div>
);

const Services = () => {
  const [selectedPrice, setSelectedPrice] = useState('all');

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  // Filter products based on selected price (example logic, adjust as needed)
  const filteredProducts = products.filter((product) => {
    if (selectedPrice === 'all') return true;
    const priceNum = parseInt(product.price.replace('₹', ''));
    if (selectedPrice === 'low') return priceNum < 200;
    if (selectedPrice === 'medium') return priceNum >= 200 && priceNum <= 500;
    if (selectedPrice === 'high') return priceNum > 500;
    return true;
  });

  return (
    <div className="p-5">
      {/* Service Links */}
      <div className="flex flex-wrap gap-10 ml-5 font-medium mt-20">
        {services.map((service, index) => (
          <Link
            to={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
            className="text-gray-700 text-lg font-medium hover:text-blue-500 hover:scale-105 transition-all duration-300"
          >
            {service}
          </Link>
        ))}
      </div>
      <hr className="mt-10 border-gray-200" />

      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/450066/pexels-photo-450066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-[400px] object-cover"
          alt="Online Invitations"
        />
        <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-semibold">Online Invitations</h1>
        </div>
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 text-center max-w-2xl">
          <p className="text-white text-lg md:text-2xl mt-5">
            We make online invitations that create real connections for all the moments that matter. Host better parties with confidence.
          </p>
        </div>
        <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 text-center">
          <button
            className="bg-amber-950 px-10 py-3 text-white rounded-md cursor-pointer hover:bg-amber-800 transition-colors"
          >
            Check Out Now!
          </button>
        </div>
      </div>

      {/* Filter by Price Section */}
      <div className="mt-10 flex justify-center items-center">
        <label htmlFor="price" className="mr-3 text-lg font-medium">
          Filter by Price:{' '}
        </label>
        <select
          id="price"
          value={selectedPrice}
          onChange={handlePriceChange}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          <option value="all">All Prices</option>
          <option value="low">Low (Under ₹200)</option>
          <option value="medium">Medium (₹200 - ₹500)</option>
          <option value="high">High (Over ₹500)</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-32 mt-10 mx-auto ">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            alt={product.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;