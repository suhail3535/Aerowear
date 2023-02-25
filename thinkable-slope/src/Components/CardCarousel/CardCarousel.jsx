import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./CardCarousel.css";

const CardCarousel = () => {
    const settings = {
        // fade: true,
        // speed: 500, // ms
        autoplay: true,
        // initialSlide: 3,
        dost: true,
        lazyLoad: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 2000,
    };
    return (
        <div className="card-carousel">
            <Slider {...settings}>
                <div className="single-card">
                    <img
                        className="img-card"
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd31e0e5c/images/jeans-guide/031320-girls-shorts-guide/CURVY.jpg"
                        alt=""
                    />
                    <h4 className="text-card">
                        Curvy <br />
                        New!
                    </h4>
                </div>
                <div className="single-card">
                    <img
                        className="img-card"
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwe4c9367c/images/jeans-guide/031320-girls-shorts-guide/MOM.jpg"
                        alt=""
                    />
                    <h4 className="text-card">
                        Mom <br />
                        New!
                    </h4>
                </div>
                <div className="single-card">
                    <img
                        className="img-card"
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw263e01e0/images/jeans-guide/031320-girls-shorts-guide/BERMUDA.jpg"
                        alt=""
                    />
                    <h4 className="text-card">
                        Vintage High Rise
                    </h4>
                </div>
                <div className="single-card">
                    <img
                        className="img-card"
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw1d7d9d9a/images/jeans-guide/031320-girls-shorts-guide/VINTAGE%20HIGH%20RISE.jpg"
                        alt=""
                    />
                    <h4 className="text-card">
                        Bermuda
                    </h4>
                </div>
                <div className="single-card">
                    <img
                        className="img-card"
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw9e6b4506/images/jeans-guide/031320-girls-shorts-guide/MIDI.jpg"
                        alt=""
                    />
                    <h4 className="text-card">
                        Midi
                    </h4>
                </div>
                <div className="single-card">
                    <img
                        className="img-card"
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw899a600b/images/jeans-guide/031320-girls-shorts-guide/TWILL%20MIDI.jpg"
                        alt=""
                    />
                    <h4 className="text-card">
                        Twill Midi
                    </h4>
                </div>
            </Slider>
        </div>
    );
};
export default CardCarousel;
