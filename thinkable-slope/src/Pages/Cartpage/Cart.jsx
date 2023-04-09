import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CartMap from "../../Components/CartMap/Cartmap";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
import styles from "./Cart.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    deleteCartdata,
    getCartProducts,
} from "../../Redux/CartReducer/Action";

import { Spinner, useToast } from "@chakra-ui/react";

const Cart = () => {
    const [quantity1, setquantity] = useState(1);
    const navigate = useNavigate();
    const [isButLoading, setIsButLoading] = useState(false);
    const toast = useToast();

    const { products, isLoading, isError } = useSelector((store) => {
        return {
            products: store.CartReducer.products,
            isLoading: store.CartReducer.isLoading,
            isError: store.CartReducer.isError,
        };
    }, shallowEqual);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartProducts());
    }, []);

      let totalprice = 0;
      for (var i = 0; i < products.length; i++) {
          if (quantity1[i] === undefined) {
              totalprice =(totalprice) + Number(products[i].price);
          } else {
              totalprice += +products[i].price * Number(quantity1[i]);
              console.log(quantity1[i]);
          }
          console.log(products[i].price, quantity1[i]);
      }

    function HandleCartDelete(id) {
        dispatch(deleteCartdata(id)).then(() => {
            dispatch(getCartProducts());
        });
    }

    const handleCheckout = () => {
        setIsButLoading(true);
        setTimeout(() => {
            setIsButLoading(false);
            toast({
                title: "Please Add Your Address ",
                description: "We need your shipping details for delivery ",
                status: "info",
                variant: "left-accent",
                duration: 2500,
                isClosable: true,
                position: "top",
            });
            navigate("/payment");
        }, 2000);
    };

    return (
        <div>
            {products.length === 0 ? (
                <EmptyCart />
            ) : (
                <div id={styles.cart} >
                    <div className={styles.Shopping_cart_heading}>
                        <p>Shopping Bag</p>
                        <p>{products.length} Items</p>
                        </div>
                        
                    <div className={styles.parent}>
                        <div className={styles.card_div}>
                            {products.map((el, i) => (
                                <CartMap
                                    setquantity={setquantity}
                                    key={i}
                                    {...el}
                                    HandleCartDelete={HandleCartDelete}
                                />
                            ))}
                        </div>
                        <div className={styles.Order_summmary_div}>
                            <p>ORDER SUMMARY</p>

                            <p>Subtotal :{totalprice.toFixed(2)} </p>
                            <p>Shipping Economy Ground : $ 5.00</p>
                            <p>Sales Tax : $ 0.65</p>
                            <p>
                                Estimated Total:${" "}
                                {(totalprice + 5 + 0.65).toFixed(2)}
                            </p>

                            <button
                                onClick={handleCheckout}
                                className={styles.checkout_button}>
                                {!isButLoading && `Checkout `}
                                {isButLoading && (
                                    <Spinner
                                        thickness="4px"
                                        speed="0.55s"
                                        emptyColor="gray.200"
                                        color="#17274a"
                                        size="md"
                                    />
                                )}
                            </button>

                            <div className={styles.deliveryinfo_div}>
                                <button className={styles.Paypal_checkout}>
                                    PayPal Checkout
                                </button>
                                <br />
                                <br />

                                <input
                                    type="radio"
                                    name="delivery"
                                    defaultChecked={true}
                                />
                                <label>
                                    Economy Ground <br />
                                    (Delivered In 3 - 7 Business Days.): $5.00
                                </label>
                                <br />
                                <br />

                                <input type="radio" name="delivery" />
                                <label>
                                    Standard Ground <br />
                                    (Delivered In 3 - 5 Business Days.): $8.00
                                </label>
                                <br />
                                <br />

                                <input type="radio" name="delivery" />
                                <label>
                                    {" "}
                                    2 Business Days <br />
                                    (Order By 1:30PM EST, No Weekend
                                    Deliveries): $13.00
                                </label>
                                <br />
                                <br />

                                <input type="radio" name="delivery" />
                                <label>
                                    {" "}
                                    Overnight <br />
                                    (Order By 1:30pm EST, No Weekend
                                    Deliveries): $25.00
                                </label>
                                <br />
                                <br />

                                <p>
                                    4 interest-free payments of $4.52 with
                                    Klarna. Learn More
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
