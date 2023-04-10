import { useToast } from '@chakra-ui/react';
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';



let isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
console.log("privateRoute",isAuth)

const PrivateRoute = ({ children }) => {
    const toast = useToast();
    const location = useLocation();
    if (!isAuth) {
        toast({
            title: "Plese Login First",
            description: "",
            status: "success",
            duration: 2500,
            isClosable: true,
            position: "top",
        });
        return <Navigate to="/login" replace state={location.pathname} />
    }
    return children;

}

export default PrivateRoute