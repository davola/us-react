export default function DonMario(){
    return (
        <main className="project donmario static-modal-navigation" data-controller="MainProject" style={{width: "100%", height: "100%", top: "0px", left: "0px"}}>
            <nav className="modal-navigation">
                <div className="brand">
                    <a href="/" className="btn-us">underSCREEN</a>
                </div>
                <div className="title">
                    Don Mario - Productivity App
                    <a href="/work" className="btn-close">X</a>
                </div>
            </nav>

            <div className="project donmario">
                <h1><span>Helping farmers calculate their</span> <span>seed order and find a dealer</span></h1>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3 className="subtitle">I built this productivity mobile cross-platform application and it’s Symfony web application content manager system for  for one of the largest Argentine seed sellers: DonMario Semillas.</h3>
                    </div>
                </div>
                <div className="image">
                    <img src="/uploads/project/donmario.app.jpg" alt="" />
                </div>

                <div className="container-fluid">
                    <hr />
                        <section>
                            <header className="module">
                                <span className="number">01</span>
                                <h2>Mobile Cross-Platform development</h2>
                            </header>
                            <h3>I were in charge of the whole development process:</h3>
                            <div className="row">
                                <ul className="numbered-detail ms">
                                    <li className="col-md-3">
                                        <img src="/uploads/logos/400x200/ui-ux.png" alt="" />
                                            <p><strong>01</strong> Participated in the UX/UI Design process</p></li>
                                    <li className="col-md-3">
                                        <img src="/uploads/logos/400x200/jquery-mobile-w.png" alt="" />
                                            <p><strong>02</strong> HTML mockup &amp; JavaScript development with jQuery Mobile Framework</p></li>
                                    <li className="col-md-3">
                                        <img src="/uploads/logos/400x200/cordoba-white.png" alt="" />
                                            <p><strong>03</strong> Mobile App Building for Android, iOS &amp; Windows phone with Apache CORDOVA Framework</p></li>
                                    <li className="col-md-3">
                                        <img src="/uploads/logos/400x200/symfony.png" alt="" />
                                            <p><strong>04</strong> Backend &amp; API development with Symfony Framework</p></li>
                                </ul>
                            </div>
                        </section>
                        <hr />
                            <section className="pb">
                                <header className="module">
                                    <span className="number">02</span>
                                    <h2>Product Recommendation</h2>
                                </header>
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-2">
                                        <p className="h3-css">The app can recommend the best product available for each distinct user. <br />
                                            I use a 3 step process where the user pick a location, a type of weather and a desired grow
                                            estimation and the app tells which product is the most appropriate and the best date to grow.
                                        </p>
                                    </div>
                                </div>
                                <div className="row mb">
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="row text-center">
                                            <div className="col-md-4"><img className="phone" src="/uploads/project/donmario.product.1-3.jpg" alt="" /></div>
                                            <div className="col-md-4"><img className="phone" src="/uploads/project/donmario.product.2-3.jpg" alt="" /></div>
                                            <div className="col-md-4"><img className="phone" src="/uploads/project/donmario.product.3-3.jpg" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <hr />
                                <section>
                                    <header className="module">
                                        <span className="number">03</span>
                                        <h2>Seeds calculator</h2>
                                    </header>
                                    <div className="row mb2">
                                        <div className="col-md-4 col-md-offset-2">
                                            <p className="mt2">&nbsp;</p>
                                            <p className="h3-css">Based on user input, the built-in calculator estimates the growth performance using these parameters</p>
                                            <p>&nbsp;</p>
                                            <ul>
                                                <li className="h3-css">Type of culture</li>
                                                <li className="h3-css">Seed weight</li>
                                                <li className="h3-css">Line Padding</li>
                                                <li className="h3-css">Grains per spike</li>
                                                <li className="h3-css">% Estimated loss</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <img className="phone" src="/uploads/project/donmario.seed.calculator.jpg" alt="" />
                                        </div>
                                    </div>
                                </section>
                                <hr />
                                    <section>
                                        <header className="module">
                                            <span className="number">04</span>
                                            <h2>Find a dealer</h2>
                                        </header>
                                        <div className="row mb2">
                                            <div className="col-md-10 col-md-offset-1">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <img className="phone" src="/uploads/project/donmario.dealer.jpg" alt="" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img className="phone" src="/uploads/project/donmario.dealer.results.jpg" alt="" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <p className="mt2">&nbsp;</p>
                                                        <p className="h3-css">The app has a built-in reseller directory that helps users find the nearest seed dealer around town.</p>
                                                        <p>&nbsp;</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <hr />
                                        <section>
                                            <header className="module">
                                                <span className="number">05</span>
                                                <h2>Marketing Information</h2>
                                            </header>
                                            <div className="row">
                                                <div className="col-md-8 col-md-offset-2">
                                                    <p className="h3-css">Customers can find and share news about the company, its products, videos, and plant diseases and plagues.</p>
                                                </div>
                                            </div>
                                            <div className="row mb">
                                                <div className="col-md-10 col-md-offset-1">
                                                    <div className="row text-center">
                                                        <div className="col-md-4"><img className="phone" src="/uploads/project/donmario.plagues.share.jpg" alt=""/></div>
                                                        <div className="col-md-4"><img className="phone" src="/uploads/project/donmario.videos.share.jpg" alt=""/></div>
                                                        <div className="col-md-4"><img className="phone" src="/uploads/project/donmario.share.jpg" alt=""/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <hr />
                                            <section>
                                                <header className="module">
                                                    <span className="number">06</span>
                                                    <h2>Symfony Backend</h2>
                                                </header>
                                                <div className="row mb2">
                                                    <div className="col-md-8 col-md-offset-2">
                                                        <p className="h3-css">I build the Backend &amp; HTML services that populates the app contents with SYMFONY.</p>
                                                    </div>
                                                </div>
                                                <div className="row mb2 ms">
                                                    <div className="col-md-4">
                                                        <p>&nbsp;</p>
                                                        <p className="h3-css">The administrators can manage all the app information such as:</p>
                                                        <p>&nbsp;</p>
                                                        <ul>
                                                            <li className="h3-css">Products</li>
                                                            <li className="h3-css">Resellers</li>
                                                            <li className="h3-css">Zones</li>
                                                            <li className="h3-css">News</li>
                                                            <li className="h3-css">Plagues and Diseases</li>
                                                            <li className="h3-css">Videos</li>
                                                            <li className="h3-css">Contacts</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div id="donmarioadmin" className="carousel slide" data-ride="carousel">
                                                            
                                                            <ol className="carousel-indicators">
                                                                <li data-target="#donmarioadmin" data-slide-to="0" className=""></li>
                                                                <li data-target="#donmarioadmin" data-slide-to="1" className="active"></li>
                                                                <li data-target="#donmarioadmin" data-slide-to="2" className=""></li>
                                                                <li data-target="#donmarioadmin" data-slide-to="3" className=""></li>
                                                                <li data-target="#donmarioadmin" data-slide-to="4" className=""></li>
                                                                <li data-target="#donmarioadmin" data-slide-to="5" className=""></li>
                                                            </ol>
                                                            
                                                            <div className="carousel-inner" role="listbox">
                                                                <div className="item">
                                                                    <img src="/uploads/project/dm-0.jpg" alt="" />
                                                                        <div className="carousel-caption"></div>
                                                                </div>
                                                                <div className="item active">
                                                                    <img src="/uploads/project/dm-1.jpg" alt="" />
                                                                        <div className="carousel-caption"></div>
                                                                </div>
                                                                <div className="item">
                                                                    <img src="/uploads/project/dm-2.jpg" alt="" />
                                                                        <div className="carousel-caption"></div>
                                                                </div>
                                                                <div className="item">
                                                                    <img src="/uploads/project/dm-3.jpg" alt="" />
                                                                        <div className="carousel-caption"></div>
                                                                </div>
                                                                <div className="item">
                                                                    <img src="/uploads/project/dm-4.jpg" alt="" />
                                                                        <div className="carousel-caption"></div>
                                                                </div>
                                                                <div className="item">
                                                                    <img src="/uploads/project/dm-5.jpg" alt="" />
                                                                        <div className="carousel-caption"></div>
                                                                </div>
                                                            </div>
                                                            
                                                            <a className="left carousel-control" href="#donmarioadmin" role="button" data-slide="prev">
                                                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="right carousel-control" href="#donmarioadmin" role="button" data-slide="next">
                                                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section className="footer">
                                                <div className="row">
                                                    <a href="https://itunes.apple.com/mg/app/donmario-semillas/id1041009008?mt=8" className="col-md-4 btn-link" target="_blank" rel="noreferrer">
                                                        Check it on App store <span className="btn-arrow right"></span>
                                                    </a>
                                                    <a href="https://play.google.com/store/apps/details?id=com.underscreen.donmario&amp;hl=es_419" className="col-md-4 btn-link" target="_blank" rel="noreferrer">
                                                        Check it on Google Play <span className="btn-arrow right"></span>
                                                    </a>
                                                    <a href="https://www.microsoft.com/en-us/store/apps/donmario-semillas/9nblggh5x6xw" className="col-md-4 btn-link" target="_blank" rel="noreferrer">
                                                        Check it on Windows store <span className="btn-arrow right"></span>
                                                    </a>
                                                </div>
                                                <div className="data">
                                                    <strong>Year:</strong> 2015 <span className="sep">—</span> <strong>Client:</strong> <a href="http://elpixel.com" target="_blank" rel="noreferrer">El pixel</a>, for <a href="http://www.donmario.com/" target="_blank" rel="noreferrer">Don Mario Semillas</a>.
                                                </div>
                                            </section>
                </div>
            </div>
        </main>
    )
}