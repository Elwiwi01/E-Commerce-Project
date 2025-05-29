import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import ShopContextProvider from './Context/ShopContext';
import bracelets_banner from './Components/Assets/banner_bracelets.png';
import necklaces_banner from './Components/Assets/banner_necklaces.png';
import rings_banner from './Components/Assets/banner_rings.png';
import earrings_banner from './Components/Assets/banner_earrings.png';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/necklaces" element={<ShopCategory banner={necklaces_banner} category="necklaces" />} />
          <Route path="/bracelets" element={<ShopCategory banner={bracelets_banner} category="bracelets" />} />
          <Route path="/rings" element={<ShopCategory banner={rings_banner} category="rings" />} />
          <Route path="/earrings" element={<ShopCategory banner={earrings_banner} category="earrings" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
