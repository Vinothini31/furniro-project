
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


const products = [
  {
    id: 1,
    name: "Modern Sofa",
    category: "sofa",
    price: 2500000,
    image: product1,
    description:
      "The Modern Sofa is designed to bring elegance and comfort into your living space. Crafted with high-quality fabric and a durable wooden frame, this sofa offers exceptional support and long-lasting performance. Its sleek design and soft cushioning make it perfect for relaxing evenings with family or entertaining guests in style."
  },
  {
    id: 2,
    name: "Classic Chair",
    category: "chair",
    price: 1500000,
    image: product2,
    description:
      "The Classic Chair combines timeless design with everyday comfort. Built with a sturdy wooden base and premium upholstery, it provides excellent support for long sitting hours. Its elegant finish makes it suitable for both modern and traditional interiors."
  },
  {
    id: 3,
    name: "Luxury Sofa",
    category: "sofa",
    price: 7000000,
    image: product3,
    description:
      "Experience premium comfort with the Luxury Sofa, crafted using top-grade materials and plush cushioning. Its spacious seating and refined detailing make it the perfect centerpiece for upscale living rooms. Designed for both comfort and sophistication."
  },
  {
    id: 4,
    name: "Wooden Chair",
    category: "chair",
    price: 1200000,
    image: product4,
    description:
      "The Wooden Chair is built from solid hardwood, offering durability and natural beauty. Its ergonomic design ensures comfortable seating while maintaining a minimal and elegant look ideal for dining areas or study rooms."
  },
  {
    id: 5,
    name: "King Size Bed",
    category: "bed",
    price: 9000000,
    image: product5,
    description:
      "Upgrade your bedroom with the King Size Bed, designed for ultimate comfort and spacious sleeping. Made with a strong frame and premium finishing, it offers durability and a luxurious feel that enhances your bedroom ambiance."
  },
  {
    id: 6,
    name: "Office Chair",
    category: "chair",
    price: 2000000,
    image: product6,
    description:
      "The Office Chair is ergonomically designed to provide maximum back support and comfort during long working hours. Featuring adjustable height and smooth mobility, it enhances productivity while maintaining modern aesthetics."
  },
  {
    id: 7,
    name: "Premium Sofa",
    category: "sofa",
    price: 5500000,
    image: product7,
    description:
      "The Premium Sofa delivers exceptional comfort with high-density foam cushions and durable upholstery. Its contemporary design and spacious seating make it ideal for family gatherings and stylish living spaces."
  },
  {
    id: 8,
    name: "Dining Table",
    category: "table",
    price: 4500000,
    image: product8,
    description:
      "The Dining Table is crafted from high-quality wood, offering durability and elegance. Its spacious surface comfortably accommodates family meals while adding a sophisticated touch to your dining room."
  },
  {
    id: 9,
    name: "Premium Sofa",
    category: "sofa",
    price: 5500000,
    image: sofa1,
    description:
      "This Premium Sofa features a modern silhouette with plush cushioning for superior comfort. Designed with premium fabric and a solid frame, it blends durability with luxury for everyday relaxation."
  },
  {
    id: 10,
    name: "King Size Bed",
    category: "bed",
    price: 2500000,
    image: bed3,
    description:
      "The King Size Bed offers spacious comfort and sturdy construction. Its stylish headboard and durable build ensure restful sleep while enhancing your bedroom’s elegance."
  },
  {
    id: 11,
    name: "Office Chair",
    category: "chair",
    price: 3500000,
    image: chair1,
    description:
      "Designed for professionals, this Office Chair provides ergonomic lumbar support and adjustable features for maximum comfort. Its sleek design makes it perfect for modern office setups."
  },
  {
    id: 12,
    name: "Luxury Bed",
    category: "bed",
    price: 4800000,
    image: bed4,
    description:
      "The Luxury Bed is crafted with premium materials and elegant finishing. Its strong frame and stylish design provide both durability and a high-end bedroom aesthetic."
  },
  {
    id: 13,
    name: "Modern Chair",
    category: "chair",
    price: 1800000,
    image: chair2,
    description:
      "The Modern Chair features a sleek design with comfortable cushioning and sturdy legs. Perfect for dining or office spaces, it adds a contemporary touch to any interior."
  },
  {
    id: 14,
    name: "Classic Sofa",
    category: "sofa",
    price: 6200000,
    image: sofa3,
    description:
      "The Classic Sofa blends traditional elegance with modern comfort. Its premium fabric and strong frame ensure long-lasting durability while providing luxurious seating."
  },
  {
    id: 15,
    name: "Comfort Bed",
    category: "bed",
    price: 5300000,
    image: bed5,
    description:
      "The Comfort Bed is designed for restful nights with its sturdy structure and soft finishing. Its stylish design enhances bedroom decor while ensuring lasting durability."
  },
  {
    id: 16,
    name: "Wooden Table",
    category: "table",
    price: 3900000,
    image: table2,
    description:
      "The Wooden Table offers natural beauty and solid craftsmanship. Its spacious design makes it perfect for dining or workspace use while maintaining elegance."
  },
  {
    id: 17,
    name: "Premium Bed",
    category: "bed",
    price: 7600000,
    image: bed6,
    description:
      "The Premium Bed is built for luxury and durability. With its refined finish and strong support system, it ensures both comfort and long-lasting performance."
  },
  {
    id: 18,
    name: "Luxury Chair",
    category: "chair",
    price: 2200000,
    image: chair3,
    description:
      "The Luxury Chair features a stylish design with superior cushioning for enhanced comfort. Ideal for living rooms or offices, it adds sophistication to any space."
  },
  {
    id: 19,
    name: "Modern Sofa Deluxe",
    category: "sofa",
    price: 6700000,
    image: sofa2,
    description:
      "The Modern Sofa Deluxe offers spacious seating, elegant styling, and exceptional comfort. Built with premium materials, it serves as a perfect statement piece for modern homes."
  },
  {
    id: 20,
    name: "Classic Table",
    category: "table",
    price: 2900000,
    image: table1,
    description:
      "The Classic Table combines simplicity with durability. Crafted from quality wood, it provides a stable and stylish surface ideal for dining or workspace use."
  }
];

export default products;