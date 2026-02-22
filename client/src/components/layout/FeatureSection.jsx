import React from "react";
import { Trophy, ShieldCheck, Truck, Headphones } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: <Trophy size={40} />,
      title: "High Quality",
      desc: "crafted from top materials",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Warranty Protection",
      desc: "Over 2 years",
    },
    {
      icon: <Truck size={40} />,
      title: "Free Shipping",
      desc: "Order over 150 $",
    },
    {
      icon: <Headphones size={40} />,
      title: "24 / 7 Support",
      desc: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#FAF3EA] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {features.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col lg:flex-row items-center gap-4 p-6 rounded-xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 cursor-pointer"
          >
            <div className="text-[#B88E2F] transition duration-500 group-hover:scale-125">
              {item.icon}
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}