import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <Link to="/products">Continue Shopping</Link>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <div>
                <button onClick={() => dispatch(decrease(item.id))}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increase(item.id))}>+</button>
              </div>
              <button onClick={() => dispatch(remove(item.id))}>Delete</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button>Checkout — Coming Soon</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
