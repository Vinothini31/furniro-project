import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");

      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setCartItems(data);
    };

    fetchCart();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">My Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex items-center gap-6 border-b py-4"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover"
          />
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}