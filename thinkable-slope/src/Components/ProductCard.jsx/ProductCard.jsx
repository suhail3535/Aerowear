import BasicFn from "../Stars"
import styles from "./ProductCard.module.css"

const ProductCard=({image,name,price,Rating,id})=>{
return(
    <>
    <div>   
     <p>{id}</p>
    <img  src={image} alt="" />
    <div className={styles.limited_Edition_div}>
        <p>Limited Edition</p>
        <img  className={styles.cart_image}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxi_iyZY7EC6BEEFo5YZtP0rdOoxp4PRtqhQ&usqp=CAU" alt="" />
    </div>
     <p className={styles.productCard_name}>{name}</p>
     <div className={styles.ProductCard_price_maindiv}>
     <p className={styles.productCard_price}>$ {price} <span>Comp. Value: $59.95</span> </p>
     </div>
     <BasicFn Rating={Rating}/>
    </div>
     
    </>
)

}

export default ProductCard