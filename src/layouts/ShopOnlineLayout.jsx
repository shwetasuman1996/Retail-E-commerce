// ShopOnlineLayout.js
import React from "react";
import { Outlet } from "react-router-dom";

/**
 * A layout that does NOT render the main Navbar.
 * Instead, you can add your custom top bar or simply
 * let the Outlet render the ShopOnline component.
 */
export default function ShopOnlineLayout() {
  return (
    <>
      {/* No Navbar here, or you can put a different top bar */}
      <Outlet />
    </>
  );
}
