import { Button } from "@chakra-ui/react";
import styles from "./Payment.module.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deletedataAdd, getRequestAddress } from "../../Redux/UserReducer/action";


const PaymentCard = ({
  id,
  address1,
  firstname,
  lastname,
  city,
  phone,
  zipcode,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // console.log(id)
    dispatch(deletedataAdd(id)).then(() => dispatch(getRequestAddress()));
  
    Swal.fire("", "removed !", "success");
  };

      useEffect(() => {
      dispatch(getRequestAddress());
  },[])

  return (
    <div id={styles.card}>
      <div>
        <h1>
          {firstname} {lastname}
        </h1>
        <p>{address1}</p>
        <p>{city}</p>
        <p>{phone}</p>
        <p>{zipcode}</p>
        <input type="checkbox" />
        <div>
   
          <button
            onClick={() => handleDelete(id)}
            style={{ width: "100px",backgroundColor: "yellow",borderRadius:"10px" }}
          
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
