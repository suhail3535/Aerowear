import React from "react";

import CardCarousel from "../../Components/CardCarousel/CardCarousel";
import Cookies from "../../Components/Cookies/Cookies";
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

                    <div className="grid-cat">
                        <a href="/" className="cat-button">
                            Shop Girls
                        </a>

                        <a href="/" className="cat-button">
                            Girls Shorts <strong>$11.87 &amp; Up</strong>
                        </a>
                        <a href="/" className="cat-button">
                            Shop Guys
                        </a>
                        <a href="/" className="cat-button">
                            Guys Shorts <strong>$12 &amp; Up</strong>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw43c05651/images/homepage/2020/061120/DESKTOP@2x.jpg"
                        alt="summer"
                    />
                </div>

                <div className="lit-bgc-all">
                    <div className="lit-left">
                        <p className="lit-left-text-1">
                            POV:Aero Pride Ambassador
                        </p>
                        <p className="lit-left-text-2">
                            "What makes this community so magical is the sheer
                            resilience againts hate
                            <br />
                            and the unfaltering emission of love, acceptance and
                            inclusivity." <strong>@jillmonica</strong>
                        </p>
                    </div>
                    <div className="lit-right">
                        <a href="/" className="cta-button white no-border">
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="hlf-slide">
                    <div className="left-girl-card">
                        <img
                            src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw3b4b5fcf/images/homepage/2020/060420/060420 GIRLS SHORTS PHOTO@2x.jpg"
                            alt="cute-cozy"
                        />
                    </div>

                    <div className="mid-text-wrap">
                        <p className="mid-text-2">
                            <strong>Girls Shorts</strong>
                        </p>
                        <p className="mid-text-3">
                            $<span style={{ fontSize: "61px" }}>11</span>.87
                            &amp; Up
                        </p>
                        <p className="mid-text-4">
                            Vibrant prints. Must-feel fabrics.
                            <br />
                            One-of-a-kind Aero style.
                        </p>
                        <a href="/" className="btn-card">
                            Girls Shorts
                        </a>
                    </div>
                    <div className="end-crs">
                        <CardCarousel />
                    </div>
                </div>

                <div className="play-add">
                    <div className="ads-all">
                        <div class="ads-all-img-wrapper">
                            <img
                                src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwf9d59bfc/images/homepage/2020/060420/060420 SHOPPING BAG@2x.png"
                                alt="cute-cozy"
                            />
                        </div>
                        <div className="ads-all-text-wrap">
                            <p className="ads-all-text-2">
                                Nice to See You Again!
                            </p>
                            <p className="ads-all-text-3">
                                Certain Aero Locations Are Carefully Reopening
                            </p>
                            <p className="ads-all-text-3">
                                &amp; offering FREE storefront pick up. We're
                                taking extra <br /> precautions to keep our
                                customers and associates safe.
                            </p>

                            <div className="ads-all-cta-wrap">
                                <a href="/stores/">Find A Store</a>
                                <a href="/bopis-lp/">Free Store Pick Up</a>
                                <a href="/coronavirus-landing-page.html/">
                                    Learn More &amp; Stay Safe
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Cookies />
        </div>
    );
};

export default HomePage;
