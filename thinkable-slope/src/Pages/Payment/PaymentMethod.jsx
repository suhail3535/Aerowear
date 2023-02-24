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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Payment.module.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const PaymentMethod = () => {
  return (
    <>
      <Heading marginTop={"20"} marginLeft={"230"} as={"h1"} size={"md"}>
        PAYMENT METHOD
      </Heading>
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
                        width: "450px",
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
                        width: "450px",
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
                        width: "450px",
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
                        width: "230px",
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
            </TabPanel>
            <div id={styles.check}>
              <Checkbox defaultChecked>Save thid card</Checkbox>
            </div>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>Three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default PaymentMethod;
