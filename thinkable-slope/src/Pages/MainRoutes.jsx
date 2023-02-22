import { Routes, Route } from "react-router-dom";
import Clearance from "./Clearance/Clearance";
import Men from "./Men/Men";
import Women from "./Women/Women";
import React from "react";
import Post from "../Components/Admin/Post";
import HomePage from "../Pages/HomePage/HomePage.jsx"

const MainRoutes = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
                <Route path="/clearance" element={<Clearance />} />
                <Route path="/post" element={<Post />} />
            </Routes>
        </div>
    );
};

export default MainRoutes;
