// app/cart/page.js
"use client";
import { useSelector } from "react-redux";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);

  console.log("Cart State:", cart); // Debugging: Log the cart state

  return (
    <div>
      <h1>Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${cart.total}</p>
    </div>
  );
}