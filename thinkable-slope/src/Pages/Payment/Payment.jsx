import { Box, Button, Center, Divider, FormControl, FormLabel, Heading, HStack, Input, PinInput, PinInputField, Radio, RadioGroup, Select, Stack, VStack } from '@chakra-ui/react';
import React from 'react'
import styles from "./Payment.module.css"
const Payment = () => {
  return (
    <div>
      <Heading as="h2" size="lg">
        1.Shipping
      </Heading>

      <Divider />

      <div id={styles.main}>
        <div id={styles.one}>
          <VStack
            align="flex-start"
            border={"2px solid green"}
            marginBottom={"40px"}
            spacing={10}
            padding={10}
          >
            <VStack>
              <HStack>
                <FormControl>
                  <FormLabel>First Name*</FormLabel>
                  <Input
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
                      placeholder="United States"
                      size="lg"
                    ></Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel style={{ marginLeft: "21px" }}>
                      Zip Code*
                    </FormLabel>
                    <Input
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
                      <option value="Select">Alabama</option>
                      <option value="Select">Florida</option>
                      <option value="Select">Utah</option>
                      <option value="Select">Washington</option>
                      <option value="Select">West Virginia</option>
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
              border: "1px solid red",
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

          <button className={styles.bookbtn}> CONTINUE BILLING</button>
        </div>
        <div id={styles.two}>
          <div id={styles.third}></div>
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