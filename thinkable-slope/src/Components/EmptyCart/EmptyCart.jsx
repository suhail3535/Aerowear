import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate("/");
    };
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="4xl"
                padding={"20px"}
                bgGradient="linear(to-r, rgba(23,39,74,1), rgba(146,175,238,1))"
                backgroundClip="text">
                Your Cart is Empty
            </Heading>
            <Text color={"gray.500"} mt={4} mb={6}>
                Your cart is empty. Please add items to your cart !
            </Text>

            <Button
                mt={4}
                onClick={handleHome}
                // colorScheme="teal"
                bgGradient="linear(to-r, rgba(23,39,74,1), rgba(146,175,238,1))"
                transition="all .5s ease-in-out"
                color="white"
                _hover={{
                    bgGradient:
                        "linear(to-r, rgba(146,175,238,1), rgba(23,39,74,1))",
                }}
                variant="solid">
                Go to Homepage
            </Button>
        </Box>
    );
};
export default EmptyCart;
