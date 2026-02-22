import share1 from "../../assets/share1.png";
import share2 from "../../assets/share2.png";
import share3 from "../../assets/share3.png";
import share4 from "../../assets/share4.png";
import share5 from "../../assets/share5.png";
import share6 from "../../assets/share6.png";
import share7 from "../../assets/share7.png";
import share8 from "../../assets/share8.png";
import share9 from "../../assets/share9.png";

export default function ShareSection() {
  return (
    <section className="py-20 bg-white">

      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-gray-500">Share your setup with</p>
        <h2 className="text-4xl font-bold text-gray-800">
          #FurniroFurniture
        </h2>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-2 md:columns-4 gap-6 space-y-6">

          <img src={share1} className="w-full rounded-lg hover:scale-105 transition duration-500" />
          <img src={share2} className="w-full rounded-lg hover:scale-105 transition duration-500" />
          <img src={share3} className="w-full rounded-lg hover:scale-105 transition duration-500" />
          <img src={share4} className="w-full rounded-lg hover:scale-105 transition duration-500" />
          <img src={share5} className="w-full rounded-lg hover:scale-105 transition duration-500" />
          <img src={share6} className="w-full rounded-lg hover:scale-105 transition duration-500" />
          <img src={share7} className="w-full rounded-lg hover:scale-105 transition duration-500" />
          <img src={share8} className="w-full rounded-lg hover:scale-105 transition duration-500" />
          <img src={share9} className="w-full rounded-lg hover:scale-105 transition duration-500" />
        </div>
      </div>

    </section>
  );
}
