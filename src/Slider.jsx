import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import menOne from './images/men-01.jpg'
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);



function Slider(props) {
    return (
        <section className="section" id={props.identity}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>{props.latest}</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="men-item-carousel">
                            <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
                                "clickable": true
                            }} navigation={true} className="mySwiper monitor">
                                {
                                    props.men.map(e => {
                                        return (
                                            <SwiperSlide className="item" key={Math.random(e.id)}>
                                                <Link to={`/Single-Product/${e.id}`}>
                                                    <div className="thumb">
                                                        <div className="hover-content">
                                                            <ul>
                                                                <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                                <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                                <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <img src={menOne} alt="" />
                                                    </div>
                                                    <div className="down-content">
                                                        <h4>{e.attributes.Brand}</h4>
                                                        <span>${e.attributes.Price}</span>
                                                        <ul className="stars">
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <Swiper navigation={true} className="mySwiper desktop">
                                {
                                    props.men.map(e => {
                                        return (
                                            <SwiperSlide className="item" key={Math.random(e)}>
                                                <div className="thumb">
                                                    <div className="hover-content">
                                                        <ul>
                                                            <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                            <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                            <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <img src={e.img} alt="" />
                                                </div>
                                                <div className="down-content">
                                                    <h4>{e.product}</h4>
                                                    <span>{e.price}</span>
                                                    <ul className="stars">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Slider