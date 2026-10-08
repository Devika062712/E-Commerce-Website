import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <div>
        <img src={product.image} alt={product.name} />
      </div>

      <div>
        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p>⭐ {product.rating}</p>

        <p>{product.description}</p>

        <div className="sizes">
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>

        <button
          className="main-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        <button
          className="secondary-btn"
          onClick={() => toggleWishlist(product)}
        >
          {isWishlisted(product.id)
            ? "♥ Remove Wishlist"
            : "♡ Add to Wishlist"}
        </button>
      </div>

      <div className="complete-look">
        <h2>🔥 Complete Your Look</h2>

        <p>
          Create a complete outfit using our Outfit Builder.
        </p>

        <Link to="/build-outfit" className="main-btn">
          Build This Outfit
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;