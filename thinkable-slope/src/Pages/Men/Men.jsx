import FilterNavbar from "../../Components/FilterNavbar/FilterNavbar";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import styles from "./Men.module.css";
import { useEffect, useState } from "react";
import { getMenProducts } from "../../Redux/AppReducer/Action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard.jsx/ProductCard";

const Men = () => {
    const [sidebar, setSidebar] = useState(false);

    const { products, isLoading, isError } = useSelector((store) => {
        return {
            products: store.AppReducer.products,
            isLoading: store.AppReducer.isLoading,
            isError: store.AppReducer.isError,
        };
    }, shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenProducts());
    }, []);

    function Sidebar() {
        setSidebar(!sidebar);
    }

    // console.log(products);
    return (
        <>
            <div className={styles.Navbar2_mainalignment_div}>
                <div className={styles.men_Title_div}>
                    <p>Men</p>
                </div>
                <Navbar2 />
            </div>
            <FilterNavbar Sidebar={Sidebar} />

            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Error...</h1>}
            <div className={styles.product_sidebar_main_div}>
                {sidebar ? <div className={styles.sidebar_div}></div> : null}

                <div className={styles.product_div}>
                    {products.map((el) => (
                        <ProductCard {...el} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Men;
