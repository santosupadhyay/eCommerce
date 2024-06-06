import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Search from "./components/Search";
import Cart from "./components/Cart";
import { items } from "./components/Data";

export default function App() {

  const [data, setData] = useState([...items])
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Product items={data}/>} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search/:term" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}
