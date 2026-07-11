import Navbar from "./components/Navbar/Navbar";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans">
          <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
