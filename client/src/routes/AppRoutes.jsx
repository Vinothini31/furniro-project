import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";   //  ADDED
import Product from "../pages/Product";
import Layout from "../components/layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Pages (No Header/Footer) */}
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Pages With Header + Footer */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />        
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />   {/* ✅ ADDED */}
        <Route path="/product/:id" element={<Product />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;