import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

import room1 from "../../assets/room1.jpeg";
import room2 from "../../assets/room2.jpeg";
import room3 from "../../assets/room3.jpeg";
import room4 from "../../assets/room4.jpeg";
import room5 from "../../assets/room5.jpeg";
import room6 from "../../assets/room6.jpeg";
import room7 from "../../assets/room7.jpeg";
import room8 from "../../assets/room8.jpeg";
import room9 from "../../assets/room9.jpeg";
import room10 from "../../assets/room10.jpeg";

export default function Inspiration() {
  const navigate = useNavigate();

  const rooms = [
    room1,
    room2,
    room3,
    room4,
    room5,
    room6,
    room7,
    room8,
    room9,
    room10,
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % rooms.length);
  };

  return (
    <section className="bg-[#FCF8F3] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            50+ Beautiful rooms inspiration
          </h2>

          <p className="text-gray-500 mb-6">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="bg-yellow-600 text-white px-6 py-3 font-semibold hover:bg-yellow-700 transition"
          >
            Explore More
          </button>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="relative w-full h-[450px] overflow-hidden rounded-lg group">

          {/* Image with Hover Zoom */}
          <img
            src={rooms[current]}
            alt="Room"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay Text */}
          <div className="absolute bottom-6 left-6 bg-white p-4 shadow-md">
            <p className="text-sm text-gray-400">
              {String(current + 1).padStart(2, "0")} — Rooms
            </p>
            <h3 className="text-lg font-semibold text-gray-800">
              Where Comfort Meets Style
            </h3>
          </div>

          {/* NEXT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-yellow-600 hover:text-white transition"
          >
            <ChevronRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}
