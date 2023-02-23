import { Routes, Route } from "react-router-dom";
import Clearance from "./Clearance/Clearance";
import Men from "./Men/Men";
import Women from "./Women/Women";
import React from "react";
import HomePage from "../Pages/HomePage/HomePage.jsx"
import { Admin } from "../Components/Admin/Admin";
import Edit from "../Components/Admin/Edit";
import SingleProduct from "./SingleProductPage/SingleProduct.jsx";

const MainRoutes = () => {
    return (
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/clearance" element={<Clearance />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/women/:id" element={<SingleProduct />} />
        </Routes>
      </div>
    );
};

export default MainRoutes;
