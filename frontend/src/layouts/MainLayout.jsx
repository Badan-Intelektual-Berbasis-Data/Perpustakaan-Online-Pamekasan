import React from "react";
import Navbar from "../components/atoms/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[100dvh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
