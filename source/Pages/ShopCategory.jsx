import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { ShopContext } from '../Context/ShopContext'; 
import Item from '../Components/Item/Item';

const ShopCategory = (props) => { 
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedProducts = [...all_product].sort((a, b) => {
    if (sortOption === 'name') return a.name.localeCompare(b.name);
    if (sortOption === 'popularity') return b.views - a.views;
    if (sortOption === 'price') return a.new_price - b.new_price;
    return 0;
  });

  const filteredProducts = sortedProducts.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const displayText = sortOption === 'default' ? 'Sort by' : `Sort by ${sortOption.charAt(0).toUpperCase() + sortOption.slice(1)}`;

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <div className="shopcategory-search">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="shopcategory-sort">
          <div className="sort-button">
            <span>{displayText}</span>
            <select onChange={handleSortChange} value={sortOption}>
              <option value="default" disabled>Choose</option>
              <option value="name">Name</option>
              <option value="popularity">Popularity</option>
              <option value="price">Price</option>
            </select>
            <img src={dropdown_icon} alt="Sort Icon" />
          </div>
        </div>
      </div>
      <div className="shopcategory-product">
        {filteredProducts.map((item, index) => { 
          if (props.category === item.category) { 
            return (
              <Item
                key={index} 
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                views={item.views}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ShopCategory;