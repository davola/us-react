export default function Puntovino(){
    return (
        <main className="project puntovino static-modal-navigation" data-controller="MainProject" style={{width: "100%", height: "100%", top: "0px", left: "0px"}}>
            <nav className="modal-navigation">
                <div className="brand">
                    <a href="/" className="btn-us">underSCREEN</a>
                </div>
                <div className="title">
                    Puntovino - Online wine store
                    <a href="/work" className="btn-close">X</a>
                </div>
            </nav>

            <div className="project puntovino">
                <h1><span>Selling a variety of wines</span> <span>and other distilled beverages</span></h1>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3 className="subtitle">I designed and developed this e-commerce website for the beverage retailer Puntovino.</h3>
                    </div>
                </div>
                <div className="image">
                    <img src="/uploads/project/puntovino.ecommerce.jpg" alt="" />
                </div>
            </div>

            <div className="container-fluid">
                <hr />
                    <section>
                        <header className="module">
                            <span className="number">01</span>
                            <h2>E-commerce design &amp; development</h2>
                        </header>
                        <h3>I designed and developed this e-commerce website, including:</h3>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <ul className="numbered-detail">
                                    <li className="col-md-4">
                                        <img src="/uploads/logos/400x200/design.png" alt="" />
                                            <p><strong>01</strong> Website design and HTML mockup</p>
                                    </li>
                                    <li className="col-md-4">
                                        <img src="/uploads/logos/400x200/db-schema.png" alt="" />
                                            <p><strong>02</strong> e-commerce DB schema design</p>
                                    </li>
                                    <li className="col-md-4"><img src="/uploads/logos/400x200/ecommerce.png" alt="" />
                                        <p><strong>03</strong> e-commerce development with PHP and MySQL</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <hr />
                        <section>
                            <header className="module">
                                <span className="number">02</span>
                                <h2>Wines + distilled beverages + packs</h2>
                            </header>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <p className="h3-css">The website uses a different layout for each type of product.</p>
                                    <p className="h3-css">Depending on the type of product being visited, the site shows different search
                                        options allowing the user to narrow his search and find the desired one.</p>
                                </div>
                            </div>
                        </section>
                        <hr />
                            <section>
                                <header className="module">
                                    <span className="number">03</span>
                                    <h2>Cart, promotions &amp; codes</h2>
                                </header>
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="col-md-4">
                                            <h3><strong>01</strong> The cart</h3>
                                            <p>The cart of the site was developed so the users can start adding products asap, without the need to
                                                login or register first. The credentials are asked only once the user ask for checkout.</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h3><strong>02</strong> Promotions</h3>
                                            <p>Following some marketing rules of the company, special promotions are calculated once products
                                                are added to the cart.</p>
                                            <p>Promotions like “buy 6 and pay 4”and others are immediately indicated in the cart when they
                                                occur, incentivizing the user to buy more products.</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h3><strong>03</strong> Codes</h3>
                                            <p>I developed a promotion code system that can calculate discounts with different sale logic like
                                                product precedence, quantities added, brands selected and combinations, date periods, wineries
                                                and more...</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <hr />
                                <section>
                                    <header className="module">
                                        <span className="number">04</span>
                                        <h2>payment gateway</h2>
                                    </header>
                                    <div className="row">
                                        <div className="col-md-8 col-md-offset-2">
                                            <p className="h3-css">I developed online credit card payment with the Argentine payment gateway Mercadopago.</p>
                                            <p className="h3-css">The site also includes other payment methods such as wire transfer and cash on delivery.</p>
                                        </div>
                                    </div>
                                </section>
                                <section className="footer">
                                    <div className="row">
                                        <a href="http://puntovino.com.ar/" rel="nofollow" target="_blank" className="col-md-12 btn-link">
                                            Checkout puntovino.com.ar <span className="btn-arrow right"></span>
                                        </a>
                                    </div>
                                    <div className="data">
                                        <strong>Year:</strong> 2012 <span className="sep">—</span> <strong>Client:</strong> <a href="http://besingular.com.ar" rel="nofollow" target="_blank">BeSingular</a>, for Puntovino
                                    </div>
                                </section>
            </div>
        </main>
    )
}