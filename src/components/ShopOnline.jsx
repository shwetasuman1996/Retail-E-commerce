
import React, { useContext } from "react";
import { LocationContext } from "../context/LocationContext";
import logo from "../logo.png"; 
import "./shopOnlineStyles.css";

export default function ShopOnline() {
 
  const { location } = useContext(LocationContext);

  return (
    <div className="shop-online-container">
      
      <div className="top-bar">
        <span className="two-hour-delivery">2-hour Delivery</span>
        <div className="top-bar-right">
          <span className="top-bar-link">Track Order</span>
          <span className="top-bar-link">Profile</span>
          
        </div>
      </div>

     
      <div className="logo-row">
        <img src={logo} alt="Inorbit Logo" className="shop-online-logo" />
      </div>

      
      <div className="categories-row">
        <span className="category-link">Women</span>
        <span className="category-link">Men</span>
        <span className="category-link">Kids</span>
        <span className="category-link">Beauty</span>
        <span className="category-link">Home & Living</span>
        <span className="category-link">Top Brands</span>
        <span className="category-link">Video Call Shopping</span>
      </div>

      
      <div className="products-section">
        <h2>
          {location
            ? `Showing products available in ${location}`
            : "Products Section"}
        </h2>
        <p>
          This is where you can display product listings or any other content
          for the "Shop Online" page.
        </p>
      </div>
    </div>
  );
}
