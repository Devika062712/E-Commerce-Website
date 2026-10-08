import { Link } from "react-router-dom";

function Orders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="page">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.id}>
            <h3>Order #{order.id}</h3>

            <p>Date: {order.date}</p>

            <p>Total: ₹{order.total}</p>

            <p>Status: 🟢 Confirmed</p>
          </div>
        ))
      )}

      <Link to="/products" className="main-btn">
        Continue Shopping
      </Link>
    </div>
  );
}

export default Orders;