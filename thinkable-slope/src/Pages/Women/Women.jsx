import FilterNavbar from "../../Components/FilterNavbar/FilterNavbar";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import styles from "./Women.module.css";
import { useEffect, useState } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard.jsx/ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ExtraInfo from "../../Components/ExtraInfo/ExtraInfo";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";
import Pagination from "../../Components/Pagination";
import Loder from "../Loder";


const Women = () => {
    const [sidebar, setSidebar] = useState(false);
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8)

    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const { products, isLoading, isError } = useSelector((store) => {
        return {
            products: store.AppReducer.products,
            isLoading: store.AppReducer.isLoading,
            isError: store.AppReducer.isError,
        };
    }, shallowEqual);
    const dispatch = useDispatch();
    const [searchParams, setSearchParama] = useSearchParams();
    const initialRating = searchParams.getAll("rating");
    const [rating, setRating] = useState(initialRating || []);
    const initOrder = searchParams.get("order");
    const [order, setOrder] = useState(initOrder || "");
    const location = useLocation();

    function handleChange (e) {
        let newRating = [...rating];
        let value = e.target.value;
        if (newRating.includes(value)) {
            newRating.splice(newRating.indexOf(value), 1);
        } else {
            newRating.push(value);
        }
        setRating(newRating);
    }

    useEffect(() => {
        if (rating || order) {
            let param = {};
            order && (param.order = order);
            rating && (param.rating = rating);
            page && (param.page = page);
            setSearchParama(param);
        }
    }, [rating, order, setSearchParama]);

    useEffect(() => {
        if (location) {
            const order = searchParams.get("order");
        }
        let queryParams = {
            params: {
                _sort: order && "price",
                _order: order && order,
                Rating: searchParams.getAll("rating"),
                _page: page,
                _limit: itemsPerPage,
            },
        };
        dispatch(allData(queryParams));
    }, [location.search, page, itemsPerPage]);

    function handleSort (e) {
        setOrder(e.target.value);
    }

    function Sidebar () {
        setSidebar(!sidebar);
    }
    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    // <-------------for Search products start----------->
    const handleSearch = async (e) => {
        e.preventDefault();
        return await axios
            .get(`https://rct-211project.onrender.com/women?q=${value}`)
            .then((res) => {
                setData(res.data);
                setValue("");
            })
            .catch((err) => console.log(err));
    };
    console.log("search", data);

    const allData = (obj) => (dispatch) => {
        axios
            .get("https://rct-211project.onrender.com/women", obj)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    };

    // <-------------for Search products End----------->

    return (
        <>
            <div className={styles.Navbar2_mainalignment_div}>
                <div className={styles.Women_Title_div}>
                    <p>Women Page</p>
                </div>

                <div id={styles.form}>
                    <form id={styles.form_wrapper}>
                        <input
                            id={styles.input}
                            type="text"
                            placeholder="Search by name"
                            className="seacrh"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </form>
                    <button id={styles.btn} onClick={handleSearch}>
                        <SearchIcon />
                        Search
                    </button>
                </div>
                {/* <Navbar2 /> */}
            </div>
            <div id={styles.sidebar}>
                <FilterNavbar handleSort={handleSort} Sidebar={Sidebar} />

                {isLoading && (
                    <img
                        className={styles.Loderimage}
                        src="data:image/png;base64,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"
                        alt=""
                    />
                )}
                {isError && <h1>Error...</h1>}
            </div>

            <div className={styles.product_sidebar_main_div}>
                {sidebar ? (
                    <div className={styles.sidebar_div}>
                        <div className={styles.sidebar_subdiv1_div}>
                            <p>Filter By Rating</p>
                            <div
                                style={{
                                    width: "50%",
                                    margin: "auto",

                                    border: "0px solid gray",
                                }}>
                                <input
                                    type="checkbox"
                                    value={1}
                                    onChange={handleChange}
                                    checked={rating.includes("1")}
                                />
                                <label>
                                    {"\u2605 \u2606 \u2606 \u2606 \u2606"}
                                </label>
                                <br />
                                <input
                                    type="checkbox"
                                    value={2}
                                    onChange={handleChange}
                                    checked={rating.includes("2")}
                                />
                                <label>
                                    {"\u2605 \u2605 \u2606 \u2606 \u2606"}
                                </label>
                                <br />
                                <input
                                    type="checkbox"
                                    value={3}
                                    onChange={handleChange}
                                    checked={rating.includes("3")}
                                />
                                <label>
                                    {"\u2605 \u2605 \u2605 \u2606 \u2606"}
                                </label>
                                <br />
                                <input
                                    type="checkbox"
                                    value={4}
                                    onChange={handleChange}
                                    checked={rating.includes("4")}
                                />
                                <label>
                                    {"\u2605 \u2605 \u2605 \u2605 \u2606"}
                                </label>
                                <br />
                                <input
                                    type="checkbox"
                                    value={5}
                                    onChange={handleChange}
                                    checked={rating.includes("5")}
                                />
                                <label>
                                    {"\u2605 \u2605 \u2605 \u2605 \u2605"}
                                </label>
                                <br />
                            </div>

                            <p>Sort By Size</p>
                            <div style={{ width: "50%", margin: "auto" }}>
                                <input
                                    name="size"
                                    type="radio"
                                    defaultChecked={true}
                                />
                                <label>XS</label>
                                <br />
                                <input name="size" type="radio" />
                                <label>Small</label>
                                <br />
                                <input name="size" type="radio" />
                                <label>Large</label>
                                <br />
                                <input name="size" type="radio" />
                                <label>Medium</label>
                                <br />
                                <input name="size" type="radio" />
                                <label>XL</label>
                                <br />
                            </div>
                        </div>
                    </div>
                ) : null}

                {data.length > 0 ? (
                    <div className={styles.product_div}>
                        {data.map((el) => (
                            <Link to={`/women/${el.id}`}>
                                <ProductCard {...el} />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div
                        style={{
                            width: "50%",
                                margin: "auto ",
                            textAlign:"center"

                        }}>
                        <Loder />
                    </div>
                )}
            </div>
            <div mt={10}>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={data.length}
                    page={page}
                    onPageChange={handlePageChange}
                />
            </div>
            <ExtraInfo />
        </>
    );
};

export default Women;
