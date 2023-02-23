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
                                <FmdGoodOutlinedIcon style={{border:"0px solid green"}} />
                                <p>Store Locator</p>
                            </div>
                            <div>
                                <ContentPasteSearchOutlinedIcon style={{border:"0px solid green"}} />
                                <p>Order Status</p>
                            </div>
                            <div>
                                <CardGiftcardOutlinedIcon style={{border:"0px solid green"}} />
                                <p>Gift Card/Balance</p>
                            </div>
                            <div>
                                <ErrorOutlineOutlinedIcon style={{border:"0px solid green"}} />
                                <p>Feedback</p>
                            </div>
                        </div>
                        <div className="foot-one-mid">
                            <div>
                                <h3>Shopping Help</h3>
                                <p>Help Desk</p>
                                <p>Returns & Exchanges</p>
                                <p>Prices & Price Match Policy</p>
                                <p>Shipping and Handling</p>
                                <p>Size Charts</p>
                                <p>Buy Online, Pick Up in Store</p>
                                <p>Student Discount</p>
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
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
