import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { FaFacebook } from "react-icons/fa";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    Button,
    Select,
    Checkbox,
    useToast,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const initialState = {
    email: "",
    password: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "email": {
            return { ...state, email: action.payload };
        }
        case "password": {
            return { ...state, password: action.payload };
        }
        case "reset": {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

const Signup = () => {
    const toast = useToast();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const [userData, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.email !== "" && userData.password !== "") {
            localStorage.setItem("userData", JSON.stringify(userData));
            localStorage.setItem("isAuth", JSON.stringify(false));

            setFormData(userData);
            toast({
                title: "Registration Successful",
                description: "You are redirected to login page.",
                status: "success",
                position: "top",
                duration: 2500,
                isClosable: true,
            });
            dispatch({ type: "reset" });
            navigate("/login");
            window.location.reload();
        } else {
            toast({
                title: "Details Missing",
                description: "Please fill your details",
                status: "warning",
                duration: 2500,
                isClosable: true,
                position: "bottom-right",
            });
        }
    };

    return (
        <div className="sign-main">
            <div className="sign-left">
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left">
                                    <strong className="sign-strong">
                                        ACCOUNT SETTING
                                    </strong>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className="sign-p" pb={4}>
                            <p title="Create Account">Create Account</p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left">
                                    <strong className="sign-strong">
                                        SHOP CONFIDENTLY
                                    </strong>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className="sign-p" pb={4}>
                            <p title="Privacy Policy">Privacy Policy</p>
                            <p title="Secure Shopping">Secure Shopping</p>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <div className="service-chart">
                    <h3>NEED HELP?</h3>
                    <div className="chart-one">
                        <h3>LIVE CHAT</h3>
                        <p>9 AM to 11 PM EST</p>
                        <p>7 Days a Week</p>
                        <h4>Call Us</h4>
                    </div>
                    <div className="chart-two">
                        <h3>CALL TODAY TOLL FREE</h3>
                        <p>Available 8 AM to 2 PM EST</p>
                        <p>1-877-289-2376</p>
                    </div>
                </div>
            </div>
            <div className="sign-right">
                <div className="sign-form">
                    <h1>Create an Account</h1>
                    <form>
                        <FormControl>
                            <hr style={{ margin: "20px auto" }} />
                            <h2 className="name-tag">Name :</h2>
                            <hr style={{ margin: "20px auto" }} />
                            {/*
                            <FormLabel
                                style={{
                                    margin: "15px",
                                    fontWeight: "bold",
                                }}></FormLabel> */}
                            <Input
                                type="text"
                                placeholder="Full Name"
                                style={{
                                    outlineWidth: "1px",
                                    borderRadius: "0px",
                                    border: "1px solid gray",
                                }}
                                // onChange={handleChange}
                            />
                            <hr style={{ margin: "20px auto" }} />
                            <FormLabel
                                style={{
                                    margin: "15px auto",
                                    fontWeight: "bold",
                                }}>
                                Gender
                            </FormLabel>

                            <Select
                                placeholder="Select Option"
                                // onChange={handleChange}
                                style={{
                                    outlineWidth: "1px",
                                    borderRadius: "0px",
                                    border: "1px solid gray",
                                }}>
                                <option value="male">Male </option>
                                <option value="female">Female </option>
                            </Select>
                            <hr style={{ margin: "20px auto" }} />
                            <FormLabel
                                style={{
                                    margin: "15px auto",
                                    fontWeight: "bold",
                                }}>
                                Email address
                            </FormLabel>
                            <Input
                                type="email"
                                placeholder="Email Address"
                                value={userData.email}
                                onChange={(e) =>
                                    dispatch({
                                        type: "email",
                                        payload: e.target.value,
                                    })
                                }
                                style={{
                                    outlineWidth: "1px",
                                    borderRadius: "0px",
                                    border: "1px solid gray",
                                }}
                            />
                            <FormHelperText>
                                We'll never share your email.
                            </FormHelperText>
                            <hr style={{ margin: "20px auto" }} />
                            <FormLabel
                                style={{
                                    margin: "15px auto",
                                    fontWeight: "bold",
                                }}>
                                Phone Number
                            </FormLabel>

                            <InputGroup>
                                <InputLeftAddon children="+91" />
                                <Input
                                    type="tel"
                                    placeholder="phone number"
                                    style={{
                                        outlineWidth: "1px",
                                        borderRadius: "0px",
                                        border: "1px solid gray",
                                    }}
                                    // onChange={handleChange}
                                />
                            </InputGroup>
                            <hr style={{ margin: "20px auto" }} />
                            <FormLabel
                                style={{
                                    margin: "15px auto",
                                    fontWeight: "bold",
                                }}>
                                Password
                            </FormLabel>
                            <InputGroup size="md">
                                <Input
                                    pr="4.5rem"
                                    type={show ? "text" : "password"}
                                    placeholder="Enter password"
                                    style={{
                                        outlineWidth: "1px",
                                        borderRadius: "0px",
                                        border: "1px solid gray",
                                    }}
                                    value={userData.password}
                                    onChange={(e) =>
                                        dispatch({
                                            type: "password",
                                            payload: e.target.value,
                                        })
                                    }
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleClick}>
                                        {show ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormHelperText>
                                Your password is *** protected
                            </FormHelperText>
                            <hr style={{ margin: "20px auto" }} />
                            <Checkbox
                                style={{
                                    margin: "15px auto",
                                }}
                                sx={{
                                    "@media (max-width: 767px)": {
                                        w: "100%",
                                        display: "block",
                                    },
                                }}
                                required>
                                <span className="req-check">
                                    Please Add Me To Aerowear's Email List.
                                    Aerowear Does Not Share Or Sell Personal
                                    Info.
                                </span>
                            </Checkbox>
                            <Button
                                rightIcon={<ArrowForwardIcon />}
                                style={{
                                    background:
                                        "linear-gradient(45deg, rgba(146,175,238,1) 0%, rgba(23,39,74,1) 100%)",
                                    color: "white",
                                    transition: "all .5s ease-in-out",
                                    margin: "auto",
                                }}
                                variant="solid"
                                onClick={handleSubmit}
                                _hover={{
                                    background:
                                        "linear-gradient(45deg, rgba(23,39,74,1) 0%, rgba(146,175,238,1) 100%)",
                                    paddingLeft: "40px",
                                    paddingRight: "40px",
                                }}>
                                Sign up
                            </Button>
                        </FormControl>
                    </form>
                </div>
                <div className="connect-account">
                    <hr style={{ margin: "20px auto" }} />
                    <h2>Sign up With Facebook</h2>
                    <hr style={{ margin: "20px auto" }} />

                    <p>
                        Register quickly and easily with your facebook account.
                        You won't have to remember an extra user name or
                        password
                    </p>
                    <Button
                        style={{ margin: "20px auto" }}
                        colorScheme="facebook"
                        leftIcon={<FaFacebook />}>
                        Facebook
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
