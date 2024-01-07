import BasicFn from "../Stars";
import styles from "./ProductCard.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

import { style } from "@mui/system";

import { useDispatch } from 'react-redux';
import { postCartRequest } from "../../Redux/CartReducer/Action";



const ProductCard = ({ image, name, price, Rating, id }) => {

    const dispatch = useDispatch()
    function AddToCart(e) {
        let data = {
            image,
            name,
            price,
            Rating,
        };

        dispatch(postCartRequest(data))
    }

    return (
        <>

            <div className={styles.parent_card}
              >



                    <img className={styles.product_image} src={image} alt="" />


                <div className={styles.limited_Edition_div}>
                    <p>Limited Edition</p>
                    <div className={styles.cart_image}>
                        <ShoppingCartOutlinedIcon onClick={AddToCart} />
                    </div>
                </div>
                <p className={styles.productCard_name}>{name}</p>
                <div className={styles.ProductCard_price_maindiv}>
                    <p className={styles.productCard_price}>
                        $ {price} <span>Comp. Value: $59.95</span>{" "}
                    </p>
                </div>
                <BasicFn Rating={Rating} />
            </div>
        </>
    );
};

export default ProductCard;
