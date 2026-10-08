import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="page">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>

        <Link to="/products" className="main-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div>
            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>

            <span> {item.quantity} </span>

            <button
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>

            <br />

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h2>Total: ₹{totalPrice}</h2>

        <Link to="/checkout" className="main-btn">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;