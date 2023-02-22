
import FilterNavbar from "../../Components/FilterNavbar/FilterNavbar"
import Navbar2 from "../../Components/Navbar2/Navbar2"
import styles from "./Women.module.css"
import { useEffect } from "react"
import { getProducts } from "../../Redux/AppReducer/Action"
import { shallowEqual, useDispatch, useSelector } from "react-redux";


const Women = () => {

    const { products, isLoading, isError } = useSelector((store) => {
       
        return {
            products: store.AppReducer.products,
            isLoading: store.AppReducer.isLoading,
            isError: store.AppReducer.isError,
        }
    }, shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts)
    }, [])

   // console.log(products)


   console.log(products)
    return (
        <>
            <div className={styles.Navbar2_mainalignment_div}>
                <div className={styles.Women_Title_div}>
                    <p>Women</p>
                </div>
                <Navbar2 />
            </div>
            <FilterNavbar />

            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Error...</h1>}
           
        </>
    )
}

export default Women