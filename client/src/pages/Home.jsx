import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import diningImage from "../assets/dining.png";
import livingImage from "../assets/living.png";
import bedroomImage from "../assets/bedroom.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";

import Inspiration from "../components/layout/Inspiration";
import ShareSection from "../components/layout/ShareSection";

const Home = () => {
  const navigate = useNavigate();

  // ✅ UPDATED Add To Cart
  const handleAddToCart = async (product) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.trim()}`, // ✅ trim added
      },
      body: JSON.stringify({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.img,
        quantity: 1,
      }),
    });

    const data = await response.json();

    console.log("Cart Response:", data); // ✅ ADD THIS

    if (!response.ok) {
      throw new Error(data.message || "Failed to add");
    }

    alert("Added to cart ✅");

  } catch (error) {
    console.error("Cart Error:", error);
    alert(error.message);
  }
};

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Banner Section */}
      <section className="relative h-[716px] w-full overflow-hidden group">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="relative z-10 text-center flex items-center justify-center h-full px-8">
          <div>
            <h2
              className="mb-6"
              style={{
                color: "#B88E2F",
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "52px",
                lineHeight: "65px",
              }}
            >
              Discover Our <br /> New Collection
            </h2>

            <p className="text-black max-w-2xl mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="text-white px-8 py-3 rounded-lg font-semibold 
                         transition-transform duration-300 
                         hover:scale-110 hover:shadow-lg"
              style={{ backgroundColor: "#B88E2F" }}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </section>


  {/* Browse Section */}

  <section className="py-16 px-8 text-center">



    <h3

      style={{

        fontFamily: "Poppins",

        fontWeight: 700,

        fontSize: "32px",

        lineHeight: "100%",

        color: "#333333",

        width: "300px",

        margin: "0 auto",

      }}

      className="mb-12"

    >

      Browse The Range

    </h3>



    <p

      style={{

        fontFamily: "Poppins",

        fontWeight: 400,

        fontSize: "20px",

        lineHeight: "100%",

        color: "#666666",

      }}

      className="max-w-2xl mx-auto mb-12"

    >

      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

    </p>



    <div className="grid md:grid-cols-3 gap-1 justify-items-center">



      {[ 

        { img: diningImage, title: "Dining" },

        { img: livingImage, title: "Living" },

        { img: bedroomImage, title: "Bedroom" }

      ].map((item, index) => (

        <div key={index} className="text-center">

          <div className="overflow-hidden rounded-lg">

            <img

              src={item.img}

              alt={item.title}

              style={{

                width: "381px",

                height: "480px",

                objectFit: "cover",

              }}

              className="transition-transform duration-500 hover:scale-110"

            />

          </div>

          <h4 className="text-xl font-semibold mt-4">

            {item.title}

          </h4>

        </div>

      ))}

    </div>

  </section>

      {/* Our Products Section */}
      <section className="py-20 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">
          Our Products
        </h3>

        {(() => {
          const products = [
            {
              id: 1,
              img: product1,
              name: "Syltherine",
              desc: "Luxury big sofa",
              price: 2500000,
              oldPrice: "Rp 3.500.000",
              badge: "-30%",
            },
            {
              id: 2,
              img: product2,
              name: "Leviosa",
              desc: "Outdoor bar table",
              price: 2800000,
              badge: "New",
            },
            {
              id: 3,
              img: product3,
              name: "Lolito",
              desc: "Minimal night lamp",
              price: 4200000,
              oldPrice: "Rp 6.500.000",
              badge: "-30%",
            },
            {
              id: 4,
              img: product4,
              name: "Respira",
              desc: "small mug",
              price: 500000,
              badge: "New",
            },
            {
              id: 5,
              img: product5,
              name: "Grifo",
              desc: "Stylish cafe chair",
              price: 1500000,
              oldPrice: "Rp 3.500.000",
              badge: "-50%",
            },
            {
              id: 6,
              img: product6,
              name: "Muggo",
              desc: "Ceramic small mug",
              price: 150000,
              badge: "New",
            },
            {
              id: 7,
              img: product7,
              name: "Pingky",
              desc: "Minimalist flower pot",
              price: 7000000,
              oldPrice: "Rp 8.000.000",
              badge: "-12%",
            },
            {
              id: 8,
              img: product8,
              name: "Potty",
              desc: "Stylish cafe chair",
              price: 500000,
              badge: "New",
            },
          ];

          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-gray-100 relative overflow-hidden rounded-lg"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[300px] object-cover"
                  />

                  {product.badge && (
                    <span
                      className={`absolute top-4 right-4 text-white text-sm px-3 py-1 rounded-full ${
                        product.badge === "New"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}

                  <div className="absolute inset-0 bg-black bg-opacity-50 
                                  flex items-center justify-center 
                                  opacity-0 group-hover:opacity-100 
                                  transition duration-300">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-white text-black px-6 py-2 font-semibold rounded-md hover:bg-gray-200"
                    >
                      Add to cart
                    </button>
                  </div>

                  <div className="p-4 bg-white">
                    <h4 className="font-semibold text-lg">
                      {product.name}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      {product.desc}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <span className="font-bold text-black">
                        Rp {product.price.toLocaleString()}
                      </span>

                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/shop")}
            className="border border-yellow-600 text-yellow-600 px-8 py-3 font-semibold hover:bg-yellow-600 hover:text-white transition"
          >
            Show More
          </button>
        </div>
      </section>

      <Inspiration />
      <ShareSection />
    </div>
  );
};

export default Home;