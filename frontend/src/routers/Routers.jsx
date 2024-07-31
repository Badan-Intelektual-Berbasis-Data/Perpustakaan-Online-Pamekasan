import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";
import UserAuthentication from "../pages/auth/UserAuthentication";
import Registration from "../pages/auth/Registration";
import Login from "../pages/auth/Login";
import Information from "../pages/Information";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="detail/:name" element={<Detail />} />
          <Route path="information/" element={<Information />} />
        </Route>
        <Route
          path="profile/"
          element={
            <UserAuthentication>
              <Profile />
            </UserAuthentication>
          }
        />
        <Route
          path="login/"
          element={
            <UserAuthentication>
              <Login />
            </UserAuthentication>
          }
        />
        <Route
          path="register/"
          element={
            <UserAuthentication>
              <Registration />
            </UserAuthentication>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
