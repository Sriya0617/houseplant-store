import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import "./ProductListing.css";

const plants = [
  { id: 1, name: "Aloe Vera", price: 150, img: "https://picsum.photos/150?1" },
  { id: 2, name: "Snake Plant", price: 200, img: "https://picsum.photos/150?2" },
  { id: 3, name: "Money Plant", price: 120, img: "https://picsum.photos/150?3" },
  { id: 4, name: "Peace Lily", price: 250, img: "https://picsum.photos/150?4" },
  { id: 5, name: "Spider Plant", price: 180, img: "https://picsum.photos/150?5" },
  { id: 6, name: "Cactus", price: 100, img: "https://picsum.photos/150?6" },
];

function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
  };

  const isAdded = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="products">
      <header>
        <h2>Houseplants Store</h2>
        <Link to="/cart" className="cart-link">
          🛒 {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        </Link>
      </header>

      <div className="plant-grid">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.img} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>₹{plant.price}</p>
            <button disabled={isAdded(plant.id)} onClick={() => handleAdd(plant)}>
              {isAdded(plant.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
