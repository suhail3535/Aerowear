import { Box, Button, Heading, WrapItem } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Single.modules.css";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
const SingleProduct = () => {
  const [data, setData] = useState({});
  const param = useParams();

  const getSingleProduct = (id) => {
    axios
      .get(`http://localhost:8080/women/${id}`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getSingleProduct(param.id);
  }, [param.id]);

  // console.log(param)
  return (
    <div className={styles.cont}>
      <div className="product-all">
        <div className="product-one">
          <div style={{ marginBottom: "5px" }}>
            <img src={data.image} alt="" />
          </div>
          <div style={{ marginBottom: "5px" }}>
            <img src={data.image} alt="" />
          </div>
          <div style={{ marginBottom: "5px" }}>
            <img src={data.image} alt="" />
          </div>
         
        </div>
        <div className="product-two">
          <div className="product-card">
            <img src={data.image} alt="" />
          </div>
          <div className="product-detail">
            <Heading as="h3" size="sm">
            Title:  {data.name}
            </Heading>
            <br />
            <Heading as="h4" size="md">
              Rs-$ {data.price}
            </Heading>
            <br />
            <Button colorScheme="green">
              {data.Rating}

              <StarPurple500Icon />
            </Button>
            <br />

            <button className="delivery">Free delivery</button>

            <div className="size">
              <div>
                <Heading style={{ padding: "10px" }} as="h2" size="sm">
                  Select Size
                </Heading>
              </div>

              <div>
                <Button
                  style={{ marginRight: "30px", marginTop: "5px" }}
                  colorScheme="gray"
                >
                  S
                </Button>
                <Button
                  style={{ marginRight: "30px", marginTop: "5px" }}
                  colorScheme="gray"
                >
                  M
                </Button>
                <Button
                  style={{ marginRight: "30px", marginTop: "5px" }}
                  colorScheme="gray"
                >
                  X
                </Button>
                <Button
                  style={{ marginRight: "30px", marginTop: "5px" }}
                  colorScheme="gray"
                >
                  XL
                </Button>
              </div>
            </div>
            <br />
            <Heading as="h1" size="sm">
              Details
            </Heading>
            <li>Part of our Tiny Top collection</li>
            <li>Stretch rib knit</li>
            <li>Rhinestone heart with flames detail</li>
            <li>Style: 9543</li>
            <li>Imported</li>
            <Heading as="h1" size="sm">
              Fit
            </Heading>
            <li>Slim fit</li>
            <li>High neck</li>
            <li>Cropped cut</li>
            <li>Approx. length (M): 16.25"</li>
            <li>Model height: 5'10" | Wear size: Small</li>
            <Heading as="h1" size="sm">
              Care & Materials
            </Heading>
            <li>94% cotton, 6% spandex</li>
            <li>Machine wash/dry</li>
            <div className="btn">
              <Button
                style={{
                  backgroundColor: "#E1F5FE",
                  width: "30%",
                  border: "1px solid black",
                }}
              >
                Add to Cart
              </Button>

              <Button
                style={{
                  backgroundColor: "#F48FB1",
                  width: "40%",
                  border: "1px solid black",
                }}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
