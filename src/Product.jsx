import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import menOne from './images/men-01.jpg'

function Products() {       
    const [products, setProducts] = useState([])
    const allProducts =  async () => {
        const response = await axios.get('http://localhost:1337/api/cloths')
        setProducts(response.data.data)
        console.log(response.data.data);
    }
   useEffect(() => {
    allProducts()
   }, [])


    return (
        <section>
            <div class="page-heading" id="top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="inner-content">
                                <h2>Check Our Products</h2>
                                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="section" id="products">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>Our Latest Products</h2>
                                <span>Check out all of our products.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">

                        {
                            products.map(e => {
                                return (

                                    <div class="col-lg-4" key={Math.random()}>
                                        <Link to={`/Single-Product/${e.id}`}>
                                            <div class="item">
                                                <div class="thumb">
                                                    <div class="hover-content">
                                                        <ul>
                                                            <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                            <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <img src={menOne} alt="" />
                                                </div>
                                                <div class="down-content">
                                                    <h4>{e.attributes.Brand}</h4>
                                                    <span>${e.attributes.Price}</span>
                                                    <ul class="stars">
                                                        <li><i class="fa fa-star"></i></li>
                                                        <li><i class="fa fa-star"></i></li>
                                                        <li><i class="fa fa-star"></i></li>
                                                        <li><i class="fa fa-star"></i></li>
                                                        <li><i class="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                )
                            })
                        }

                        <div class="col-lg-12">
                            <div class="pagination">
                                <ul>
                                    <li>
                                        <a href="#">1</a>
                                    </li>
                                    <li class="active">
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#">{">"}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Products