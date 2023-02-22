


import FilterNavbar from "../../Components/FilterNavbar/FilterNavbar"
import Navbar2 from "../../Components/Navbar2/Navbar2"
import styles from "./Clearance.module.css"
import { useEffect, useState } from "react"
import {  getClearanceProducts } from "../../Redux/AppReducer/Action"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard.jsx/ProductCard"


const Clearance = () => {

    const [sidebar,setSidebar]=useState(false)

    const { products, isLoading, isError } = useSelector((store) => {

        return {
            products: store.AppReducer.products,
            isLoading: store.AppReducer.isLoading,
            isError: store.AppReducer.isError,
        }
    }, shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getClearanceProducts())
    }, [])


    function Sidebar(){
        setSidebar(!sidebar)
    }


   // console.log(products)
    return (
        <>
            <div className={styles.Navbar2_mainalignment_div}>
                <div className={styles.clearance_Title_div}>
                    <p>Clearance</p>
                </div>
                <div className={styles.clearance_Sub_div}>
                    <p>Men</p>
                    <p>Women</p>
                </div>
            </div>
            <FilterNavbar Sidebar={Sidebar} />

            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Error...</h1>}
            <div className={styles.product_sidebar_main_div}>


                {sidebar?<div className={styles.sidebar_div}></div>:null}


                <div className={styles.product_div}>
                    {
                        products.map((el) => (
                            <ProductCard {...el} />
                        ))
                    }

                </div>


            </div>


        </>
    )
}

export default Clearance