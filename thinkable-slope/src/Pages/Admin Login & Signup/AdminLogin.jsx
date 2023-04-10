import React, { useReducer, useState } from "react";
import style from "./AdminLogin.css";
import {
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

let data = JSON.parse(localStorage.getItem("adminData")) || [];

const AdminLogin = () => {
    // const [show, setShow] = React.useState(false);
    // const handleClick = () => setShow(!show);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const toast = useToast();

    const initialState = {
        email: "admin@gmail.com",
        password: "12345",
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

    const handleRegister = () => {
        navigate("/adminsignup");
    };

    /* <----admin Credential---->*/
    let x = "admin@gmail.com";
    let y = "12345";
    /* <----admin Credential---->*/

    const [adminData, dispatch] = useReducer(reducer, initialState);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            console.log("34", data);

            if (x === email && y === password) {
                localStorage.setItem("adminData", JSON.stringify(adminData));
                localStorage.setItem("isAuthadmin", JSON.stringify(true));

                toast({
                    title: "Login Successful",
                    description: "",
                    status: "success",
                    duration: 2500,
                    isClosable: true,
                    position: "top",
                });
                navigate("/admin");
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

    return (
        <Stack
            minH={"50vh"}
            pt={"40px"}
            direction={{ base: "column", md: "row" }}>
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={4} w={"full"} maxW={"md"}>
                    <Heading fontSize={"2xl"}>
                        SIGN IN TO YOUR ADMIN ACCOUNT
                    </Heading>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: "column", sm: "row" }}
                            align={"start"}
                            justify={"space-between"}>
                            <Checkbox>Remember me</Checkbox>
                            <Link color={"blue.500"}>Forgot password?</Link>
                        </Stack>
                        <button onClick={handleSubmit} className="adminSignin">
                            Sign in
                        </button>
                        <Stack
                            direction={{ base: "column", sm: "row" }}
                            align={"center"}
                            justify={"center"}
                            spacing={6}>
                            <p>OR</p>
                        </Stack>
                        <button
                            onClick={handleRegister}
                            className="adminRegister">
                            Create Account Now
                        </button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={"Login Image"}
                    objectFit={"cover"}
                    src={
                        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
                    }
                />
            </Flex>
        </Stack>
    );
};

export default AdminLogin;
