import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Product from './Product'; 

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      <Product searchQuery={searchQuery} />
    </div>
  );
};

export default App;
