import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Shop Your Style</h1>
        <p>Find something you'll love.</p>

        <Link to="/products" className="main-btn">
          Shop Now
        </Link>
      </section>

      <section className="section">
        <h2>Shop by Category</h2>

        <div className="categories">
          <Link to="/products?category=Clothing">
            👕 Clothing
          </Link>

          <Link to="/products?category=Footwear">
            👟 Footwear
          </Link>

          <Link to="/products?category=Accessories">
            ⌚ Accessories
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Trending Now</h2>

        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      <section className="outfit-banner">
        <h2>Build Your Own Outfit ⭐</h2>

        <p>
          Choose your top, bottom, shoes and accessories
          and create your complete look.
        </p>

        <Link to="/build-outfit" className="main-btn">
          Try It Now
        </Link>
      </section>
    </>
  );
}

export default Home;