import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css"; // Import CSS

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
