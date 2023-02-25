import React from "react";
import CartMap from "../../Components/CartMap/Cartmap";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
import styles from "./Cart.module.css";
const Cart = () => {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    let totalprice;
    if (cartData == null) {
        totalprice = 0;
    } else {
        totalprice = cartData.reduce((acc, el) => {
            return acc + Number(el.price);
        }, 0);
    }
    function HandleRemove(i) {
        console.log(i);
    }

    return (
        <div>
            {cartData.length == 0 ? (
                <EmptyCart />
            ) : (
                <div>
                    <div className={styles.Shopping_cart_heading}>
                        <p>Shopping Bag</p>
                        <p>{cartData.length} Items</p>
                    </div>
                    <div style={{ display: "flex", width: "100%" }}>
                        <div style={{ width: "75%" }}>
                            {cartData.map((el, i) => (
                                <CartMap
                                    key={i}
                                    HandleRemove={HandleRemove}
                                    {...el}
                                />
                            ))}
                        </div>

                        <div className={styles.Order_summmary_div}>
                            <p>ORDER SUMMARY</p>
                            <p>Subtotal : {totalprice}</p>
                            <p>Shipping Economy Ground : $ 5.00</p>
                            <p>Sales Tax : $ 0.65</p>
                            <p>
                                Estimated Total:${" "}
                                {(totalprice + 5.0 + 0.65).toFixed(2)}
                            </p>
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
