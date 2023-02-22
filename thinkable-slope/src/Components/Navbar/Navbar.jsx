import React from "react";
import style from "./Navbar.css";

const Navbar = () => {



    return (
        <div>
            {/* ---PreNavBar--- */}

            <div className="pre-header pj6-padding-y-xs js-pre-header">
                <div className="pj6-container pj6-max-width-lg pj6-position-relative">
                    <div className="pj6-text-component pj6-text-center pj6-text-sm pj6-padding-x-lg">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.{" "}
                            <a href="#0" className="pj6-color-inherit">
                                Learn more
                            </a>
                        </p>
                    </div>

                    {/* <button className="pre-header__close-btn js-pre-header__close-btn js-tab-focus">
                        <svg
                            className="pre-header__icon pj6-icon"
                            viewBox="0 0 20 20">
                            <title>Close header banner</title>
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2">
                                <line x1="4" y1="4" x2="16" y2="16" />
                                <line x1="16" y1="4" x2="4" y2="16" />
                            </g>
                        </svg>
                    </button> */}
                </div>
            </div>

            {/* ---PreNavBar--- */}
        </div>
    );
};

export default Navbar;
