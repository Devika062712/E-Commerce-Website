import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [searchParams] = useSearchParams();

  const initialCategory =
    searchParams.get("category") || "All";

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "All" || product.category === category;

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="page">
      <h1>Products</h1>

      <input
        className="search-box"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filters">
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Clothing")}>
          Clothing
        </button>

        <button onClick={() => setCategory("Footwear")}>
          Footwear
        </button>

        <button onClick={() => setCategory("Accessories")}>
          Accessories
        </button>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;