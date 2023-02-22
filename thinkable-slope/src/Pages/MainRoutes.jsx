import { Routes, Route } from "react-router-dom";
import Clearance from "./Clearance/Clearance";
import Men from "./Men/Men";
import Women from "./Women/Women";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const MainRoutes = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
                <Route path="/clearance" element={<Clearance />} />
            </Routes>
        </div>
    );
};

export default MainRoutes;
