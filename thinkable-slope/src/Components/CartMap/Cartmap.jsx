import styles from "./Cartmap.module.css";

function CartMap({ image, price, name, id, HandleCartDelete }) {
    return (
        <>
            <div className={styles.cart_main_div}>
                <div className={styles.cart_image_div}>
                    <p className={styles.subdiv_headings}>ITEM</p>
                    <img width="90%" src={image} alt="" />
                </div>
                <div className={styles.productInfo_div}>
                    <p>{name}</p>
                    <p>Color - Black Fox</p>
                    <p>Size - x-small</p>
                    <div>
                        <input
                            type="radio"
                            name="Shiping"
                            id=""
                            defaultChecked={true}
                        />
                        <label>Ship To Me</label>
                        <br />
                        <input type="radio" name="Shiping" id="" />
                        <label>In-Store Pickup</label>
                    </div>
                </div>
                <div className={styles.Quantity_div}>
                    <p className={styles.subdiv_headings}>QUANTITY</p>
                    <select
                        style={{
                            borderRadius: "15px",
                        }}
                        name=""
                        id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                    </select>
                    <p onClick={() => HandleCartDelete(id)}>Remove</p>
                    <p>In Stock</p>
                </div>
                <div className={styles.Price_div}>
                    <p className={styles.subdiv_headings}>PRICE</p>
                    <p> $ {price}</p>
                    <p>
                        Comp.
                        <br /> Value:$24.95
                    </p>
                </div>
            </div>
        </>
    );
}

export default CartMap;
