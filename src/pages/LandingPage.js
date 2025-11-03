import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing">
      <h1>BloomHouse 🌿</h1>
      <p>Welcome to BloomHouse — your home for healthy, happy houseplants!</p>
      <Link to="/products" className="btn">Get Started</Link>
    </div>
  );
}

export default LandingPage;
