import { Routes, Route } from "react-router-dom";
import Clearance from "./Clearance/Clearance";
import Men from "./Men/Men";
import Women from "./Women/Women";
import React from "react";
import HomePage from "../Pages/HomePage/HomePage.jsx";
import Cart from "./Cartpage/Cart";
import { Admin } from "../Components/Admin/Admin";
import Edit from "../Components/Admin/Edit";
import SingleProduct from "./SingleProductPage/SingleProduct.jsx";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import AdminLogin from "./Admin Login & Signup/AdminLogin";
import AdminSignup from "./Admin Login & Signup/AdminSignup";
import Payment from "./Payment/Payment";
import PaymentMethod from "./Payment/PaymentMethod";
import OrderSuccessfull from "./Payment/OderSuccessfull";
import PrivateRoute from "./PrivateRoute";
import SingleProductMen from "./SingleProductPage/SingleProductMen.jsx";

const MainRoutes = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
                <Route path="/clearance" element={<Clearance />} />
                <Route path="/admin" element={ <Admin />} />
                <Route path="/cart" element={<PrivateRoute> <Cart /></PrivateRoute>} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/women/:id" element={<SingleProduct />} />
                <Route path="/men/:id" element={<SingleProductMen />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/adminsignup" element={<AdminSignup />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/paymentmethod" element={<PaymentMethod />} />
                <Route
                    path="/ordersuccessfull"
                    element={<OrderSuccessfull />}
                />
            </Routes>
        </div>
    );
};

export default MainRoutes;
