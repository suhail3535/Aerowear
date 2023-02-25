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
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw8287ef13/images/shorts-guide/2020/guys-shorts-guide/BEACH%20CHINO.jpg"
                        alt=""
                    />
                    <h4 className="text-card">Long Cargo</h4>
                </div>
                <div className="single-card">
                    <img
                        className="img-card"
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw54f0dee5/images/shorts-guide/2020/guys-shorts-guide/SLIM%20CUT-OFF.jpg"
                        alt=""
                    />
                    <h4 className="text-card">Slim Cut-Off</h4>
                </div>
                <div className="single-card">
                    <img
                        className="img-card"
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwc908e3b8/images/shorts-guide/2020/guys-shorts-guide/LONG%20CARGO.jpg"
                        alt=""
                    />
                    <h4 className="text-card">Beach Chino</h4>
                </div>
                <div className="single-card">
                    <img
                        className="img-card"
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw9619c8f9/images/shorts-guide/2020/guys-shorts-guide/SLIM%20CUFFED.jpg"
                        alt=""
                    />
                    <h4 className="text-card">Slim Cuffed</h4>
                </div>
                <div className="single-card">
                    <img
                        className="img-card"
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw323348c8/images/shorts-guide/2020/guys-shorts-guide/CLASSIC%20CHINO.jpg"
                        alt=""
                    />
                    <h4 className="text-card">Classic Chino</h4>
                </div>
                <div className="single-card">
                    <img
                        className="img-card"
                        src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd70572ab/images/shorts-guide/2020/guys-shorts-guide/LONGBOARD%20CHINO.jpg"
                        alt=""
                    />
                    <h4 className="text-card">Long Board Chino</h4>
                </div>
            </Slider>
        </div>
    );
};
export default CardCarousel;
