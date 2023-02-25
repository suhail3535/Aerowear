import { useNavigate } from "react-router-dom";

import React, { useEffect } from "react";

import CartMap from "../../Components/CartMap/Cartmap";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
import styles from "./Cart.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    deleteCartdata,
    getCartProducts,
} from "../../Redux/CartReducer/Action";
import { Link } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();

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

    let totalprice;
    if (products.length == 0) {
        totalprice = 0;
    } else {
        totalprice = products.reduce((acc, el) => {
            return acc + Number(el.price);
        }, 0);
    }

    function HandleCartDelete(id) {
        dispatch(deleteCartdata(id)).then(() => {
            dispatch(getCartProducts());
        });
    }

    const handleCheckout = () => {
        navigate("/payment");
    };

    return (
        <div>
            {products.length == 0 ? (
                <EmptyCart />
            ) : (
                <div>
                    <div className={styles.Shopping_cart_heading}>
                        <p>Shopping Bag</p>
                        <p>{products.length} Items</p>
                    </div>
                    <div style={{ display: "flex", width: "100%" }}>
                        <div style={{ width: "75%" }}>
                            {products.map((el, i) => (
                                <CartMap
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
                            <Link to="/payment">
                                <button className={styles.checkout_button}>
                                    Checkout
                                </button>
                            </Link>

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
