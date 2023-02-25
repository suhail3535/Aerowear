import styles from "./FilterNavbar.module.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const FilterNavbar = ({ Sidebar, handleSort }) => {
    {
        /*const [searchParams, setSearchParama] = useSearchParams()


    useEffect(() => {

        if( order){
          let param = {}
          order && (param.order=order)

          setSearchParama(param)
        }
      }, [order, setSearchParama])*/
    }

    return (
        <>
            <div className={styles.FilterNavbar_main_div}>
                <div className={styles.Filter_Buttn_div}>
                    <button onClick={Sidebar}>
                        <ChevronDownIcon />
                        Show filter
                    </button>
                </div>
                <div className={styles.Sort_Button_div}>
                    <p>(144 items)</p>

                    <select
                        className={styles.Sort_Button}
                        onChange={handleSort}
                        name="Choose"
                        id="">
                        <option value="">Sort By Price</option>
                        <option value={"asc"}>Low to High</option>
                        <option value={"desc"}>High to Low</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default FilterNavbar;
