import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const { totalPrice, clearCart } = useCart();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const placeOrder = (e) => {
    e.preventDefault();

    if (!name || !address || !phone) {
      alert("Please fill all details.");
      return;
    }

    const order = {
      id: "NV" + Math.floor(Math.random() * 10000),
      name,
      address,
      phone,
      total: totalPrice,
      date: new Date().toLocaleDateString()
    };

    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, order])
    );

    clearCart();

    navigate("/orders");
  };

  return (
    <div className="auth-page">
      <h1>Checkout</h1>

      <form onSubmit={placeOrder}>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <h2>Total: ₹{totalPrice}</h2>

        <p>Payment Method: Cash on Delivery</p>

        <button type="submit" className="main-btn">
          Place Order
        </button>

      </form>
    </div>
  );
}

export default Checkout;