import React, { useEffect } from "react";
import Cookies from "../../Components/Cookies/Cookies";
// import Cookies from "../..Components/Cookies/Cookies.jsx"
import style from "./HomePage.css";

const HomePage = () => {
    return (
        <div className="main-page">
            <div className="main-home">
                <div className="main-add">
                    <div className="left-add">
                        <img
                            className="bgc-top"
                            src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw54235726/images/homepage/2020/060420/ONENESS-DESKTOP-ANIMATION.gif"
                            alt=""
                        />
                    </div>
                    <div className="right-add">
                        <p className="text-1">
                            STAND TALL. STAND PROUD. STAND OUT.
                        </p>
                        <p className="text-2">
                            Take pride in who you are
                            <br />
                            Celebrate individuality together.
                        </p>
                    </div>
                </div>

                <div className="banner">
                    <div className="text-add">
                        <p className="add-text-2">50-70% Off Everything!</p>
                        <p className="add-text-3">
                            &amp; Our Biggest Shorts Event of The Season!
                        </p>
                        <p className="add-text-4">
                            <sup>*</sup>
                            <span>Exclusions Apply</span>
                        </p>
                    </div>

                    <div className="cta">
                        <a href="" className="cta-button white no-border">
                            Shop Girls
                        </a>

                        <a href="" className="cta-b">
                            Girls Shorts <strong>$11.87 &amp; Up</strong>
                        </a>
                        <a href="" className="cta-bu">
                            Shop Guys
                        </a>
                        <a href="" className="cta-but">
                            Guys Shorts <strong>$12 &amp; Up</strong>
                        </a>
                    </div>
                </div>
            </div>

<Cookies />
        </div>
    );
};

export default HomePage;
