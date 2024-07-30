import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Profile from '../pages/Profile'

export default function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path='' element={<Home />} />
                <Route path='detail/:name' element={<Detail />} />
                <Route path='profile/' element={<Profile />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
}
