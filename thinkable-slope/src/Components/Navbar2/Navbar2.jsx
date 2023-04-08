import styles from "./Navbar2.module.css";
import style from "../Navbar/Navbar.css";
import { Badge, InputGroup, InputRightElement, Tooltip, VStack } from "@chakra-ui/react";
import { Button, Input } from "@mui/material";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar2 = () => {
    const[value,setValue]=useState("")
    return (
        <>
            <div className={styles.Navbar2_maindiv}>

                <p>Tops</p>
                <p>Bottoms</p>
                <p>Dresses + Rompers</p>
                <p>Hoodies + Sweats</p>
                <p>Loungewear</p>

                
            </div>
        </>
    );
};

export default Navbar2;
