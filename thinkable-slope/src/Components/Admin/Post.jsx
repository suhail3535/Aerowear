import React, { useState } from "react";
import styles from "./admin.module.css";
import {  useDispatch } from "react-redux";
import { Input, Button, Stack, Box, FormControl } from "@chakra-ui/react";
import { postDataRequest } from "../../Redux/AppReducer/Action";
const initialState = {
    image: "",
    name: "",
    Price: "",
    Rating: "",
   

}
const Post = () => {
const[data,setdata]=useState(initialState)
const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target
        setdata((prev) => {
            return{...prev,[name]:name==="Price" ? +value:value}
        })
        // console.log(data)
}

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postDataRequest(data));
        setdata(initialState)
}
   
    return (
      <div id={styles.container}>
        <Box id={styles.first}> </Box>
        <Box id={styles.second}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <FormControl>
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
                name="Price"
                value={data.Price}
                onChange={handleChange}
                placeholder="price"
                size="md"
              />
              <Input
                type="text"
                name="Rating"
                value={data.Rating}
                onChange={handleChange}
                placeholder="Rating"
                size="md"
              />

              <Button id={styles.btn} colorScheme="blue">
                Button
              </Button>
            </FormControl>
          </form>
        </Box>
      </div>
    );
};

export default Post;
