import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";
import Registration from "../pages/auth/Registration";
import Login from "../pages/auth/Login";
import Information from "../pages/Information";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="search/" element={<Search />} />
          <Route path="detail/:name" element={<Detail />} />
          <Route path="information/" element={<Information />} />
          <Route path="profile/" element={<Profile />} />
        </Route>

        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Registration />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
