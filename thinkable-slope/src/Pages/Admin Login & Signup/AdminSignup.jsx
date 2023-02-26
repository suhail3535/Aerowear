import React, { useReducer } from "react";
import style from "./AdminSignup.css";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
    Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

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

const AdminSignup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [userData, dispatch] = useReducer(reducer, initialState);
    const handleLogin = () => {
        navigate("/adminlogin");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.email !== "" && userData.password !== "") {
            localStorage.setItem("adminData", JSON.stringify(userData));
            setFormData(userData);
            console.log("64", userData);
            toast({
                title: "Registration Successful",
                description: "You are redirected to login page.",
                status: "success",
                duration: 2500,
                isClosable: true,
                position: "bottom-right",
            });
            dispatch({ type: "reset" });
            navigate("/adminlogin");
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
        <Stack
            minH={"50vh"}
            pt={"40px"}
            direction={{ base: "column", md: "row" }}>
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={4} maxW={"md"}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"} textAlign={"center"}>
                            Sign up
                        </Heading>
                        <Text fontSize={"lg"} color={"gray.600"}>
                            Be a admin just by creating a new account
                        </Text>
                    </Stack>
                    <Box
                        border={"1px solid #17274a"}
                        borderRadius={"8px"}
                        // rounded={"lg"}
                        boxShadow={"md"}
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input type="text" />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type="text" />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    value={userData.email}
                                    onChange={(e) =>
                                        dispatch({
                                            type: "email",
                                            payload: e.target.value,
                                        })
                                    }
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        value={userData.password}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "password",
                                                payload: e.target.value,
                                            })
                                        }
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                    />
                                    <InputRightElement h={"full"}>
                                        <Button
                                            variant={"ghost"}
                                            onClick={() =>
                                                setShowPassword(
                                                    (showPassword) =>
                                                        !showPassword
                                                )
                                            }>
                                            {showPassword ? (
                                                <ViewIcon />
                                            ) : (
                                                <ViewOffIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <button
                                    onClick={handleSubmit}
                                    className="adminLogin">
                                    Sign up
                                </button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={"center"}>
                                    Already a user?{" "}
                                    <Link
                                        onClick={handleLogin}
                                        color={"blue.400"}>
                                        Login
                                    </Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={"Login Image"}
                    objectFit={"cover"}
                    src={
                        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                    }
                />
            </Flex>
        </Stack>
    );
};

export default AdminSignup;
