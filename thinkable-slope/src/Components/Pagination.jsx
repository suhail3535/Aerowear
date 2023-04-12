import { Box, Button } from "@chakra-ui/react";
import React from "react";
import styles from "../Pages/Men/Men.module.css"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({
    itemsPerPage,
    totalItems,
    page,
    onPageChange,
}) => {
    //   console.log(totalItems);
    return (
        <div id={styles.page}>
            <Button
                colorScheme={"white"}
                isDisabled={page === 1}
                onClick={() => onPageChange(page - 1)}>
                <AiOutlineLeft color="black" size={15} />
            </Button>
            <Button colorScheme={"white"} color={"black"}>
                {page}
            </Button>
            <Button
                colorScheme={"white"}
                isDisabled={page === totalItems}
                onClick={() => onPageChange(page + 1)}>
                <AiOutlineRight color="black" size={15} />
            </Button>
        </div>
    );
};

export default Pagination;
