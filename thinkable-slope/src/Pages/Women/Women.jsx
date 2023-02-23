import FilterNavbar from "../../Components/FilterNavbar/FilterNavbar";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import styles from "./Women.module.css";
import { useEffect, useState } from "react";
import { getWomenProducts } from "../../Redux/AppReducer/Action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard.jsx/ProductCard";

const Women = () => {
    const [sidebar, setSidebar] = useState(false);

    const { products, isLoading, isError } = useSelector((store) => {
        return {
            products: store.AppReducer.products,
            isLoading: store.AppReducer.isLoading,
            isError: store.AppReducer.isError,
        };
    }, shallowEqual);

    const dispatch = useDispatch();
    // console.log(products);

    useEffect(() => {
        dispatch(getWomenProducts());
    }, []);

    function Sidebar() {
        setSidebar(!sidebar);
    }

    // console.log(products);
    return (
        <>
            <div className={styles.Navbar2_mainalignment_div}>
                <div className={styles.Women_Title_div}>
                    <p>Women</p>
                </div>
                <Navbar2 />
            </div>
            <FilterNavbar Sidebar={Sidebar} />

            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Error...</h1>}
            <div className={styles.product_sidebar_main_div}>
                {sidebar ? <div className={styles.sidebar_div}></div> : null}

                <div className={styles.product_div}>
                    {products.reverse().map((el) => (
                        <ProductCard {...el} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Women;
