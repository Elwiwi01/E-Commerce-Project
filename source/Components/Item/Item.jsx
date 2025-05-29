import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, new_price, old_price, views }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">{new_price} DA</div>
        <div className="item-price-old">{old_price} DA</div>
      </div>
      <div className="item-views">{views} Views</div>
    </div>
  );
};

export default Item;


