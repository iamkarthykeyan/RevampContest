// src/UserPanel.jsx
import React, { useState, useEffect } from 'react';
import Animations from '../Animations/Animations';
import Autocarousel from '../Autocarousel/Autocarousel';
import Footer from '../Footer/Footer';
const UserPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProducts(storedProducts);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const sampleProducts = [
    {
      name: "Nike Air Max 270",
      price: 150,
      image: "https://ik.imagekit.io/rxdxtxpigt/Revamp%20Internship%20Contest/Sample%20Product%20Display/red.jpg?updatedAt=1722170079364",
      description: "Breathable and comfortable running shoes.",
      color: "Red",
    },
    {
      name: "Nike React Infinity",
      price: 160,
      image: "https://ik.imagekit.io/rxdxtxpigt/Revamp%20Internship%20Contest/Sample%20Product%20Display/blue.jpg?updatedAt=1722170079974",
      description: "Designed to keep you running.",
      color: "Blue",
    },
    {
      name: "Nike Air Zoom Pegasus",
      price: 120,
      image: "https://ik.imagekit.io/rxdxtxpigt/Revamp%20Internship%20Contest/Sample%20Product%20Display/green.jpg?updatedAt=1722170079700",
      description: "Responsive cushioning for every run.",
      color: "Green",
    },
    {
      name: "Nike Metcon 6",
      price: 130,
      image: "https://ik.imagekit.io/rxdxtxpigt/Revamp%20Internship%20Contest/Sample%20Product%20Display/black.jpeg?updatedAt=1722170079368",
      description: "Versatile training shoe.",
      color: "Black",
    },
    {
      name: "Nike Blazer Mid '77",
      price: 110,
      image: "https://ik.imagekit.io/rxdxtxpigt/Revamp%20Internship%20Contest/Sample%20Product%20Display/white.jpg?updatedAt=1722170079265",
      description: "Classic basketball-inspired design.",
      color: "White",
    },
    {
      name: "Nike Air Force 1",
      price: 100,
      image: "https://ik.imagekit.io/rxdxtxpigt/Revamp%20Internship%20Contest/Sample%20Product%20Display/yellow.jpg?updatedAt=1722170079970",
      description: "Legendary style with a modern twist.",
      color: "Yellow",
    },
    {
      name: "Nike Dunk Low",
      price: 90,
      image: "https://ik.imagekit.io/rxdxtxpigt/Revamp%20Internship%20Contest/Sample%20Product%20Display/orange.jpg?updatedAt=1722170080724",
      description: "Skateboarding classic reimagined.",
      color: "Orange",
    },
    {
      name: "Nike ZoomX Vaporfly",
      price: 250,
      image: "https://ik.imagekit.io/rxdxtxpigt/Revamp%20Internship%20Contest/Sample%20Product%20Display/purple.jpg?updatedAt=1722170080717",
      description: "Elite racing shoe for ultimate performance.",
      color: "Purple",
    },
  ];

  return (
    <div>
      <Animations />
      <div className="w-full animate-fade-in mt-24">
        <h3 className="text-3xl font-semibold mb-12 text-center text-gray-900 drop-shadow-md">Explore New Arrivals</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10">
          {sampleProducts.map((product, index) => (
            <li
              key={index}
              className="bg-white/20 p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-center p-4 rounded-lg shadow-inner mb-4 w-full bg-gradient-to-r bg-white/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-28 h-28 object-cover rounded-full mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-900">{product.name}</h4>
                </div>
                <p className="text-gray-800 font-bold mb-2">${product.price}</p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.164c.969 0 1.372 1.24.588 1.81l-3.366 2.448a1 1 0 00-.364 1.118l1.287 3.948c.3.921-.755 1.688-1.539 1.118l-3.366-2.448a1 1 0 00-1.175 0l-3.366 2.448c-.784.57-1.84-.197-1.54-1.118l1.287-3.948a1 1 0 00-.364-1.118L2.053 9.375c-.784-.57-.381-1.81.588-1.81h4.164a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-center mb-2">{product.description}</p>
                <p className="text-gray-900 font-semibold mb-2">Color: {product.color}</p>
                <div className="flex flex-wrap gap-4 justify-center mt-3">
                  <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 lg:py-2 lg:px-3">
                    Buy Now
                  </button>
                  <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 lg:py-2 lg:px-3">
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10">
          {products.map((product, index) => (
            <li
              key={index}
              className="bg-white/10 p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-center p-4 rounded-lg shadow-inner mb-4 w-full bg-gradient-to-r bg-white/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-28 h-28 object-cover rounded-full mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-900">{product.name}</h4>
                </div>
                <p className="text-gray-800 font-bold mb-2">${product.price}</p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-red-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.164c.969 0 1.372 1.24.588 1.81l-3.366 2.448a1 1 0 00-.364 1.118l1.287 3.948c.3.921-.755 1.688-1.539 1.118l-3.366-2.448a1 1 0 00-1.175 0l-3.366 2.448c-.784.57-1.84-.197-1.54-1.118l1.287-3.948a1 1 0 00-.364-1.118L2.053 9.375c-.784-.57-.381-1.81.588-1.81h4.164a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-center mb-2">{product.description}</p>
                <p className="text-gray-900 font-semibold mb-2">Color: {product.color}</p>
                <div className="flex flex-wrap gap-4 justify-center mt-3">
                  <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 lg:py-2 lg:px-3">
                    Buy Now
                  </button>
                  <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 lg:py-2 lg:px-3">
                    Add to Cart
                  </button>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
      <Autocarousel />
      <Footer />
    </div>
  );
};

export default UserPanel;
