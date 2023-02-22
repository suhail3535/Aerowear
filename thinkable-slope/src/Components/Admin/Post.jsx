import React from "react";
import styles from "./admin.module.css";
import { Input, Button, Stack, Box } from "@chakra-ui/react";

const Post = () => {
  return (
    <div id={styles.container}>
     
      <Box id={styles.first}> </Box>
      <Box id={styles.second}>
        <form>
          <Stack spacing={3}>
            <Input type="url" placeholder="image" size="md" />
            <Input type="text" placeholder="name" size="md" />
            <Input type="number" placeholder="price" size="md" />
            <Input type="text" placeholder="category" size="md" />
          </Stack>
          <Button id={styles.btn} colorScheme="blue">
            Button
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Post;
