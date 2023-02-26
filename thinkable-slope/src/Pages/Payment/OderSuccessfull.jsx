import { Button, Spinner, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Payment.module.css";
const OrderSuccessfull = () => {
    const navigate = useNavigate();
     const [isButLoading, setIsButLoading] = useState(false);

  

    
  const handlePay = () => {
    setIsButLoading(true);
    setTimeout(() => {
      setIsButLoading(false);
     
      navigate("/");
    }, 1000);
  };
  return (
    <div style={{ backgroundColor: "lightyellow" }}>
      <VStack
        margin="auto"
        style={{
          border: "0px solid gray",
          width: "35%",
          margin: " 10px auto",
          marginTop: "5PX",
          marginBottom: "100px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <div>
          <img
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            alt="img"
          />
        </div>

        <Button
          id={styles.booking}
          onClick={handlePay}
          fontSize="x"
          padding={5}
        >
          {!isButLoading && `  Enjoy Your order!`}
          {isButLoading && (
            <Spinner
              thickness="4px"
              speed="0.55s"
              emptyColor="gray.200"
              color="#17274a"
              size="lg"
            />
          )}
        </Button>
      </VStack>
    </div>
  );
};

export default OrderSuccessfull;
