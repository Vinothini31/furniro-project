import React, { useState } from "react";
import contactBanner from "../assets/shop-banner.png"; // you can change image

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include",
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } else {
      alert("Failed to send message ❌");
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong ❌");
  }
};

  return (
    <div className="bg-[#F9F9F9]">
     
       {/* HERO SECTION */}
    <div
      className="h-72 flex flex-col justify-center items-center relative overflow-hidden group"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition duration-700"
        style={{ backgroundImage: `url(${contactBanner})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white transition duration-500 group-hover:scale-105">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-2">Home &gt; Contact</p>
      </div>
    </div>
      {/* CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            For more information about our products & services, please feel free to drop us an email.
            Our staff will always be there to help you out. Do not hesitate!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE INFO */}
          <div className="space-y-8">

            <div>
              <h3 className="font-semibold text-lg">📍 Address</h3>
              <p className="text-gray-600 mt-2">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <p className="text-gray-600 mt-2">
                Mobile: (+84) 546-6789 <br />
                Hotline: (+84) 456-6789
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">⏰ Working Time</h3>
              <p className="text-gray-600 mt-2">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                placeholder="Abc"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                placeholder="abc@mail.com"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                placeholder="This is optional"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                placeholder="Hi! I'd like to ask about..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#B88E2F] text-white px-8 py-3 rounded-md hover:bg-[#9e7729] transition"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}