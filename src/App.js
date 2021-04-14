import data from './data';
import React, { useState } from 'react';
import Product from './components/Product/Product'
import ProductFilter from './components/ProductFilter/ProductFilter';
import './App.css';

function App() {
  const [category, setCategory] = useState('All');

  return (
    <div className="App">
      <button
          className="button"
          category={'All'}
          onClick={() => {
              setCategory('All')
            }}
            >All {data.length}
     </button>
     <Product category={category} setCategory={setCategory} />
     <ProductFilter category={category} />
    </div>
  );
}

export default App;