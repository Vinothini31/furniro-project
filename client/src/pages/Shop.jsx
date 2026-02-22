import React, { useState } from "react";
import bannerImg from "../assets/shop-banner.png";
import { useNavigate } from "react-router-dom";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import sofa1 from "../assets/sofa1.jpeg";
import bed3 from "../assets/bed3.jpeg";
import chair1 from "../assets/chair1.jpeg";
import table1 from "../assets/table1.jpeg";
import bed4 from "../assets/bed4.jpeg";
import chair2 from "../assets/chair2.jpeg";
import sofa3 from "../assets/sofa3.jpeg";
import bed5 from "../assets/bed5.jpeg";
import table2 from "../assets/table2.jpeg";
import bed6 from "../assets/bed6.jpeg";
import chair3 from "../assets/chair3.jpeg";
import sofa2 from "../assets/sofa2.jpeg";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const navigate = useNavigate();

  // 🛒 PRODUCTS DATA
  const products = [
    { id: 1, name: "Modern Sofa", category: "sofa", price: 2500000, image: product1 },
    { id: 2, name: "Classic Chair", category: "chair", price: 1500000, image: product2 },
    { id: 3, name: "Luxury Sofa", category: "sofa", price: 7000000, image: product3 },
    { id: 4, name: "Wooden Chair", category: "chair", price: 1200000, image: product4 },
    { id: 5, name: "King Size Bed", category: "bed", price: 9000000, image: product5 },
    { id: 6, name: "Office Chair", category: "chair", price: 2000000, image: product6 },
    { id: 7, name: "Premium Sofa", category: "sofa", price: 5500000, image: product7 },
    { id: 8, name: "Dining Table", category: "table", price: 4500000, image: product8 },
    { id: 9, name: "Premium Sofa", category: "sofa", price: 5500000, image: sofa1 },
    { id: 10, name: "King size Bed", category: "bed", price: 2500000, image: bed3 },
    { id:11, name: "Office Chair", category: "chair", price: 3500000, image: chair1 },
    { id: 12, name: "Luxury Bed", category: "bed", price: 4800000, image: bed4 },
    { id: 13, name: "Modern Chair", category: "chair", price: 1800000, image: chair2 },
    { id: 14, name: "Classic Sofa", category: "sofa", price: 6200000, image: sofa3 },
    { id: 15, name: "Comfort Bed", category: "bed", price: 5300000, image: bed5 },
    { id: 16, name: "Wooden Table", category: "table", price: 3900000, image: table2 },
    { id: 17, name: "Premium Bed", category: "bed", price: 7600000, image: bed6 },
    { id: 18, name: "Luxury Chair", category: "chair", price: 2200000, image: chair3 },
    { id: 19, name: "Modern Sofa Deluxe", category: "sofa", price: 6700000, image: sofa2 },
    { id: 20, name: "Classic Table", category: "table", price: 2900000, image: table1 },

  ];

  // 🔍 FILTER + SORT LOGIC (UNCHANGED)
  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-[#F9F9F9]">

      {/* HERO SECTION */}
      <div
        className="h-72 flex flex-col justify-center items-center bg-cover bg-center relative overflow-hidden group transition-all duration-500"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white group-hover:scale-105 transition duration-500">
            Shop
          </h1>
          <p className="text-gray-200 mt-2">Home &gt; Shop</p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-[#F3EDE5] py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <input
          type="text"
          placeholder="Search sofa, chair, bed..."
          className="border px-4 py-2 w-full md:w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>

        <span className="text-gray-600 font-medium">
          Showing {filteredProducts.length} results
        </span>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-sm hover:shadow-xl transition duration-300 rounded-md overflow-hidden group"
            >
              {/* Image Wrapper */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />

                {/* Overlay Button */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="bg-white px-4 py-2 text-sm font-semibold rounded-md hover:bg-[#B88E2F] hover:text-white transition"
                  >
                    View Product
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {product.name}
                </h3>

                <p className="text-gray-500 capitalize">
                  {product.category}
                </p>

                <p className="font-bold mt-2 text-lg text-[#B88E2F]">
                  Rp {product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No products found
          </p>
        )}

      </div>
    </div>
  );
}
