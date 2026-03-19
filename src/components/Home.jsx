import React from "react";
import { useNavigate } from "react-router";
import videoSource from "../video.mp4"; 
import "../styles/home.css"; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      <video autoPlay loop muted className="background-video">
        <source src={videoSource} type="video/mp4" />
      </video>

      
      <div className="home-content">
        <h1 className="home-title">Welcome to Our Shopping Mall</h1>
        <button onClick={() => navigate("/products")} className="shop-now-btn">
          Shop Now
        </button>
      </div>
    </div>
  );
}



