import React, { useState } from 'react';
import './App.css';
import Imagedisplay from './Imagedisplay';

function App() {
  const productData=[
    {
      "product_name":"laptop",
      "productimage":"https://images.pexels.com/photos/7128957/pexels-photo-7128957.jpeg?auto=compress&cs=tinysrgb&w=600" 
        
    },
    {
      "product_name":"laptop",
      "productimage":"https://images.pexels.com/photos/7014925/pexels-photo-7014925.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "product_name":"laptop",
      "productimage":"https://images.pexels.com/photos/6912833/pexels-photo-6912833.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      
      "product_name":"laptop",
      "productimage":"https://images.pexels.com/photos/2064586/pexels-photo-2064586.jpeg?auto=compress&cs=tinysrgb&w=600"
     },
     {
      "product_name":"laptop",
    "productimage":"https://images.pexels.com/photos/5586315/pexels-photo-5586315.jpeg?auto=compress&cs=tinysrgb&w=600"
     },
    
    {
      "product_name":"cricketbat",
      "productimage":"https://images.pexels.com/photos/3800517/pexels-photo-3800517.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "product_name":"cricketbat",
      "productimage":"https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "product_name":"cricketbat",
      "productimage":"https://images.pexels.com/photos/13509965/pexels-photo-13509965.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "product_name":"cricketbat",
      "productimage":"https://images.pexels.com/photos/9393464/pexels-photo-9393464.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "product_name":"cricketbat",
      "productimage":"https://images.pexels.com/photos/11204757/pexels-photo-11204757.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "product_name":"tabletennis",
      "productimage":"https://images.pexels.com/photos/709134/pexels-photo-709134.jpeg?auto=compress&cs=tinysrgb&w=600"
   },
   {
    "product_name":"tabletennis",
    "productimage":"https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=600"
   },
   {
    "product_name":"tabletennis",
    "productimage":"https://images.pexels.com/photos/569986/pexels-photo-569986.jpeg?auto=compress&cs=tinysrgb&w=600"
   },
   {
    "product_name":"tabletennis",
    "productimage":"https://images.pexels.com/photos/13793163/pexels-photo-13793163.jpeg?auto=compress&cs=tinysrgb&w=600"
   },
   {
    "product_name":"tabletennis",
    "productimage":"https://images.pexels.com/photos/8933713/pexels-photo-8933713.jpeg?auto=compress&cs=tinysrgb&w=600"
   },
   {
    "product_name":"mobile",
      "productimage":"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600"
   },
   {
    "product_name":"mobile",
      "productimage":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600"
   },
   {
    "product_name":"mobile",
      "productimage":"https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=600"
   },
   {
    "product_name":"mobile",
      "productimage":"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"
   },
   {
    "product_name":"mobile",
      "productimage":"https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=600"
   }
   ]

  const [,setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const filtered = productData.filter((item) =>
      item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  

  const handleButtonClick = (productName) => {
    const filtered = productData.filter(
      (item) => item.product_name === productName
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <div>
        <input type="text" className="search-bar" placeholder="Search" onChange={handleSearch} />
      </div>
      <div className="menu">
        <button onClick={() => handleButtonClick('laptop')}>Laptop</button>
        <button onClick={() => handleButtonClick('cricketbat')}>
          Cricket Bat
        </button>
        <button onClick={() => handleButtonClick('tabletennis')}>
          Table Tennis
        </button>
        <button onClick={() => handleButtonClick('mobile')}>Mobile</button>
      </div>
      <div className="image-container">
        {filteredProducts.length > 0
          ? filteredProducts.map((item, index) => (
              <Imagedisplay key={index} data={item} />
            ))
          : productData.map((item, index) => (
              <Imagedisplay key={index} data={item} />
            ))}
      </div>
    </div>
  );
}

export default App;
