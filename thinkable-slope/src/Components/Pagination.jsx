import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({
    itemsPerPage,
    totalItems,
    page,
    onPageChange,
}) => {
    //   console.log(totalItems);
    return (
        <Box border={"0px solid red"} w={"10%"} margin={"50px auto"} marginLeft={700} backgroundColor={"cyan"} borderRadius={5}>
            <Button
                colorScheme={"white"}
                isDisabled={page === 1}
                onClick={() => onPageChange(page - 1)}>
                <AiOutlineLeft color="black" size={20} />
            </Button>
            <Button colorScheme={"white"} color={"black"}>
                {page}
            </Button>
            <Button
                colorScheme={"white"}
                isDisabled={page === totalItems}
                onClick={() => onPageChange(page + 1)}>
                <AiOutlineRight color="black" size={20} />
            </Button>
        </Box>
    );
};

export default Pagination;
