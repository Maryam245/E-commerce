import React, { useState } from 'react';
import {BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Product from "./component/Product";
import Cart from "./component/cart";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
  <>
  <Router>
  <Navbar setSearchQuery={setSearchQuery} />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Product" element={<Product searchQuery={searchQuery} />} />
     <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
