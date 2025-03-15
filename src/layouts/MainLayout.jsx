// src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";  // Make sure this path is correct
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}
