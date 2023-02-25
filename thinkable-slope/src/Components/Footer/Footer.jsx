import React from "react";
import style from "./Footer.css";
// import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
// import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
// import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
// import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
    return (
        <div style={{ marginTop: "40px" }}>
            <hr />
            <Box color={useColorModeValue("gray.700", "gray.200")}>
                <Container as={Stack} maxW={"8xl"} py={10}>
                    <SimpleGrid
                        templateColumns={{
                            sm: "1fr 1fr",
                            md: "1fr 1fr 1fr 1fr 1fr",
                        }}
                        spacing={3}>
                        <Stack spacing={3}>
                            <Box>
                                {/* <Logo
                                    color={useColorModeValue(
                                        "gray.700",
                                        "white"
                                    )}
                                /> */}
                            </Box>
                            {/* <Text fontSize={"sm"}>
                                © 2022 Chakra Templates. All rights reserved
                            </Text> */}
                            <Stack direction={"column"} spacing={6}>
                                <Box
                                    style={{
                                        display: "flex",
                                        textAlign: "left",
                                        cursor: "pointer",
                                    }}
                                    _hover={{ textDecoration: "underline" }}>
                                    <SocialButton label={"Twitter"} href={"#"}>
                                        <FaTwitter />
                                    </SocialButton>
                                    <p
                                        style={{
                                            padding: "8px 0px 0px 20px",
                                            fontSize: "11px",
                                            color: "gray",
                                        }}>
                                        Do Follow on Twitter
                                    </p>
                                </Box>
                                <Box
                                    style={{
                                        display: "flex",
                                        textAlign: "left",
                                        cursor: "pointer",
                                    }}
                                    _hover={{ textDecoration: "underline" }}>
                                    <SocialButton
                                        label={"Instagram"}
                                        href={"#"}>
                                        <FaInstagram />
                                    </SocialButton>
                                    <p
                                        style={{
                                            padding: "8px 0px 0px 20px",
                                            fontSize: "11px",
                                            color: "gray",
                                        }}>
                                        Do Follow on Instagram
                                    </p>
                                </Box>
                                <Box
                                    style={{
                                        display: "flex",
                                        textAlign: "left",
                                        cursor: "pointer",
                                    }}
                                    _hover={{ textDecoration: "underline" }}>
                                    <SocialButton label={"YouTube"} href={"#"}>
                                        <FaYoutube />
                                    </SocialButton>
                                    <p
                                        style={{
                                            padding: "8px 0px 0px 20px",
                                            fontSize: "11px",
                                            color: "gray",
                                        }}>
                                        Subscribe us on YouTube
                                    </p>
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack align={"flex-start"}>
                            <ListHeader
                                style={{
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                }}>
                                Shopping Help
                            </ListHeader>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Help Desk
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Returns & Exchanges
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Prices & Price Match Policy
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Shipping & Handling
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Size Charts
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Buy Online, Pick Up In Store
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Student Discount
                            </Link>
                        </Stack>
                        <Stack align={"flex-start"}>
                            <ListHeader
                                style={{
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                }}>
                                Questions?
                            </ListHeader>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Chat With Us <br />
                                Available 9AM - 12AM EST
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Call Us <br />
                                1.877.289.2376
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Contact us
                            </Link>
                        </Stack>
                        <Stack align={"flex-start"}>
                            <ListHeader
                                style={{
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                }}>
                                About Us
                            </ListHeader>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                About Aérodraw
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Careers
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Supply Chain
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                                href={"#"}>
                                Aero Impact
                            </Link>
                        </Stack>
                        <Stack align={"flex-start"}>
                            <ListHeader>
                                Get The Latest Styles & Offers:
                            </ListHeader>
                            <Stack direction={"row"}>
                                <Input
                                    placeholder={"Enter Email"}
                                    borderRadius={"25px"}
                                    border={"1.5px solid transparent"}
                                    boxShadow={
                                        "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                                    }
                                    width={"100%"}
                                    fontSize={"12px"}
                                    _focusVisible={{
                                        border: "1px solid gray.500",
                                    }}
                                />
                                <IconButton
                                    style={{
                                        transition: "all .5s ease-in-out",
                                    }}
                                    boxShadow={
                                        "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                                    }
                                    bg={useColorModeValue("navy")}
                                    color={useColorModeValue("white")}
                                    _hover={{
                                        bg: "white",
                                        color: "navy",
                                        border: "1px solid navy",
                                    }}
                                    aria-label="Subscribe"
                                    icon={<BiMailSend />}
                                />
                            </Stack>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
            <div className="foot-two">
                <a href="">Don't Sell My Information</a>
                <a href="">Terms of Use</a>
                <a href="">Accessibility Statement</a>
                <a href="">Privacy Policy</a>
                <a href="">CA Transparency Act</a>
                <a href="">© 2023 Aerodraw. All Rights Reserved.</a>
            </div>
        </div>
    );
};

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    );
};

export default Footer;
