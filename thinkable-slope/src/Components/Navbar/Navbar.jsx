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
    DrawerFooter,
    DrawerHeader,
} from "@chakra-ui/react";
import {} from "@mui/material";
import { SearchIcon } from "@chakra-ui/icons";
import { shallowEqual, useSelector } from "react-redux";

let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let userReg = JSON.parse(localStorage.getItem("userData")) || [];
let isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
let admin = JSON.parse(localStorage.getItem("adminData")) || [];
let isAuthadmin = JSON.parse(localStorage.getItem("isAuthadmin")) || false;
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

            {/* <div className="pre-header">
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
            </div> */}

            {/* ---NavBar--- */}

            <div className="nav_root">
                <div className="main_navbar" top={0}>
                    <div className="nav_link">
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
                    <div className="nav_link">
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
                    <div className="nav_link">
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
                    <div className="nav_link">
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
                <div className="logo_head">
                    <Tooltip hasArrow label="Home" bg="gray.300" color="black">
                        <Link to="/" smooth={true} offset={-100} duration={500}>
                            <img
                                className="main_logo"
                                src={
                                    process.env.PUBLIC_URL +
                                    "./Images/Nav_logo.png"
                                }
                                alt="icon"
                            />
                        </Link>
                    </Tooltip>
                </div>

                <div className="head_icon">
                    <div className="nav_icon">
                        <VStack>
                            <Tooltip
                                hasArrow
                                label="Search"
                                bg="gray.300"
                                color="black">
                                <VStack>
                                    <InputGroup>
                                        <Input
                                            pr="1rem"
                                            variant="outline"
                                            focusBorderColor="gray"
                                            placeholder="Search"
                                            borderRadius="25px"
                                            _focusVisible={{
                                                BorderColor: "gray",
                                            }}
                                        />
                                        <InputRightElement width="4rem">
                                            <Button
                                                h={{
                                                    base: "1rem",
                                                    lg: "1.7rem",
                                                }}
                                                color="#17274a"
                                                bg={"white"}
                                                _hover={{
                                                    bg: "#ffffff",
                                                }}>
                                                <SearchIcon />
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </VStack>
                            </Tooltip>
                        </VStack>

                        <div className="dropdown-menu">
                            <button className="hover-account">
                                <Tooltip
                                    hasArrow
                                    label="Account"
                                    bg="gray.300"
                                    color="black">
                                    <PersonOutlineOutlinedIcon
                                        style={{ fontSize: "25px" }}
                                    />
                                </Tooltip>
                            </button>
                            <ul className="all-log">
                                {isAuth === false ? (
                                    <>
                                        <Button
                                            style={{
                                                width: "100%",
                                                borderTopRightRadius: "20px",
                                                borderTopLeftRadius: "20px",
                                                borderBottomRightRadius: "0px",
                                                borderBottomLeftRadius: "0px",
                                                transition:
                                                    "all .5s ease-in-out",
                                                textAlign: "left",
                                            }}
                                            bg={"white"}
                                            onClick={() => {
                                                navigate("/login");
                                            }}
                                            _hover={{
                                                backgroundColor: "#17274a",
                                                color: "white",
                                            }}>
                                            Login
                                            <LoginOutlinedIcon
                                                style={{
                                                    paddingTop: "10px",
                                                }}
                                            />
                                        </Button>
                                        <Button
                                            style={{
                                                width: "100%",
                                                borderTopRightRadius: "0px",
                                                borderTopLeftRadius: "0px",
                                                borderBottomRightRadius: "20px",
                                                borderBottomLeftRadius: "20px",
                                                transition:
                                                    "all .5s ease-in-out",
                                                textAlign: "left",
                                            }}
                                            bg={"white"}
                                            onClick={() => {
                                                navigate("/signup");
                                            }}
                                            _hover={{
                                                backgroundColor: "#17274a",
                                                color: "white",
                                            }}>
                                            Signup
                                            <CreateOutlinedIcon
                                                style={{
                                                    paddingTop: "10px",
                                                }}
                                            />
                                        </Button>
                                    </>
                                ) : (
                                    <Button
                                        style={{
                                            width: "100%",
                                            borderTopRightRadius: "20px",
                                            borderTopLeftRadius: "20px",
                                            borderBottomRightRadius: "20px",
                                            borderBottomLeftRadius: "20px",
                                            transition: "all .5s ease-in-out",
                                            textAlign: "left",
                                        }}
                                        onClick={handlelogout}
                                        bg={"white"}
                                        _hover={{
                                            backgroundColor: "black",
                                            color: "white",
                                        }}>
                                        Logout
                                    </Button>
                                )}
                            </ul>
                        </div>
                        <div className="navCart">
                            <Tooltip
                                hasArrow
                                label="Cart"
                                bg="gray.300"
                                color="black">
                                <Button
                                    h={{ base: "1rem", lg: "1.7rem" }}
                                    bg={"white"}
                                    onClick={() => {
                                        navigate("/cart");
                                    }}
                                    _hover={{
                                        bg: "#ffffff",
                                    }}>
                                    <LocalMallOutlinedIcon
                                        style={{ fontSize: "25px" }}
                                    />
                                    <Badge
                                        borderRadius={"8px"}
                                        variant="subtle"
                                        colorScheme="green">
                                        {products.length > 0 ? products : ""}
                                    </Badge>
                                </Button>
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
                            <ul className="all-log">
                                {isAuthadmin === true ? (
                                    <>
                                        <Button
                                            style={{
                                                width: "100%",
                                                borderTopRightRadius: "20px",
                                                borderTopLeftRadius: "20px",
                                                borderBottomRightRadius: "20px",
                                                borderBottomLeftRadius: "20px",
                                                transition:
                                                    "all .5s ease-in-out",
                                                textAlign: "left",
                                            }}
                                            bg={"white"}
                                            onClick={handlelogoutAdmin}
                                            _hover={{
                                                backgroundColor: "#17274a",
                                                color: "white",
                                            }}>
                                            Logout
                                        </Button>
                                    </>
                                ) : (
                                    <Button
                                        style={{
                                            width: "100%",
                                            borderTopRightRadius: "20px",
                                            borderTopLeftRadius: "20px",
                                            borderBottomRightRadius: "20px",
                                            borderBottomLeftRadius: "20px",
                                            transition: "all .5s ease-in-out",
                                            textAlign: "left",
                                        }}
                                        onClick={() => {
                                            navigate("/adminlogin");
                                        }}
                                        bg={"white"}
                                        _hover={{
                                            backgroundColor: "#17274a",
                                            color: "white",
                                        }}>
                                        Admin Login
                                    </Button>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="responce">
                    <RxHamburgerMenu
                        onClick={onOpen}
                        style={{ margin: "auto" }}
                    />
                    <Drawer
                        style={{ borderRadius: "8px" }}
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}>
                        <DrawerOverlay style={{ borderRadius: "8px" }} />
                        <DrawerContent style={{ borderRadius: "8px" }}>
                            <DrawerCloseButton />
                            <DrawerHeader>GadgetGalaxy</DrawerHeader>
                            <DrawerBody marginTop={"30px"}>
                                <div className="drawerbody">
                                    <div className="nav_link">
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
                                    <div className="nav_link">
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
                                    <div className="nav_link">
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
                                    <div className="nav_link">
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

                                    <div className="nav_icon">
                                        <VStack>
                                            <Tooltip
                                                hasArrow
                                                label="Search"
                                                bg="gray.300"
                                                color="black">
                                                <VStack>
                                                    <Button
                                                        h={{
                                                            base: "1rem",
                                                            lg: "1.7rem",
                                                        }}
                                                        color="#17274a"
                                                        bg={"white"}
                                                        _hover={{
                                                            bg: "#ffffff",
                                                        }}>
                                                        <SearchIcon />
                                                    </Button>
                                                </VStack>
                                            </Tooltip>
                                        </VStack>

                                        <div className="dropdown-menu">
                                            <button className="hover-account">
                                                <Tooltip
                                                    hasArrow
                                                    label="Account"
                                                    bg="gray.300"
                                                    color="black">
                                                    <PersonOutlineOutlinedIcon
                                                        style={{
                                                            fontSize: "25px",
                                                        }}
                                                    />
                                                </Tooltip>
                                            </button>
                                            <ul className="all-log">
                                                {isAuth === false ? (
                                                    <>
                                                        <Button
                                                            style={{
                                                                width: "100%",
                                                                borderTopRightRadius:
                                                                    "20px",
                                                                borderTopLeftRadius:
                                                                    "20px",
                                                                borderBottomRightRadius:
                                                                    "0px",
                                                                borderBottomLeftRadius:
                                                                    "0px",
                                                                transition:
                                                                    "all .5s ease-in-out",
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                            bg={"white"}
                                                            onClick={() => {
                                                                navigate(
                                                                    "/login"
                                                                );
                                                            }}
                                                            _hover={{
                                                                backgroundColor:
                                                                    "#17274a",
                                                                color: "white",
                                                            }}>
                                                            Login
                                                            <LoginOutlinedIcon
                                                                style={{
                                                                    paddingTop:
                                                                        "10px",
                                                                }}
                                                            />
                                                        </Button>
                                                        <Button
                                                            style={{
                                                                width: "100%",
                                                                borderTopRightRadius:
                                                                    "0px",
                                                                borderTopLeftRadius:
                                                                    "0px",
                                                                borderBottomRightRadius:
                                                                    "20px",
                                                                borderBottomLeftRadius:
                                                                    "20px",
                                                                transition:
                                                                    "all .5s ease-in-out",
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                            bg={"white"}
                                                            onClick={() => {
                                                                navigate(
                                                                    "/signup"
                                                                );
                                                            }}
                                                            _hover={{
                                                                backgroundColor:
                                                                    "#17274a",
                                                                color: "white",
                                                            }}>
                                                            Signup
                                                            <CreateOutlinedIcon
                                                                style={{
                                                                    paddingTop:
                                                                        "10px",
                                                                }}
                                                            />
                                                        </Button>
                                                    </>
                                                ) : (
                                                    <Button
                                                        style={{
                                                            width: "100%",
                                                            borderTopRightRadius:
                                                                "20px",
                                                            borderTopLeftRadius:
                                                                "20px",
                                                            borderBottomRightRadius:
                                                                "20px",
                                                            borderBottomLeftRadius:
                                                                "20px",
                                                            transition:
                                                                "all .5s ease-in-out",
                                                            textAlign: "left",
                                                        }}
                                                        onClick={handlelogout}
                                                        bg={"white"}
                                                        _hover={{
                                                            backgroundColor:
                                                                "black",
                                                            color: "white",
                                                        }}>
                                                        Logout
                                                    </Button>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="navCart">
                                            <Tooltip
                                                hasArrow
                                                label="Cart"
                                                bg="gray.300"
                                                color="black">
                                                <Button
                                                    style={{
                                                        width: "100%",
                                                        marginBottom: "10px",
                                                        textAlign: "left",
                                                    }}
                                                    bg={"white"}
                                                    onClick={() => {
                                                        navigate("/cart");
                                                    }}
                                                    _hover={{
                                                        bg: "#ffffff",
                                                    }}>
                                                    <LocalMallOutlinedIcon
                                                        style={{
                                                            fontSize: "25px",
                                                        }}
                                                    />
                                                    <Badge
                                                        borderRadius={"8px"}
                                                        variant="subtle"
                                                        colorScheme="green">
                                                        {products.length > 0
                                                            ? products
                                                            : ""}
                                                    </Badge>
                                                </Button>
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
                                                {isAuthadmin === true
                                                    ? admin.email
                                                    : ""}
                                            </button>
                                            <ul className="all-log">
                                                {isAuthadmin === true ? (
                                                    <>
                                                        <Button
                                                            style={{
                                                                width: "100%",
                                                                borderTopRightRadius:
                                                                    "20px",
                                                                borderTopLeftRadius:
                                                                    "20px",
                                                                borderBottomRightRadius:
                                                                    "20px",
                                                                borderBottomLeftRadius:
                                                                    "20px",
                                                                transition:
                                                                    "all .5s ease-in-out",
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                            bg={"white"}
                                                            onClick={
                                                                handlelogoutAdmin
                                                            }
                                                            _hover={{
                                                                backgroundColor:
                                                                    "#17274a",
                                                                color: "white",
                                                            }}>
                                                            Logout
                                                        </Button>
                                                    </>
                                                ) : (
                                                    <Button
                                                        style={{
                                                            width: "100%",
                                                            borderTopRightRadius:
                                                                "20px",
                                                            borderTopLeftRadius:
                                                                "20px",
                                                            borderBottomRightRadius:
                                                                "20px",
                                                            borderBottomLeftRadius:
                                                                "20px",
                                                            transition:
                                                                "all .5s ease-in-out",
                                                            textAlign: "left",
                                                        }}
                                                        onClick={() => {
                                                            navigate(
                                                                "/adminlogin"
                                                            );
                                                        }}
                                                        bg={"white"}
                                                        _hover={{
                                                            backgroundColor:
                                                                "#17274a",
                                                            color: "white",
                                                        }}>
                                                        Admin Login
                                                    </Button>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </DrawerBody>
                            <DrawerFooter
                                borderTopWidth="1px"
                                style={{ borderRadius: "8px" }}>
                                <p>© 2023 Aerowear. All Rights Reserved.</p>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>

            {/* ---PostNavBar--- */}

            {/* <div className="post-nav">
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
            </div> */}
        </div>
    );
};

export default Navbar;
