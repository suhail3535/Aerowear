import { Button } from '@chakra-ui/react';
import styles from "./admin.module.css"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deletedata, getRequest } from '../../Redux/AdminReducer/action';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
const AdminCard = ({ id, image, name, price, Rating }) => {
    const dispatch = useDispatch()
    

    const handleDelete = (id) => {
        // console.log(id)
        dispatch(deletedata(id)).then(() =>
            dispatch(getRequest()));
        // window.location.reload(true);
  Swal.fire("", "Product deleted !", "success");

}

//     useEffect(() => {
//     dispatch(getRequest());
// },[])

  return (
    <div id={styles.card}>
      <div>
        <img
          style={{
            width: "70%",
            textAlign: "center",
            marginLeft: "50PX",
            padding: "5px",
          }}
          src={image}
          alt="title"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Title:{name} </h1>
        <p>Price:{price}</p>
        <p>Rating:{Rating}</p>
        <div id={styles.button}>
          <Link to={`/edit/${id}`}>
            <Button style={{ width: "60px" }} colorScheme="cyan">
              Edit
            </Button>
          </Link>
          <Button
            onClick={() => handleDelete(id)}
            style={{ width: "60px" }}
            colorScheme="red"
          >
            
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminCard