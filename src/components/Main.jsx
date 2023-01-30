import React from 'react'

const Main = () => {
    return (
        <div className='main'>
            <h2 className='main-title'>Happy Wednesday, Guest</h2>
            <span className='main-small-title'>You have 0 to spend as you choose!</span>

            <div className='promotions-card'>
                <div className='promotions-header'>
                    <h4>Promotions</h4>
                </div>
                    <div className='row'>
                    <div className='swiper'>
                        <div className='swiper-wrapper'>
                        <div className='swiper-slide'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/primers/2022/12/29/12/41/c29431de-75cb-44ba-baf7-924ef88cc3e0.jpg" alt="" className="" />
                        </div>
                        <div className='swiper-slide'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/primers/2023/1/11/15/31/aa2e3bdd-d47e-4d49-9237-8cf17ee5f639.png" alt="" className="" />
                        </div>
                        <div className='swiper-slide'>
                            <img src="https://cdn.avo.africa/primers/2022/12/22/5/22/f4d06926-63f1-43d6-8ae0-483a5350ec8c.jfif" alt="" className="" />
                        </div>
                        <div className='swiper-slide'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/primers/2023/1/10/6/53/f784b523-fe84-4fb0-becd-b0393e3dba1e.jpg" alt="" className="" />
                        </div>
                        <div className='swiper-slide'>
                            <img src="https://cdn.avo.africa/primers/2022/12/22/5/21/d6a3453c-fa45-4b73-b9f2-828e76bae9b0.jfif" alt="" className="" />
                        </div>
                        </div>

                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                    <div class="swiper-scrollbar"></div>
                    </div>
                </div>
            </div>

            <div className='card-detail'>
                <h4>Shopping Deals  <span>View more</span></h4>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className='row'>
                    <div className='card-product'>
                        <div className='product-image'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/2022/4/8/14/45/d720aa63-c121-403b-bf7f-08cbdaca05b5.jpg" alt="" className="" />
                        </div>
                        <div className='sale-discount'>-29% off</div>
                        <div className='product-name'>Nutribullet 900 Series - 690-000900-A</div>
                        <div className='product-brief-name'>Hirschs Small Applicances</div>
                        <div className='product-price'>R2, 199.00</div>
                        <div className='product-credit'>R214 p/m on credit</div>
                        <div className='product-expired-price'>R3,099.00</div>
                        <button className='btn-deals'>Add to cart</button>
                    </div>

                    <div className='card-product'>
                        <div className='product-image'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/2022/8/25/9/19/7c3a587a-3ed6-41b2-8288-d8a654918bf8.PNG" alt="" className="" />
                        </div>
                        <div className='sale-discount'>-29% off</div>
                        <div className='product-name'>Nutribullet 900 Series - 690-000900-A</div>
                        <div className='product-brief-name'>Hirschs Small Applicances</div>
                        <div className='product-price'>R2, 199.00</div>
                        <div className='product-credit'>R214 p/m on credit</div>
                        <div className='product-expired-price'>R3,099.00</div>
                        <button className='btn-deals'>Add to cart</button>
                    </div>

                    <div className='card-product'>
                        <div className='product-image'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/2022/4/5/14/38/75033e4e-ed60-45e6-8709-0f92852770de.jpg" alt="" className="" />
                        </div>
                        <div className='sale-discount'>-29% off</div>
                        <div className='product-name'>Nutribullet 900 Series - 690-000900-A</div>
                        <div className='product-brief-name'>Hirschs Small Applicances</div>
                        <div className='product-price'>R2, 199.00</div>
                        <div className='product-credit'>R214 p/m on credit</div>
                        <div className='product-expired-price'>R3,099.00</div>
                        <button className='btn-deals'>Add to cart</button>
                    </div>

                    <div className='card-product'>
                        <div className='product-image'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/primers/2023/1/5/17/46/10993007-5bda-4c86-954c-3804485b1fcd.PNG" alt="" className="" />
                        </div>
                        <div className='sale-discount'>-29% off</div>
                        <div className='product-name'>Nutribullet 900 Series - 690-000900-A</div>
                        <div className='product-brief-name'>Hirschs Small Applicances</div>
                        <div className='product-price'>R2, 199.00</div>
                        <div className='product-credit'>R214 p/m on credit</div>
                        <div className='product-expired-price'>R3,099.00</div>
                        <button className='btn-deals'>Add to cart</button>
                    </div>

                    <div className='card-product'>
                        <div className='product-image'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/primers/2022/10/26/11/35/dc39a6c6-3df8-4239-92ca-c5c56779d6ee.PNG" alt="" className="" />
                        </div>
                        <div className='sale-discount'>-29% off</div>
                        <div className='product-name'>Nutribullet 900 Series - 690-000900-A</div>
                        <div className='product-brief-name'>Hirschs Small Applicances</div>
                        <div className='product-price'>R2, 199.00</div>
                        <div className='product-credit'>R214 p/m on credit</div>
                        <div className='product-expired-price'>R3,099.00</div>
                        <button className='btn-deals'>Add to cart</button>
                    </div>

                    <div className='card-product'>
                        <div className='product-image'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/2022/8/25/9/19/7c3a587a-3ed6-41b2-8288-d8a654918bf8.PNG" alt="" className="" />
                        </div>
                        <div className='sale-discount'>-29% off</div>
                        <div className='product-name'>Nutribullet 900 Series - 690-000900-A</div>
                        <div className='product-brief-name'>Hirschs Small Applicances</div>
                        <div className='product-price'>R2, 199.00</div>
                        <div className='product-credit'>R214 p/m on credit</div>
                        <div className='product-expired-price'>R3,099.00</div>
                        <button className='btn-deals'>Add to cart</button>
                    </div>

                    <div className='card-product'>
                        <div className='product-image'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/2022/8/25/9/19/7c3a587a-3ed6-41b2-8288-d8a654918bf8.PNG" alt="" className="" />
                        </div>
                        <div className='sale-discount'>-29% off</div>
                        <div className='product-name'>Nutribullet 900 Series - 690-000900-A</div>
                        <div className='product-brief-name'>Hirschs Small Applicances</div>
                        <div className='product-price'>R2, 199.00</div>
                        <div className='product-credit'>R214 p/m on credit</div>
                        <div className='product-expired-price'>R3,099.00</div>
                        <button className='btn-deals'>Add to cart</button>
                    </div>

                    <div className='card-product'>
                        <div className='product-image'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/2022/8/25/9/19/7c3a587a-3ed6-41b2-8288-d8a654918bf8.PNG" alt="" className="" />
                        </div>
                        <div className='sale-discount'>-29% off</div>
                        <div className='product-name'>Nutribullet 900 Series - 690-000900-A</div>
                        <div className='product-brief-name'>Hirschs Small Applicances</div>
                        <div className='product-price'>R2, 199.00</div>
                        <div className='product-credit'>R214 p/m on credit</div>
                        <div className='product-expired-price'>R3,099.00</div>
                        <button className='btn-deals'>Add to cart</button>
                    </div>

                    <div className='card-product'>
                        <div className='product-image'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/2022/8/25/9/19/7c3a587a-3ed6-41b2-8288-d8a654918bf8.PNG" alt="" className="" />
                        </div>
                        <div className='sale-discount'>-29% off</div>
                        <div className='product-name'>Nutribullet 900 Series - 690-000900-A</div>
                        <div className='product-brief-name'>Hirschs Small Applicances</div>
                        <div className='product-price'>R2, 199.00</div>
                        <div className='product-credit'>R214 p/m on credit</div>
                        <div className='product-expired-price'>R3,099.00</div>
                        <button className='btn-deals'>Add to cart</button>
                    </div>

                    <div className='card-product'>
                        <div className='product-image'>
                            <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/2022/8/25/9/19/7c3a587a-3ed6-41b2-8288-d8a654918bf8.PNG" alt="" className="" />
                        </div>
                        <div className='sale-discount'>-29% off</div>
                        <div className='product-name'>Nutribullet 900 Series - 690-000900-A</div>
                        <div className='product-brief-name'>Hirschs Small Applicances</div>
                        <div className='product-price'>R2, 199.00</div>
                        <div className='product-credit'>R214 p/m on credit</div>
                        <div className='product-expired-price'>R3,099.00</div>
                        <button className='btn-deals'>Add to cart</button>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className='small-card'>
                <h4>Explore our Shop</h4>
                <div className='row'>
                    <span className='card-one'>
                        <p>Home & Garden</p></span>
                    <span className='card-one'>
                        <p>Groceries & Household</p></span>
                    <span className='card-one'>
                        <p>Greenbacks Exclusive</p></span>
                    <span className='card-one'>
                        <p>Jewellery</p></span>
                    <span className='card-one'>
                        <p>Office & Stationery</p></span>
                    <span className='card-one'>
                        <p>Deals</p></span>
                    <span className='card-one'>
                        <p>Load Shedding</p></span>
                    <span className='card-one'>
                        <p>Liqour</p></span>
                    <span className='card-one'>
                        <p>Tech</p></span>
                    <span className='card-one'>
                        <p>Fashion</p></span>
                    <span className='card-one'>
                        <p>Gaming</p></span>
                    <span className='card-one'>
                        <p>Beauty</p></span>
                    <span className='card-one'>
                        <p>DIY</p></span>
                    <span className='card-one'>
                        <p>Experince</p></span>
                    <span className='card-one'>
                        <p>Baby</p></span>
                    <span className='card-one'>
                        <p>Books</p></span>
                    <span className='card-one'>
                        <p>Bags</p></span>
                    <span className='card-one'>
                        <p>Travel</p></span>
                    <span className='card-one'>
                        <p>Sports & Hobbies</p></span>
                </div>
            </div>

            <div className='takeaway-card'>
                <h4>Takeaway stores near you  <span>View more</span></h4>
                <div className='body'>
                    <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/primers/2022/9/18/9/58/f0a3898c-91b5-4fc6-b4cf-5676c381f510.jpg" alt="" className="" />
                </div>
            </div>

            <div className='featured-stores'>
                <h4>Featured Stores</h4>
                <div className='body'>
                    <img src="https://cdn.avo.africa/cdn-cgi/image/w=580/primers/2022/11/24/6/55/7cdb491b-f745-4cb4-ba9a-6169fdbd4bc4.png" alt="" className="" />
                </div>
            </div>
        </div>
    )
}

export default Main