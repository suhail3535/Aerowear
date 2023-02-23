import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.css";

let userReg = JSON.parse(localStorage.getItem("userData"));

const Login = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (email !== "" && password !== "") {
            if (userReg.email == email && userReg.password == password) {
              alert("successfull");
              navigate ("/");
            } else {
                alert("Wrong Credentials");
            }
        } else {
            alert("Please fill details");
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
                                    borderRadius: "0px",
                                    border: "1px solid gray",
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
                            }}
                            >
                            <span className="req-check">Forgot Password</span>
                        </Checkbox>
                        <button
                            rightIcon={<ArrowForwardIcon />}
                            style={{
                                background:
                                    "linear-gradient(45deg, rgba(146,175,238,1) 0%, rgba(23,39,74,1) 100%)",
                                color: "white",
                                transition: "all .5s ease-in-out",
                                margin: "auto",
                            }}
                            onClick={handleSubmit}
                            _hover={{
                                background:
                                    "linear-gradient(45deg, rgba(23,39,74,1) 0%, rgba(146,175,238,1) 100%)",
                                paddingLeft: "40px",
                                paddingRight: "40px",
                            }}>
                            Log in
                        </button>
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
                <button onClick={handleCreate} className="order-btn">
                    Create Account Now
                </button>

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
                            placeholder="ORDER NUMBER"
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
                            placeholder="ORDER EMAIL"
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
                            placeholder="BILLING ZIP CODE"
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
