import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import first from './images/single-product-01.jpg'
import second from './images/single-product-02.jpg'

function Single() {
    let params = useParams()
    const [product, setProduct] = useState({})
    const getProduct = async () => {
        const response = await axios.get(`http://localhost:1337/api/cloths/${params.id}`)
        setProduct(response.data.data)
        console.log(response.data.data)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <section>
            <div class="page-heading" id="top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="inner-content">
                                <h2>Single Product Page</h2>
                                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="section" id="product">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="left-images">
                                <img src={first} alt="" />
                                <img src={second} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="right-content">
                                <h4>{product.attributes?.Brand}</h4>
                                <span class="price">${product.attributes?.Price}</span>
                                <ul class="stars">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                                <div class="quote">
                                    <i class="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                                </div>
                                <div class="quantity-content">
                                    <div class="left-content">
                                        <h6>No. of Orders</h6>
                                    </div>
                                    <div class="right-content">
                                        <div class="quantity buttons_added">
                                            <input type="button" value="-" class="minus" />
                                            <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                                            <input type="button" value="+" class="plus" />
                                        </div>
                                    </div>
                                </div>
                                <div class="total">
                                    <h4>Total: $210.00</h4>
                                    <div class="main-border-button"><a href="#">Add To Cart</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Single