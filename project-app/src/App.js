import "./App.css";
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import AccessPage from "./Pages/AccessPage";
import Auth from "./Auth";
import Careerspage from "./Pages/Careerspage";
import FAQs from "./Pages/FAQs";
import { Route, Routes } from "react-router-dom";
import Checkoutpage from "./Pages/Checkoutpage";
import Productpage from "./Pages/Productpage";
import Resturantpage from "./Pages/Resturantpage";
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './Components/CartContext';
import { ToastContainer } from 'react-toastify';
import CartPage from "./Pages/CartPage";
import AntiNavLayout from "../src/Layout/AntiNavLayout";

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <Routes>
        {/* Access page without Navbar and Footer */}
        <Route path="/access" element={<AccessPage />} />

        {/* All other pages inside Layout (with Navbar & Footer) */}
        <Route element={<AntiNavLayout />}>
          <Route element={<Auth />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/resturant" element={<Resturantpage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/careers" element={<Careerspage />} />
            <Route path="/checkout" element={<Checkoutpage />} />
            <Route path="/product" element={<Productpage />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
