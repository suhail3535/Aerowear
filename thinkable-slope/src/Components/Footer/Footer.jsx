import React from "react";
import style from "./Footer.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <hr />
                <div className="foot-all">
                    <div className="foot-one">
                        <div className="foot-one-left">
                            <div>
                                <FmdGoodOutlinedIcon />
                                <a href="">Store Locator</a>
                            </div>
                            <div>
                                <ContentPasteSearchOutlinedIcon />
                                <a href="">Order Status</a>
                            </div>
                            <div>
                                <CardGiftcardOutlinedIcon />
                                <a href="">Gift Card/Balance</a>
                            </div>
                            <div>
                                <ErrorOutlineOutlinedIcon />
                                <a href="">Feedback</a>
                            </div>
                        </div>
                        <div className="foot-one-right"></div>
                    </div>
                    <div className="foot-two">
                        <a href="">Don't Sell My Information</a>
                        <a href="">Terms of Use</a>
                        <a href="">Accessibility Statement</a>
                        <a href="">Privacy Policy</a>
                        <a href="">CA Transparency Act</a>
                        <a href="">© 2023 Aerodraw. All Rights Reserved.</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
