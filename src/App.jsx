// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { CartProvider } from "./context/CartContext";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Products from "./components/Products";
// import Cart from "./components/Cart";

// export default function App() {
//   return (
   
//     <CartProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </Router>
//     </CartProvider>
    
//   );
// }


import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar";  
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { CartProvider } from "./context/CartContext";

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout />
      </Router>
    </CartProvider>
  );
}
