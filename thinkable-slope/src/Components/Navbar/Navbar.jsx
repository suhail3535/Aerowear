import React from "react";
import style from "./Navbar.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import { RxHamburgerMenu } from "react-icons/rx";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import { Link, Navigate, useNavigate } from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    Tooltip,
    VStack,
    InputGroup,
    InputRightElement,
    Button,
    Badge,
} from "@chakra-ui/react";
import {} from "@mui/material";
import { SearchIcon } from "@chakra-ui/icons";
import { shallowEqual, useSelector } from "react-redux";

let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let userReg = JSON.parse(localStorage.getItem("userData")) || [];
let isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
let admin = JSON.parse(localStorage.getItem("adminData")) || [];
let isAuthadmin = JSON.parse(localStorage.getItem("isAuthadmin")) || false;
console.log(admin);
console.log(isAuthadmin);
const Navbar = () => {
    const navigate = useNavigate();
    const openLink = (url) => {
        window.open(url);
    };
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { products } = useSelector((store) => {
        return {
            products: store.CartReducer.products,
            isLoading: store.CartReducer.isLoading,
            isError: store.CartReducer.isError,
        };
    }, shallowEqual);

    const handlelogout = () => {
        window.localStorage.clear();
        window.location.reload();
        navigate("/");
    };
    const handlelogoutAdmin = () => {
        window.localStorage.clear();

        window.location.reload();
navigate("/");
    };
    return (
        <div>
            {/* ---PreNavBar--- */}

            <div className="pre-header">
                <div className="pre-all">
                    <div className="pre-one">
                        <NavigateBeforeRoundedIcon />
                    </div>
                    <div className="pre-two">
                        <p>
                            Jeans Buy 1, Get 1 Free + Free Shiping
                            <a href="#0" className="pj6-color-inherit">
                                Women
                            </a>
                            <a href="#0" className="pj6-color-inherit">
                                Men
                            </a>
                        </p>
                    </div>
                    <div className="pre-three">
                        <NavigateNextRoundedIcon />
                    </div>
                </div>
            </div>

            {/* ---NavBar--- */}

            <div id="nav-menu" className="navbar">
                <div className="wrapper">
                    <div className="wrapperLeft">
                        <div>
                            <Tooltip
                                hasArrow
                                label="Women"
                                bg="gray.300"
                                color="black">
                                <Link
                                    to="/women"
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="nav-link Women">
                                    Women
                                </Link>
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip
                                hasArrow
                                label="Men"
                                bg="gray.300"
                                color="black">
                                <Link
                                    to="/men"
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="nav-link Men">
                                    Men
                                </Link>
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip
                                hasArrow
                                label="Clearance"
                                bg="gray.300"
                                color="black">
                                <Link
                                    to="/clearance"
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="nav-link Clearance">
                                    Clearance
                                </Link>
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip
                                hasArrow
                                label="Jeans"
                                bg="gray.300"
                                color="black">
                                <Link
                                    to="/"
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="nav-link Jeans">
                                    Jeans
                                </Link>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="wrapperRight">
                        <Tooltip
                            hasArrow
                            label="Home"
                            bg="gray.300"
                            color="black">
                            <Link
                                to="/"
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "./Images/Nav_logo.png"
                                    }
                                    alt="icon"
                                />
                            </Link>
                        </Tooltip>
                    </div>
                    <div className="wrapperProfile">
                        <Tooltip
                            hasArrow
                            label="Search"
                            bg="gray.300"
                            color="black">
                            <VStack></VStack>
                        </Tooltip>
                        <div className="dropdown-menu">
                            <button className="hover-account">
                                <Tooltip
                                    hasArrow
                                    label="Account"
                                    bg="gray.300"
                                    color="black">
                                    <PersonOutlineOutlinedIcon />
                                </Tooltip>
                                {isAuth == true ? userReg.email : ""}
                            </button>
                            {isAuth === false ? (
                                <ul className="all-log">
                                    <li className="log">
                                        <Link
                                            to="/login"
                                            smooth={true}
                                            offset={-100}
                                            duration={500}>
                                            Log in
                                            <LoginOutlinedIcon
                                                style={{
                                                    paddingTop: "10px",
                                                }}
                                            />
                                        </Link>
                                    </li>
                                    <li className="reg">
                                        <Link
                                            to="/signup"
                                            smooth={true}
                                            offset={-100}
                                            duration={500}>
                                            Register Here
                                            <CreateOutlinedIcon
                                                style={{
                                                    paddingTop: "10px",
                                                }}
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            ) : (
                                <ul onClick={handlelogout} className="all-log">
                                    <li className="log">Logout</li>
                                </ul>
                            )}
                        </div>
                        <div className="navCart">
                            <Tooltip
                                hasArrow
                                label="Cart"
                                bg="gray.300"
                                color="black">
                                <Link
                                    to="/cart"
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="nav-link Women">
                                    <LocalMallOutlinedIcon />
                                    <Badge
                                        borderRadius={"8px"}
                                        variant="subtle"
                                        colorScheme="green">
                                        {products.length !== 0
                                            ? products.length
                                            : ""}
                                    </Badge>
                                </Link>
                            </Tooltip>
                        </div>
                        <div className="navAdmin">
                            <button className="hover-account">
                                <Tooltip
                                    hasArrow
                                    label="Admin"
                                    bg="gray.300"
                                    color="black">
                                    <AdminPanelSettingsOutlinedIcon />
                                </Tooltip>
                                {isAuthadmin === true ? admin.email : ""}
                            </button>
                            {isAuthadmin === true ? (
                                <ul className="all-log">
                                    <ul
                                        onClick={handlelogoutAdmin}
                                        className="all-log">
                                        <li className="log">
                                            <Link
                                                to="/"
                                                smooth={true}
                                                offset={-100}
                                                duration={500}
                                                className="nav-link ">
                                                 LogOut
                                            </Link>
                                        </li>
                                    </ul>
                                </ul>
                            ) : (
                                <ul
                                    
                                    className="all-log">
                                    <li className="log">
                                        <Link
                                            to="/adminlogin"
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                            className="nav-link ">
                                            Admin Login
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="responce">
                        <RxHamburgerMenu onClick={onOpen} />
                        <Drawer
                            isOpen={isOpen}
                            placement="right"
                            onClose={onClose}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerBody marginTop={"30px"}>
                                    <div className="drawerbody">
                                        <div>
                                            <Link
                                                to="home"
                                                smooth={true}
                                                offset={-100}
                                                duration={500}
                                                onClick={onClose}>
                                                home
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                to="women"
                                                smooth={true}
                                                offset={-79}
                                                duration={500}
                                                onClick={onClose}>
                                                women
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                to="men"
                                                smooth={true}
                                                offset={-79}
                                                duration={500}
                                                onClick={onClose}>
                                                men
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                to="clearence"
                                                smooth={true}
                                                offset={-79}
                                                duration={500}
                                                onClick={onClose}>
                                                clearence
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                to=""
                                                smooth={true}
                                                offset={-79}
                                                duration={500}
                                                onClick={onClose}></Link>
                                        </div>
                                        <div></div>
                                    </div>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>

            {/* ---PostNavBar--- */}

            <div className="post-nav">
                <div className="post-all">
                    <div className="post-two">
                        <p>
                            Over the last few weeks, we've implemented extra
                            precautionary measures in our warehouse to ensure
                            the health and <br /> safety of our customers and
                            associates. Because of this your shipment may
                            experience delays. Thank you for your patience and
                            understanding.
                        </p>
                    </div>
                    <a href="#0" className="pj6-color-inherit">
                        Learn More and Stay Safe
                    </a>
                    <div className="post-three"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
