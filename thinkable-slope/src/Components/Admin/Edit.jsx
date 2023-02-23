import { Box, Button, Input, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editProduct } from '../../Redux/AdminReducer/action';
import styles from "./admin.module.css"
const Edit = () => {
  const { id } = useParams();
  const product = useSelector((store) => store.AdminReducer.women);
  const [data, setData] = useState("")
  const [title, setTitle] = useState([])
  const [image, setImage] = useState("")
  const[rating,setRating] = useState([])
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const newData = {
      price: data,
      name: title,
      image: image,
      Rating:rating
    };
    dispatch(editProduct(id, newData));
    setData("")
    setTitle("")
    setImage("")
    setRating("")
  }

  useEffect(() => {
    const productData = product.find((item) => item.id === +id)
    console.log(productData)
    productData && setData(productData.price);
    productData && setTitle(productData.name);
    productData && setImage(productData.image);
    productData && setRating(productData.Rating);




},[])

  return (
    <div>
      <Box id={styles.input}>
        <form>
          <Stack spacing={4}>
            <Input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="image"
              size="md"
            />
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="name"
              size="md"
            />
            <Input
              type="number"
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="price"
              size="md"
            />
            <Input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Rating"
              size="md"
            />

            <Button onClick={handleSubmit} colorScheme="blue">
              Add-Product
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
}

export default Edit