import React, { useState, useEffect } from 'react';
import './RelatedProducts.css';
import all_product from '../Assets/all_product';
import Item from '../Item/Item';

export const RelatedProducts = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  const getRandomProducts = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const randomItems = getRandomProducts(all_product, 4);
    setRandomProducts(randomItems);
  }, []);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {randomProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;