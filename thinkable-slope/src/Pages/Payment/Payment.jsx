import {
    Box,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Radio,
    RadioGroup,
    Select,
    Spinner,
    Stack,
    useToast,
    VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Payment.module.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { postRequestAddress } from "../../Redux/UserReducer/action";
import { useEffect } from "react";
import { getCartProducts } from "../../Redux/CartReducer/Action";

const initialState = {
    firstname: "",
    lastname: "",
    address1: "",
    zipcode: "",
    city: "",
    phone: "",
};

const Payment = () => {
    const [isButLoading, setIsButLoading] = useState(false);
    const [data, setdata] = useState(initialState);
    let dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    const { products, isLoading, isError } = useSelector((store) => {
        return {
            products: store.CartReducer.products,
            isLoading: store.CartReducer.isLoading,
            isError: store.CartReducer.isError,
        };
    }, shallowEqual);
    useEffect(() => {
        dispatch(getCartProducts());
    }, []);

    let totalprice;
    if (products.length == 0) {
        totalprice = 0;
    } else {
        totalprice = products.reduce((acc, el) => {
            return acc + Number(el.price);
        }, 0);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata((prev) => {
            return { ...prev, [name]: name === "phone" ? +value : value };
        });
    };

    const handleSubmit = (e) => {
        setIsButLoading(true);
        e.preventDefault();
        if (
            data.firstname === "" ||
            data.lastname === "" ||
            data.address1 === "" ||
            data.zipcode === "" ||
            data.phone === "" ||
            data.city === ""
        ) {
            // setTimeout(() => {
            setIsButLoading(false);
            toast({
                title: "Shipping Details Missing",
                description: "Please fill all the details",
                status: "warning",
                variant: "left-accent",
                duration: 2500,
                isClosable: true,
                position: "top",
            });
            // }, 2000);
        } else if (
            data.firstname !== "" &&
            data.lastname !== "" &&
            data.address1 !== "" &&
            data.zipcode !== "" &&
            data.phone !== "" &&
            data.city !== ""
        ) {
            setTimeout(() => {
                setIsButLoading(false);
                dispatch(postRequestAddress(data));
                toast({
                    title: "Please Choose a Payment Method",
                    description: "",
                    status: "warning",
                    variant: "left-accent",
                    duration: 2500,
                    isClosable: true,
                    position: "top",
                });
                setdata(initialState);
                navigate("/paymentmethod");
            }, 2000);
        }

        //  Swal.fire("", "Product added!", "success");
    };

    return (
        <div>
            <Heading marginTop={"20px"} as="h2" size="lg" textAlign={"center"}>
                Shipping Address
            </Heading>
            <Divider />

            <div id={styles.main}>
                <div id={styles.one}>
                    <div id={styles.main_container} align="flex-start">
                        <div id={styles.vstack}>
                            <div id={styles.firstname}>
                                <FormControl>
                                    <FormLabel>First Name*</FormLabel>
                                    <input
                                        id={styles.input}
                                        name="firstname"
                                        value={data.firstname}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Last Name*</FormLabel>
                                    <input
                                        id={styles.input}
                                        name="lastname"
                                        value={data.lastname}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                    />
                                </FormControl>
                            </div>
                            <div id={styles.address1}>
                                <FormControl>
                                    <FormLabel>Address 1*</FormLabel>
                                    <input
                                        id={styles.input}
                                        name="address1"
                                        value={data.address1}
                                        onChange={handleChange}
                                        size="lg"
                                        placeholder="Address 1*"
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Address</FormLabel>
                                    <input
                                        id={styles.input}
                                        size="lg"
                                        placeholder="Address (Optional)*"
                                    />
                                </FormControl>
                            </div>
                            <VStack>
                                <div id={styles.country}>
                                    <FormControl>
                                        <FormLabel>Country</FormLabel>
                                        <Select
                                            id={styles.input}
                                            placeholder="India"
                                            size="lg"></Select>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel
                                            style={{ marginLeft: "22px" }}>
                                            Zip Code*
                                        </FormLabel>
                                        <input
                                            id={styles.input}
                                            name="zipcode"
                                            value={data.zipcode}
                                            onChange={handleChange}
                                            type="city"
                                            size="lg"
                                            placeholder="Zip Code"
                                        />
                                    </FormControl>
                                </div>
                                <div id={styles.city}>
                                    <FormControl>
                                        <FormLabel>City*</FormLabel>
                                        <input
                                            id={styles.input}
                                            name="city"
                                            value={data.city}
                                            onChange={handleChange}
                                            size="lg"
                                            placeholder="City"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>State</FormLabel>

                                        <Select
                                            id={styles.input}
                                            placeholder="State"
                                            size="lg">
                                            <option value="Select">
                                                Uttar Pradesh
                                            </option>
                                            <option value="Select">
                                                Delhi
                                            </option>
                                            <option value="Select">
                                                Mumbai
                                            </option>
                                            <option value="Select">
                                                Rajesthan
                                            </option>
                                            <option value="Select">
                                                Jaipur
                                            </option>
                                        </Select>
                                    </FormControl>
                                </div>
                            </VStack>
                        </div>

                        <div id={styles.last_div}>
                            <div>
                                <FormControl>
                                    <FormLabel>Phone*</FormLabel>
                                    <input
                                        id={styles.input}
                                        name="phone"
                                        value={data.phone}
                                        onChange={handleChange}
                                        size="lg"
                                        placeholder="Phone"
                                    />
                                    <div id={styles.is_gift}>
                                        <Heading as="h1" size="sm">
                                            IS THIS A GIFT?
                                        </Heading>
                                        <RadioGroup defaultValue="2">
                                            <Stack spacing={5} direction="row">
                                                <Radio
                                                    colorScheme="gray"
                                                    value="1">
                                                    Yes
                                                </Radio>
                                                <Radio
                                                    colorScheme="gray"
                                                    value="2">
                                                    No
                                                </Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </div>
                                </FormControl>
                            </div>
                        </div>
                    </div>

                    <Heading as="h1" size="sm" padding={5}>
                        SHIPPING METHOD
                    </Heading>
                    <div id={styles.child_two_div}>
                        <RadioGroup defaultValue="2">
                            <Stack direction="row">
                                <Radio
                                    backgroundColor={"white"}
                                    colorScheme="gray"
                                    value="1">
                                    Economy Ground:
                                </Radio>
                            </Stack>
                            <br />
                            <Divider />
                            <Stack>
                                <Radio colorScheme="gray" value="2">
                                    Standard Ground:
                                </Radio>
                            </Stack>
                            <br />
                            <Divider />
                            <Stack direction="row">
                                <Radio colorScheme="gray" value="3">
                                    2 Business Days:
                                </Radio>
                            </Stack>
                            <br />
                            <Divider />
                            <Stack>
                                <Radio colorScheme="gray" value="4">
                                    Overnight:
                                </Radio>
                            </Stack>
                            <br />
                            <Divider />
                        </RadioGroup>
                    </div>
                    <div id={styles.review_order}>
                        <button
                            onClick={handleSubmit}
                            className={styles.bookbtn}>
                            {!isButLoading && `  Review Order `}
                            {isButLoading && (
                                <Spinner
                                    thickness="4px"
                                    speed="0.55s"
                                    emptyColor="gray.200"
                                    color="#17274a"
                                    size="md"
                                />
                            )}
                        </button>
                    </div>
                </div>

                <div id={styles.two}>
                    <div id={styles.third}>
                        <div className={styles.Order_summmary_div}>
                            <p>ORDER SUMMARY</p>
                            <p>Subtotal : {totalprice.toFixed(2)}</p>
                            <p>Shipping Economy Ground : $ 5.00</p>
                            <p>Sales Tax : $ 0.65</p>
                            <p>
                                Estimated Total:${" "}
                                {(totalprice + 5 + 0.65).toFixed(2)}
                            </p>
                        </div>
                    </div>
                    <div className={styles.fourth}>
                        <Heading textAlign={"Center"} as={"h4"} size={"sm"}>
                            Help?
                        </Heading>
                        <p
                            style={{
                                fontWeight: "normal",
                                textDecoration: "underline",
                            }}>
                            {" "}
                            1-877-289-2376
                        </p>
                        <Heading
                            textAlign={"Center"}
                            as={"h6"}
                            size={"sm"}
                            padding={"20px"}>
                            Phone hours 8AM EST - 12:00AM EST Chat 9AM EST -
                            12:00AM EST
                        </Heading>
                        <Heading
                            textAlign={"Center"}
                            as={"h6"}
                            size={"sm"}
                            paddiing={"20px"}>
                            <Heading textAlign={"Center"} as={"h6"} size={"xs"}>
                                Paying with PayPal? In-Store Returns will be
                                refunded as Merchandise Credit.
                            </Heading>
                        </Heading>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
