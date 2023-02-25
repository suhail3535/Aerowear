import React, { useEffect, useState } from "react";
import styles from "./admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Stack, Box, Heading } from "@chakra-ui/react";
import Swal from "sweetalert2";

import { getRequest, postRequest } from "../../Redux/AdminReducer/action";
import { store } from "../../Redux/store";
import NavAdmin from "./NavAdmin";
import AdminCard from "./AdminCard";
const initialState = {
  image: "",
  name: "",
  price: "",
  Rating: "",
};
export const  Admin= () => {
  const [data, setdata] = useState(initialState);
  // console.log(store);
  const newData = useSelector((store) => {
    return {
      women: store.AdminReducer.women,
      isLoading: store.isLoading,
      isError: store.isError,
    };
  });
  const { women, isLoading, isError } = newData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: name === "price"? +value : value};
    });
    // console.log(data)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRequest(data));
    setdata(initialState);
     Swal.fire("", "Product added!", "success");

  };
  // console.log(data)

  useEffect(() => {
    dispatch(getRequest());
  }, []);
  // console.log(women);
  return (
    <div>
    
      <Heading size="md" style={{textAlign:"center",color:"blue",padding:"10px"}}>Wecome Admin😎</Heading>
      <div id={styles.container}>
        <Box id={styles.first}>
          {women.map((ele) => {
            return (
              <div>
        
                <AdminCard key={ele.id} {...ele} />{" "}
              </div>
            );
          })}
        </Box>
        <Box id={styles.second}>
          <Heading id ={styles.heading} as={"h4"} size="md">Add Product</Heading>
          <form>
            <Stack spacing={4}>
              <Input
                type="url"
                name="image"
                value={data.image}
                onChange={handleChange}
                placeholder="image"
                size="md"
              />
              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="name"
                size="md"
              />
              <Input
                type="number"
                name="price"
                value={data.price}
                onChange={handleChange}
                placeholder="price"
                size="md"
              />
              <Input
                type="number"
                name="Rating"
                value={data.Rating}
                onChange={handleChange}
                placeholder="Rating"
                size="md"
              />

              <Button onClick={handleSubmit} id={styles.btn} colorScheme="blue">
                Add-Product
              </Button>
            </Stack>
          </form>
        </Box>
      </div>
    </div>
  );
};
