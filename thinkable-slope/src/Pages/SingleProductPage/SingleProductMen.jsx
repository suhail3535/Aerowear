import { Button, Heading, Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Single.modules.css";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { postCartRequest } from "../../Redux/CartReducer/Action";
import { useDispatch } from "react-redux";

const SingleProductMen = () => {
    const [data, setData] = useState({});

    const param = useParams();

    const toast = useToast();

    const [isButLoading, setIsButLoading] = useState(false);

    const dispatch = useDispatch();
    function AddToCart () {
        dispatch(postCartRequest(data));
        setIsButLoading(true);
        setTimeout(() => {
            setIsButLoading(false);
            toast({
                title: "Added to Cart",
                description: "Product successfully added",
                status: "success",
                duration: 2500,
                variant: "left-accent",
                isClosable: true,
                position: "top",
            });
            // navigate("/cart");
        }, 2000);
    }
    function handleBuy () {
        dispatch(postCartRequest(data));
        toast({
            title: "Added to Cart",
            description: "Product successfully added",
            status: "success",
            duration: 2500,
            isClosable: true,
            variant: "left-accent",
            position: "top",
        });
        // navigate("/cart");
    }
    const getSingleProduct = (id) => {
        axios
            .get(`https://rct-211project.onrender.com/men/${id}`)
            .then((res) => setData(res.data));
    };
    const handleDelivery = () => { };

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
                        <Heading as="h4" size="md">
                            Product : {data.name}
                        </Heading>
                        <br />
                        <Heading as="h4" size="md">
                            Price : {data.price} $/-
                        </Heading>
                        <br />
                        <Button
                            w={"40%"}
                            padding={"22px 20px"}
                            borderRadius={"25px"}
                            colorScheme="green">
                            Rating : {data.Rating}
                            <StarPurple500Icon />
                        </Button>
                        <br />
                        <button onClick={handleDelivery} className="delivery">
                            Free Delivery
                        </button>
                        <div className="size">
                            <Heading id={styles.heading} as="h2" size="sm">
                                Select Size
                            </Heading>
                            <button id={styles.btn1}>S</button>
                            <button id={styles.btn1}>M</button>
                            <button id={styles.btn1}>X</button>
                            <button id={styles.btn1}>XL</button>
                        </div>
                        <br />
                        <Heading as="h1" size="sm">
                            Details
                        </Heading>
                        <li>Part of our Tiny Top collection</li>
                        <li>Stretch rib knit</li>
                        <li>Rhinestone heart with flames detail</li>
                        <li>Style : 9543</li>
                        <li>Imported</li>
                        <hr style={{ margin: "20px auto" }} />
                        <Heading as="h1" size="sm">
                            Fit
                        </Heading>
                        <li>Slim fit</li>
                        <li>High neck</li>
                        <li>Cropped cut</li>
                        <li>Approx. length (M) : 16.25"</li>
                        <li>Model height : 5'10" | Wear size : Small</li>
                        <hr style={{ margin: "20px auto" }} />

                        <Heading as="h1" size="sm">
                            Care & Materials
                        </Heading>
                        <li>94% cotton, 6% spandex</li>
                        <li>Machine wash/dry</li>
                        <div className="btn">
                            <button
                                className="add-cart-btn"
                                onClick={AddToCart}>
                                {!isButLoading && `Add to Cart`}
                                {isButLoading && (
                                    <Spinner
                                        thickness="4px"
                                        speed="0.55s"
                                        emptyColor="gray.200"
                                        color="#17274a"
                                        size="sm"
                                    />
                                )}
                            </button>

                            <button className="buy-Now" onClick={handleBuy}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductMen;
