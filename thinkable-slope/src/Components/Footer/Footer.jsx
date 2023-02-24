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
            <Box
                color={useColorModeValue("gray.700", "gray.200")}>
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
                                <SocialButton label={"Twitter"} href={"#"}>
                                    <FaTwitter />
                                </SocialButton>
                                <SocialButton label={"YouTube"} href={"#"}>
                                    <FaYoutube />
                                </SocialButton>
                                <SocialButton label={"Instagram"} href={"#"}>
                                    <FaInstagram />
                                </SocialButton>
                            </Stack>
                        </Stack>
                        <Stack align={"flex-start"}>
                            <ListHeader>Shopping Help</ListHeader>
                            <Link href={"#"}>Help Desk</Link>
                            <Link href={"#"}>Returns & Exchanges</Link>
                            <Link href={"#"}>Prices & Price Match Policy</Link>
                            <Link href={"#"}>Shipping & Handling</Link>
                            <Link href={"#"}>Size Charts</Link>
                            <Link href={"#"}>Buy Online, Pick Up In Store</Link>
                            <Link href={"#"}>Student Discount</Link>
                        </Stack>
                        <Stack align={"flex-start"}>
                            <ListHeader>Questions?</ListHeader>
                            <Link href={"#"}>
                                Chat With Us <br />
                                Available 9AM - 12AM EST
                            </Link>
                            <Link href={"#"}>
                                Call Us <br />
                                1.877.289.2376
                            </Link>
                            <Link href={"#"}>Contact us</Link>
                        </Stack>
                        <Stack align={"flex-start"}>
                            <ListHeader>About Us</ListHeader>
                            <Link href={"#"}>About Aérodraw</Link>
                            <Link href={"#"}>Careers</Link>
                            <Link href={"#"}>Supply Chain</Link>
                            <Link href={"#"}>Aero Impact</Link>
                        </Stack>
                        <Stack align={"flex-start"}>
                            <ListHeader>Stay up to date</ListHeader>
                            <Stack direction={"row"}>
                                <Input
                                    placeholder={"Your email address"}
                                    bg={useColorModeValue(
                                        "blackAlpha.100",
                                        "whiteAlpha.100"
                                    )}
                                    border={0}
                                    _focus={{
                                        bg: "whiteAlpha.300",
                                    }}
                                />
                                <IconButton
                                    style={{
                                        transition: "all .5s ease-in-out",
                                    }}
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
