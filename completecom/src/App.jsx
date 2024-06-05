import React from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Search from "./components/Search";
import Cart from "./components/Cart";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search/:term" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}
