import React, { useContext, useEffect } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { incrementViews, incrementPurchases } from '../Assets/all_product';

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    if (product?.id) {
      incrementViews(product.id);
    }
  }, [product?.id]);

  const handleAddToCart = () => {
    if (product?.id) {
      addToCart(product.id);
      incrementPurchases(product.id);
    }
  };

  if (!product || !product.name || !product.image) {
    return <div>Product not found.</div>;
  }

  const tags = ['Modern', 'Stainless Steel'];
  if (product.description.toLowerCase().includes('pearl')) tags.push('Pearl');
  if (product.description.toLowerCase().includes('emerald')) tags.push('Emerald');
  if (product.description.toLowerCase().includes('geometric')) tags.push('Geometric');

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="half star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{product.old_price} DA</div>
          <div className="productdisplay-right-price-new">{product.new_price} DA</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        {product.category === 'rings' && (
          <div className="productdisplay-right-sizes">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes-options">
              <div>16</div>
              <div>17</div>
              <div>18</div>
              <div>19</div>
              <div>20</div>
            </div>
          </div>
        )}
        <button onClick={handleAddToCart}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Women, Jewelry, {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> {tags.join(', ')}
        </p>
        <p className="productdisplay-right-stats">
          <span>Views:</span> {product.views}
        </p>
        <p className="productdisplay-right-stats">
          <span>Purchases:</span> {product.purchases}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;