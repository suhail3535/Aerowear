import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

let userReg = JSON.parse(localStorage.getItem("userData")) || [];

const Login = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            if (userReg.email === email && userReg.password === password) {
                localStorage.setItem("isAuth", true);

                toast({
                    title: "Login Successful",
                    description: "",
                    status: "success",
                    duration: 2500,
                    isClosable: true,
                    position: "top",
                });
                navigate(location.state, { replace: true });
                navigate("/cart");
                window.location.reload();
            } else {
                toast({
                    title: "Wrong Credentials",
                    description: "Please check your details",
                    status: "error",
                    duration: 2500,
                    isClosable: true,
                    position: "bottom-right",
                });
            }
        } else {
            toast({
                title: "Details Missing",
                description: "Please fill all details",
                status: "warning",
                duration: 2500,
                isClosable: true,
                position: "bottom-right",
            });
        }
    };

    const handleCreate = () => {};
    return (
        <div className="login-main">
            <div className="log-form">
                <h1>Returning Customers</h1>
                <h4>
                    If you are a registered user, please enter your email and
                    password.
                </h4>
                <form>
                    <FormControl>
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                outlineWidth: "1px",
                                borderRadius: "0px",
                                border: "1px solid gray",
                            }}
                        />

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
                                }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                        <Checkbox
                            style={{
                                margin: "15px auto",
                            }}>
                            Remember me
                        </Checkbox>
                        <br />
                        <button onClick={handleSubmit} className="log-btn">
                            Log in <ArrowForwardIcon />
                        </button>

                        <h4>Or log in using your account from</h4>
                        <Link to={"/signup"}>
                            <Button
                                style={{
                                    border: "1.5px solid #385898",
                                    // margin: "20px auto",
                                    width: "60%",
                                    borderRadius: "0px",
                                    transition: "all .5s ease-in-out",
                                }}
                                _hover={{
                                    backgroundColor: "white",
                                    color: "#17274a",
                                    border: "1.5px solid #17274a",
                                }}
                                colorScheme="facebook"
                                leftIcon={<FaFacebook />}>
                                Facebook
                            </Button>
                        </Link>
                        <p className="policy-line">
                            Please see our <Link> Privacy Policy </Link> .
                            California residents, see our
                            <Link> California Privacy Notice</Link> and
                            <Link> Do Not Sell My Personal Information </Link>
                            page.
                        </p>
                    </FormControl>
                </form>
            </div>
            <div className="hr"></div>
            <div className="order-account">
                <h1>New Customers</h1>
                <h4>
                    Creating an account is easy. Just fill out the form below
                    and enjoy the benefits of being a registered customer.
                </h4>
                <Link to={"/signup"}>
                    <button onClick={handleCreate} className="order-btn">
                        Create Account Now
                    </button>
                </Link>

                <h1>Track Your Order</h1>
                <h4>See your order even if you are not a registered user.</h4>
                <form>
                    <FormControl>
                        <FormLabel
                            style={{
                                margin: "15px auto",
                                fontWeight: "bold",
                            }}>
                            Order Number
                        </FormLabel>
                        <Input
                            type="text"
                            placeholder="ORDER NUMBER*"
                            value={""}
                            onChange={""}
                            style={{
                                outlineWidth: "1px",
                                borderRadius: "0px",
                                border: "1px solid gray",
                            }}
                        />
                        <FormLabel
                            style={{
                                margin: "15px auto",
                                fontWeight: "bold",
                            }}>
                            Email
                        </FormLabel>
                        <Input
                            type="text"
                            placeholder="ORDER EMAIL*"
                            value={""}
                            onChange={""}
                            style={{
                                outlineWidth: "1px",
                                borderRadius: "0px",
                                border: "1px solid gray",
                            }}
                        />
                        <FormLabel
                            style={{
                                margin: "15px auto",
                                fontWeight: "bold",
                            }}>
                            Billing
                        </FormLabel>
                        <Input
                            type="text"
                            placeholder="BILLING ZIP CODE*"
                            value={""}
                            onChange={""}
                            style={{
                                outlineWidth: "1px",
                                borderRadius: "0px",
                                border: "1px solid gray",
                            }}
                        />
                    </FormControl>
                    <button className="order-btn">Check Status</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
