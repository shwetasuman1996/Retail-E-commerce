import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/products.css";


import nikeShoes from "./nike-shoes.jpg";
import adidasTshirt from "./adidas-tshirt.jpg";
import appleWatch from "./apple-watch.jpg";
import pumaJacket from "./puma-jacket.jpg";
import boatEarbuds from "./boat-earbuds.jpg";
import sonyHeadphones from "./sony-headphones.jpg";


const productList = [
  { id: 1, name: "Nike Shoes", price: 3999, image: nikeShoes },
  { id: 2, name: "Adidas T-Shirt", price: 1499, image: adidasTshirt },
  { id: 3, name: "Apple Watch", price: 29999, image: appleWatch },
  { id: 4, name: "Puma Jacket", price: 2499, image: pumaJacket },
  { id: 5, name: "Boat Watch", price: 1999, image: boatEarbuds },
  { id: 6, name: "Puma Shoe", price: 4999, image: sonyHeadphones },
];

export default function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    
    <div className="products-container">
      <h1 className="products-title">Our Products</h1>
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)} className="buy-now-btn">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
