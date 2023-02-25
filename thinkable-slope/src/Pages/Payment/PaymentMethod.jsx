import {
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Select,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./Payment.module.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useDispatch, useSelector } from "react-redux";
import {getRequestAddress } from "../../Redux/UserReducer/action";

import PaymentCard from "./PaymentCard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const PaymentMethod = () => {
    const [isButLoading, setIsButLoading] = useState(false);
  let cartData = JSON.parse(localStorage.getItem("cart"));
  const navigate = useNavigate();

let totalprice;
if (cartData == null) {
  totalprice = 0;
} else {
  totalprice = cartData.reduce((acc, el) => {
    return acc + Number(el.price);
  }, 0);
}

  const handlePay = () => {
      setIsButLoading(true);
 setTimeout(() => {
   // alert("Added To Favourite Page");
   

   setIsButLoading(false);
   navigate("/");
 }, 3000);
   
    
  }

  const dispatch = useDispatch();
  const newData = useSelector((store) => {
    //  console.log(store)
     return {
       address: store.UserReducer.address,
       isLoading: store.isLoading,
       isError: store.isError,
     };
   });
  const { address } = newData;
  
  useEffect(() => {
    dispatch(getRequestAddress());
  }, []);
// console.log(newData)
  return (
    <div>
      <Heading
        as="h4"
        size="md"
        style={{ textAlign: "center", padding: "10px" }}
      >
        Peyment Method
      </Heading>
      <div id={styles.container}>
        <div id={styles.address}>
          {address.map((ele) => {
            return (
              <div
                style={{
                  padding: "10px",
                  marginBottom: "20px",
                  border: "1px solid gray",
                }}
              >
                <PaymentCard key={ele.id} {...ele} />
              </div>
            );
          })}
        </div>

        <div id={styles.method}>
          <Tabs
            style={{ paddingRight: "10px", border: "0px solid red" }}
            variant="unstyled"
          >
            <TabList>
              <Tab
                style={{
                  marginLeft: "100px",
                  padding: "10px",
                  marginTop: "30px",
                }}
                _selected={{ color: "white", bg: "cyan.500" }}
              >
                <CreditCardIcon />
                Credit Card
              </Tab>
              <Tab
                style={{
                  marginLeft: "100px",
                  padding: "10px",
                  marginTop: "30px",
                }}
                _selected={{ color: "white", bg: "green.400" }}
              >
                Tab 2
              </Tab>
              <Tab
                style={{
                  marginLeft: "100px",
                  padding: "10px",
                  marginTop: "30px",
                }}
                _selected={{ color: "white", bg: "red.400" }}
              >
                Tab 3
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack>
                  <HStack>
                    <FormControl>
                      <FormLabel style={{ marginLeft: "0px" }}>
                        Name on Card*
                      </FormLabel>
                      <Input
                        style={{
                          border: "1px solid black",
                          height: "50px",
                          width: "300px",
                          marginRight: "20px",
                        }}
                        type="city"
                        size="lg"
                        placeholder=" Name on Card"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel style={{ marginLeft: "0px" }}>
                        Card Type
                      </FormLabel>

                      <Select
                        style={{
                          border: "1px solid black",
                          height: "50px",
                          width: "300px",
                          marginLeft: "0px",
                        }}
                        placeholder="Select"
                        size="lg"
                      >
                        <option value="Select">American Express</option>
                        <option value="Select">Master Card</option>
                        <option value="Select">Discover</option>
                        <option value="Select">JCB</option>
                      </Select>
                    </FormControl>
                  </HStack>
                  <HStack id={styles.otp}>
                    <FormControl>
                      <FormLabel>Card Number*</FormLabel>
                      <Input
                        style={{
                          border: "1px solid black",
                          height: "50px",
                          width: "440px",
                          marginRight: "20px",
                        }}
                        size="lg"
                        placeholder="Card Number"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel marginLeft={0}>Security Code</FormLabel>
                      <HStack border="0px solid gray" width="full">
                        <PinInput size="lg">
                          <PinInputField style={{ border: "1px solid gray" }} />
                          <PinInputField style={{ border: "1px solid gray" }} />
                          <PinInputField style={{ border: "1px solid gray" }} />
                        </PinInput>
                      </HStack>
                    </FormControl>
                  </HStack>
                  <HStack id={styles.date}>
                    <FormControl>
                      <Select
                        style={{
                          border: "1px solid black",
                          height: "50px",
                          width: "420px",
                          marginLeft: "0px",
                        }}
                        placeholder="Month"
                        size="lg"
                      >
                        <option value="Select"> January</option>
                        <option value="Select">February</option>
                        <option value="Select">March</option>
                        <option value="Select">April</option>
                        <option value="Select">May</option>
                        <option value="Select">June</option>
                        <option value="Select">July</option>
                        <option value="Select">August</option>
                        <option value="Select">September</option>
                        <option value="Select">October</option>
                        <option value="Select">November</option>
                        <option value="Select">December</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <Select
                        style={{
                          border: "1px solid black",
                          height: "50px",
                          width: "200px",
                          margineft: "10px",
                        }}
                        placeholder="Year"
                        size="lg"
                      >
                        <option value="Select">2024</option>
                        <option value="Select">2025</option>
                        <option value="Select">2026</option>
                        <option value="Select">2027</option>
                        <option value="Select">2028</option>
                        <option value="Select">2029</option>
                        <option value="Select">2030</option>
                        <option value="Select">2031</option>
                        <option value="Select">2032</option>
                        <option value="Select">2033</option>
                        <option value="Select">2034</option>
                      </Select>
                    </FormControl>
                  </HStack>
                </VStack>
                <div id={styles.check}>
                  <Checkbox defaultChecked>Save thid card</Checkbox>
                </div>
              </TabPanel>

              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>Three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
      <button onClick={handlePay} className={styles.bookbtn2}>
        {!isButLoading && ` Pay Now ${(totalprice + 5.0 + 0.65).toFixed(2)}`}

        {isButLoading && (
          <Spinner
            thickness="4px"
            speed="0.55s"
            emptyColor="gray.200"
            color="#17274a"
            size="lg"
          />
        )}
      </button>
    </div>
  );
};

export default PaymentMethod;
