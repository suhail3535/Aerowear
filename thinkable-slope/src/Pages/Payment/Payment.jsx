import { Box, Button, Center, Divider, FormControl, FormLabel, Heading, HStack, Input, PinInput, PinInputField, Radio, RadioGroup, Select, Stack, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import CartMap from '../../Components/CartMap/Cartmap';
import styles from "./Payment.module.css"
import { useDispatch, useSelector } from "react-redux";
import { postRequestAddress } from '../../Redux/UserReducer/action';

const initialState = {

  firstname: "",
  lastname: "",
  address1: "",
  zipcode: "",
  city: "",
  phone: "",
};

const Payment = () => {
 const [data, setdata] = useState(initialState);
 // console.log(store);


 const dispatch = useDispatch();

 const handleChange = (e) => {
   const { name, value } = e.target;
   setdata((prev) => {
     return { ...prev, [name]: name === "phone" ? +value : value };
   });
   // console.log(data)
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   dispatch(postRequestAddress(data));
   setdata(initialState);
     navigate("/paymentmethod");
  //  Swal.fire("", "Product added!", "success");
 };

let cartData = JSON.parse(localStorage.getItem("cart"));

let totalprice;
if (cartData == null) {
  totalprice = 0;
} else {
  totalprice = cartData.reduce((acc, el) => {
    return acc + Number(el.price);
  }, 0);
}

function HandleRemove(i) {
  console.log(i);
}

  const navigate = useNavigate()
  
//   const handleClick = () => {
//     navigate("/paymentmethod");
//      Swal.fire("", "Redirect to payment method!", "success");

// }


  return (
    <div>
      <Heading marginLeft={20} as="h2" size="lg">
        1.Shipping
      </Heading>

      <Divider />

      <div id={styles.main}>
        <div id={styles.one}>
          <VStack
            align="flex-start"
            border={"1px solid rgb(243, 237, 237)"}
            marginBottom={"40px"}
            spacing={10}
            padding={10}
          >
            <VStack>
              <HStack>
                <FormControl>
                  <FormLabel>First Name*</FormLabel>
                  <Input
                    name="firstname"
                    value={data.firstname}
                    onChange={handleChange}
                    style={{
                      border: "1px solid black",
                      height: "50px",
                      width: "380px",
                    }}
                    placeholder="First Name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel style={{ marginLeft: "21px" }}>
                    Last Name*
                  </FormLabel>
                  <Input
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                    style={{
                      border: "1px solid black",
                      height: "50px",
                      width: "380px",
                      marginLeft: "20px",
                    }}
                    placeholder="Last Name"
                  />
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel>Address 1*</FormLabel>
                <Input
                  name="address1"
                  value={data.address1}
                  onChange={handleChange}
                  style={{ border: "1px solid black", height: "50px" }}
                  size="lg"
                  placeholder="Address 1*"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  style={{ border: "1px solid black", height: "50px" }}
                  size="lg"
                  placeholder="Address"
                />
              </FormControl>
              <VStack>
                <HStack>
                  <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Select
                      style={{
                        border: "1px solid black",
                        height: "50px",
                        width: "380px",
                      }}
                      placeholder="India"
                      size="lg"
                    ></Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel style={{ marginLeft: "21px" }}>
                      Zip Code*
                    </FormLabel>
                    <Input
                      name="zipcode"
                      value={data.zipcode}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        height: "50px",
                        width: "380px",
                        marginLeft: "20px",
                      }}
                      type="city"
                      size="lg"
                      placeholder="Zip Code"
                    />
                  </FormControl>
                </HStack>
                <HStack>
                  <FormControl>
                    <FormLabel>City*</FormLabel>
                    <Input
                      name="city"
                      value={data.city}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        height: "50px",
                        width: "380px",
                      }}
                      size="lg"
                      placeholder="City"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel style={{ marginLeft: "21px" }}> State</FormLabel>

                    <Select
                      style={{
                        border: "1px solid black",
                        height: "50px",
                        width: "380px",
                        marginLeft: "20px",
                      }}
                      placeholder="State"
                      size="lg"
                    >
                      <option value="Select">Uttar Pradesh</option>
                      <option value="Select">Delhi</option>
                      <option value="Select">Mumbai</option>
                      <option value="Select">Rajesthan</option>
                      <option value="Select">Jaipur</option>
                    </Select>
                  </FormControl>
                </HStack>
              </VStack>
            </VStack>

            <VStack>
              <HStack width="full">
                <FormControl>
                  <FormLabel>Phone*</FormLabel>
                  <Input
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    style={{
                      border: "1px solid black",
                      height: "50px",
                      width: "380px",
                    }}
                    size="lg"
                    placeholder="Phone"
                  />
                  <Box
                    style={{
                      border: "1px solid black",
                      marginTop: "30px",
                      height: "60px",
                      backgroundColor: " #f7f7f7",
                      padding: "10px",
                      borderRadius: "5px",
                      width: "380px",
                    }}
                  >
                    <Heading as="h1" size="sm">
                      IS THIS A GIFT?
                    </Heading>
                    <RadioGroup defaultValue="2">
                      <Stack spacing={5} direction="row">
                        <Radio colorScheme="gray" value="1">
                          Yes
                        </Radio>
                        <Radio colorScheme="gray" value="2">
                          No
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                </FormControl>
              </HStack>

              <HStack></HStack>
            </VStack>
          </VStack>
          <Heading as="h1" size="sm">
            SHIPPING METHOD
          </Heading>
          <div
            style={{
              border: "0px solid red",
              height: "auto",
              marginTop: "10px",
              padding: "20px",
              backgroundColor: " #f7f7f7 ",
            }}
          >
            <RadioGroup defaultValue="2">
              <Stack direction="row">
                <Radio backgroundColor={"white"} colorScheme="gray" value="1">
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

          <button onClick={handleSubmit} className={styles.bookbtn}>
            Review Order
          </button>
        </div>
        <div id={styles.two}>
          <div id={styles.third}>
           
            <div className={styles.Order_summmary_div}>
              <p>ORDER SUMMARY</p>
              <p>Subtotal : {totalprice}</p>
              <p>Shipping Economy Ground : $ 5.00</p>
              <p>Sales Tax : $ 0.65</p>
              <p>Estimated Total:$ {(totalprice + 5.0 + 0.65).toFixed(2)}</p>
            </div>
          </div>
          <div className={styles.fourth}>
            <Heading textAlign={"Center"} as={"h4"} size={"sm"}>
              Help?
            </Heading>
            <p style={{ fontWeight: "normal", textDecoration: "underline" }}>
              {" "}
              1-877-289-2376
            </p>
            <Heading
              textAlign={"Center"}
              as={"h6"}
              size={"sm"}
              padding={"20px"}
            >
              Phone hours 8AM EST - 12:00AM EST Chat 9AM EST - 12:00AM EST
            </Heading>
            <Heading
              textAlign={"Center"}
              as={"h6"}
              size={"sm"}
              paddiing={"20px"}
            >
              <Heading textAlign={"Center"} as={"h6"} size={"xs"}>
                Paying with PayPal? In-Store Returns will be refunded as
                Merchandise Credit.
              </Heading>
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment