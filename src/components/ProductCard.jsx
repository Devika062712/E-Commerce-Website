import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />

        <button
          className="wishlist-btn"
          onClick={() => toggleWishlist(product)}
        >
          {isWishlisted(product.id) ? "♥" : "♡"}
        </button>
      </div>

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <p>⭐ {product.rating}</p>

      <Link
        to={`/product/${product.id}`}
        className="view-btn"
      >
        View Product
      </Link>
    </div>
  );
}

export default ProductCard;