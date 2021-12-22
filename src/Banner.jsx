import LeftBanner from './images/left-banner-image.jpg'
import RightBanner from './images/baner-right-image-01.jpg'
import Baner from './images/baner-right-image-02.jpg'
import Right from './images/baner-right-image-03.jpg'
import Left from './images/baner-right-image-04.jpg'

const products = [
    {
        label:'Women',
        description:'Best Clothes For Women',
        detail:'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
        image:RightBanner
    },
    {
        label:'Men',
        description:'Best Clothes For Men',
        detail:'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
        image:Baner
    },
    {
        label:'Kids',
        description:'Best Clothes For Kids',
        detail:'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
        image:Right
    },
    {
        label:'Accessories',
        description:'Best Trend Accessories',
        detail:'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
        image:Left
    }
]
function Banner(){
    return(
        <div className="main-banner" id="top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left-content">
                        <div className="thumb">
                            <div className="inner-content">
                                <h4>We Are Hexashop</h4>
                                <span>Awesome, clean &amp; creative HTML5 Template</span>
                                <div className="main-border-button">
                                    <a href="#">Purchase Now!</a>
                                </div>
                            </div>
                            <img src={LeftBanner} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">
                            {
                                products.map(e =>{
                                    return (
                                        <div className="col-lg-6" key={Math.random(e)}>
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>{e.label}</h4>
                                                    <span>{e.description}</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>{e.label}</h4>
                                                        <p>{e.detail}</p>
                                                        <div className="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={e.image}/>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Banner