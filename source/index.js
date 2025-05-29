import react from "react";
import reactDOM from "react-dom/client";
import './index.css';
import App from './App';
import ShopContextProvider from "./Context/ShopContext";

const root=reactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
  <App/>
  </ShopContextProvider>
);