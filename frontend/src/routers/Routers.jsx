import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";



const Home = React.lazy(() => import("../pages/Home"))
const Detail = React.lazy(() => import("../pages/Detail"))
const Profile = React.lazy(() => import("../pages/Profile"))
const Registration = React.lazy(() => import("../pages/auth/Registration"))
const Login = React.lazy(() => import("../pages/auth/Login"))
const Information = React.lazy(() => import("../pages/Information"))
const Search = React.lazy(() => import("../pages/Search"))
const NotFound = React.lazy(() => import("../pages/NotFound"))

export default function Routers() {
  return (
        <React.Suspense fallback={<div>Loading...</div>}>
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
      </React.Suspense>
  );
}
