import React, { useState } from "react";
import style from "./Navbar.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import { RxHamburgerMenu } from "react-icons/rx";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import { Link } from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    Tooltip,
} from "@chakra-ui/react";
import {} from "@mui/material";

const Navbar = () => {
    const openLink = (url) => {
        window.open(url);
    };
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [iSOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!iSOpen);
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
                            <Link
                                to="/women"
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className="nav-link Women">
                                Women
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="/men"
                                smooth={true}
                                offset={-79}
                                duration={500}
                                className="nav-link Men">
                                Men
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="/payment"
                                smooth={true}
                                offset={-79}
                                duration={500}
                                className="nav-link Jeans">
                                Jeans
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="/clearance"
                                smooth={true}
                                offset={-79}
                                duration={500}
                                className="nav-link Clearance">
                                Clearance
                            </Link>
                        </div>
                    </div>
                    <div className="wrapperRight">
                        <Link to="/" smooth={true} offset={-100} duration={500}>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "./Images/Nav_logo.png"
                                }
                                alt="icon"
                            />
                        </Link>
                    </div>
                    <div className="wrapperProfile">
                        <Input
                            title="Search 🔍"
                            variant="outline"
                            placeholder="Search"
                            id="inputSearch"
                        />
                        <div className="dropdown-menu">
                            <button onClick={handleMenuClick}>
                                <Tooltip hasArrow label='Account' bg='gray.300' color='black'>
                                <PersonOutlineOutlinedIcon />
                                </Tooltip>
                            </button>
                            {iSOpen && (
                                <ul>
                                    <li>
                                        <Link
                                            to="/login"
                                            smooth={true}
                                            offset={-100}
                                            duration={500}>
                                            <Tooltip
                                                hasArrow
                                                label="Log in"
                                                bg="gray.300"
                                                color="black">
                                                Log in
                                                <LoginOutlinedIcon
                                                    style={{
                                                        paddingTop: "10px",
                                                    }}
                                                />
                                            </Tooltip>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/signup"
                                            smooth={true}
                                            offset={-100}
                                            duration={500}>
                                            <Tooltip
                                                hasArrow
                                                label="Register"
                                                bg="gray.300"
                                                color="black">
                                                Register Here
                                                <CreateOutlinedIcon
                                                    style={{
                                                        paddingTop: "10px",
                                                    }}
                                                />
                                            </Tooltip>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="navCart">
                            <Link
                                title="Cart"
                                to="/cart"
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className="nav-link Women">
                                <LocalMallOutlinedIcon />
                            </Link>
                        </div>
                        <div className="navAdmin">
                            <Link
                                title="Admin"
                                to="/admin"
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className="nav-link Women">
                                <AdminPanelSettingsOutlinedIcon />
                            </Link>
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
                                                Home
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                to="about"
                                                smooth={true}
                                                offset={-79}
                                                duration={500}
                                                onClick={onClose}>
                                                About
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                to="skills"
                                                smooth={true}
                                                offset={-79}
                                                duration={500}
                                                onClick={onClose}>
                                                Skills
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                to="projects"
                                                smooth={true}
                                                offset={-79}
                                                duration={500}
                                                onClick={onClose}>
                                                Projects
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                to="contact"
                                                smooth={true}
                                                offset={-79}
                                                duration={500}
                                                onClick={onClose}>
                                                Contact
                                            </Link>
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
