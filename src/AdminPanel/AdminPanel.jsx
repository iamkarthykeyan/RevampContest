// src/AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = ({ setIsAuthenticated }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productColor, setProductColor] = useState('');
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: productPrice,
      image: productImage,
      description: productDescription,
      color: productColor
    };
    if (isEditing) {
      const updatedProducts = products.map((product) =>
        product === currentProduct ? newProduct : product
      );
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setIsEditing(false);
      setCurrentProduct(null);
    } else {
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
    setProductName('');
    setProductPrice('');
    setProductImage('');
    setProductDescription('');
    setProductColor('');
  };

  const handleEditProduct = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    setProductName(product.name);
    setProductPrice(product.price);
    setProductImage(product.image);
    setProductDescription(product.description);
    setProductColor(product.color);
  };

  const handleDeleteProduct = (product) => {
    const updatedProducts = products.filter((p) => p !== product);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
<div className="flex flex-col items-center min-h-screen bg-cover bg-center bg-fixed p-4" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1920x1080)' }}>
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/50 w-full max-w-2xl mb-6 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 drop-shadow-md">Admin Panel</h2>
        <button onClick={handleLogout} className="w-full py-2 px-4 mb-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-red-500">Logout</button>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Name:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-4 py-2 bg-white/20 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Price:</label>
            <input
              type="text"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="w-full px-4 py-2 bg-white/20 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Image URL:</label>
            <input
              type="text"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
              className="w-full px-4 py-2 bg-white/20 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Description:</label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="w-full px-4 py-2 bg-white/20 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Color:</label>
            <input
              type="text"
              value={productColor}
              onChange={(e) => setProductColor(e.target.value)}
              className="w-full px-4 py-2 bg-white/20 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {isEditing ? 'Update Product' : 'Add Product'}
          </button>
        </form>
      </div>
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/50 w-full max-w-2xl animate-fade-in">
        <h3 className="text-3xl font-semibold mb-6 text-center text-gray-900 drop-shadow-md">Product List</h3>
        <ul className="space-y-4">
          {products.map((product, index) => (
            <li key={index} className="bg-white/20 p-4 rounded-lg shadow-md border border-gray-300">
              <div className="flex items-center space-x-4">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-gray-900">{product.name}</h4>
                  <p className="text-gray-700">${product.price}</p>
                  <p className="text-gray-700">{product.description}</p>
                  <p className="text-gray-700">Color: {product.color}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product)}
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
