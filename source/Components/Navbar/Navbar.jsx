import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom'; 
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Modiasn Jewelry</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("necklaces")}>
          <Link to='/necklaces'>Necklaces</Link> 
          {menu === "necklaces" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("bracelets")}>
          <Link to='/bracelets'>Bracelets</Link>
          {menu === "bracelets" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("rings")}>
          <Link to='/rings'>Rings</Link>
          {menu === "rings" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("earrings")}>
          <Link to='/earrings'>Earrings</Link>
          {menu === "earrings" ? <hr /> : null}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

