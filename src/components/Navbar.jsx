// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
      
//       <div className="navbar-logo">
//         <Link to="/">🛍️ MyMall</Link>
//       </div>

      
//       <div className="navbar-links">
//         <Link to="/">Home</Link>
//         <Link to="/products">Shop Now</Link>
//       </div>

     
//       <div className="navbar-cart">
//         <Link to="/cart" className="cart-link">
//           <span className="cart-icon">🛒</span> Cart
//         </Link>
//       </div>
//     </nav>
//   );
// }


import React from "react";
import { Link } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🛍️ MyMall</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Shop Now</Link>
      </div>

      <div className="navbar-auth">
        <Link to="/signin" className="auth-link">Sign In</Link>
        <Link to="/signup" className="auth-link">Sign Up</Link>
        <Link to="/cart" className="cart-link">🛒 Cart</Link>
      </div>
    </nav>
  );
}
