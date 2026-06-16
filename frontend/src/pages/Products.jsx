import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  return (
    <div className="container mt-5">
      <h2>Products</h2>

      <div className="row">
        {products.map((product) => (
          <div
            key={product._id}
            className="col-md-4 mb-4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
