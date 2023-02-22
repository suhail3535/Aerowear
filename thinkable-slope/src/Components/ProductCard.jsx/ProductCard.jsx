import BasicFn from "../Stars";
import styles from "./ProductCard.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductCard = ({ Image, name, Price, Rating, id }) => {
    return (
        <>
            <div>
                <p>{id}</p>
                <img src={Image} alt="" />
                <div className={styles.limited_Edition_div}>
                    <p>Limited Edition</p>
                    <ShoppingCartOutlinedIcon className={styles.cart_image} />
                </div>
                <p className={styles.productCard_name}>{name}</p>
                <div className={styles.ProductCard_price_maindiv}>
                    <p className={styles.productCard_price}>
                        $ {Price} <span>Comp. Value: $59.95</span>{" "}
                    </p>
                </div>
                <BasicFn Rating={Rating} />
            </div>
        </>
    );
};

export default ProductCard;
