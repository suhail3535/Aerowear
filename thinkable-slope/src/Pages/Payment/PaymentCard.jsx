import { useToast } from "@chakra-ui/react";
import styles from "./Payment.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
    deletedataAdd,
    getRequestAddress,
} from "../../Redux/UserReducer/action";

const PaymentCard = ({
    id,
    address1,
    firstname,
    lastname,
    city,
    phone,
    zipcode,
}) => {
    const dispatch = useDispatch();

    const [isButLoading, setIsButLoading] = useState(false);
    const toast = useToast();
    const handleDelete = (id) => {
        // console.log(id)
        setIsButLoading(true);
        setTimeout(() => {
            setIsButLoading(false);
            dispatch(deletedataAdd(id)).then(() =>
                dispatch(getRequestAddress())
            );
            toast({
                title: "Address deleted",
                description: "",
                status: "info",
                variant: "left-accent",
                duration: 2500,
                isClosable: true,
                position: "top",
            });
        }, 2000);
    };

    useEffect(() => {
        dispatch(getRequestAddress());
    }, []);

    return (
        <div id={styles.card}>
            <div>
                <h1>
                    {firstname} {lastname}
                </h1>
                <p>{address1}</p>
                <p>{city}</p>
                <p>{phone}</p>
                <p>{zipcode}</p>
                <input type="checkbox" />
                <div>
                    <button
                        id={styles.deleteButton}
                        onClick={() => handleDelete(id)}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentCard;
