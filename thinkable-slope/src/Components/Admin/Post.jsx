import React from 'react'
import styles from "./admin.module.css"
import TextField from "@mui/material/TextField";
const Post = () => {
  return (
    <div id={styles.main}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <h1>post</h1>
      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField
        label="Filled success"
        variant="filled"
        color="success"
        focused
      />
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />
    </div>
  );
}

export default Post