import React, { useEffect, useState } from "react";
import styles from "./admin.module.css";
import {  useDispatch, useSelector } from "react-redux";
import { Input, Button, Stack, Box} from "@chakra-ui/react";

import { getRequest, postRequest } from "../../Redux/AdminReducer/action";
import { store } from "../../Redux/store";
import NavAdmin from "./NavAdmin";
const initialState = {
    image: "",
    name: "",
    Price: "",
    Rating: "",
   

}
const Post = () => {
    const [data, setdata] = useState(initialState)
  console.log(store)
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
        const { name, value } = e.target
        setdata((prev) => {
            return{...prev,[name]:name==="Price" ? +value:value}
        })
        // console.log(data)
}

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postRequest(data));
        setdata(initialState)
    }
    // console.log(data)
   

    useEffect(() => {
        dispatch(getRequest())
    }, [])
    console.log(women)
    return (
        <div>
            <NavAdmin />
            <h1>Wecome Admin😎</h1>
        <div id={styles.container}>
          <Box id={styles.first}>
            {women.map((ele) => {
              return (
                <div key={ele.id}>
                  <img style={{ width: "40%",padding :"20px" }} src={ele.image} alt="name" />
                  <h1 style={{ textAlign: "left" }}>Title:{ele.name}</h1>
                  <p style={{ textAlign: "left" }}>Price:${ele.price}</p>
                </div>
              );
            })}
          </Box>
          <Box id={styles.second}>
            <form>
              <Stack spacing={3}>
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

                <Button
                  onClick={handleSubmit}
                  id={styles.btn}
                  colorScheme="blue"
                >
                  Button
                </Button>
              </Stack>
            </form>
          </Box>
        </div>
      </div>
    );
};

export default Post;
