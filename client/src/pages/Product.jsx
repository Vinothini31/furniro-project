import { useParams } from "react-router-dom";
import products from "../data/products";

const Product = () => {
  const { id } = useParams();
  console.log("ID from URL:", id);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500 mt-4">{product.description}</p>
          <p className="text-2xl text-[#B88E2F] mt-6">
            Rs. {product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;