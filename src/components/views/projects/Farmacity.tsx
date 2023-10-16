export default function Farmacity() {
    return (
        <main className="project farmacity static-modal-navigation" data-controller="MainProject"
              style={{width: "100%", height: "100%", top: "0px", left: "0px"}}>

            <nav className="modal-navigation">
                <div className="brand">
                    <a href="/" className="btn-us">underSCREEN</a>
                </div>
                <div className="title">
                    Farmacity - Press kit mobile app
                    <a href="/work" className="btn-close">X</a>
                </div>
            </nav>

            <div className="project farmacity">
                <h1><span>Nearest branch locator</span> <span>and company information</span></h1>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3 className="subtitle">I developed this mobile cross-platform application for the biggest
                            pharmacy franchise in Buenos Aires.</h3>
                    </div>
                </div>
                <div className="image">
                    <img src="/uploads/project/farmacity.app.jpg" alt=""/>
                </div>
            </div>

            <div className="container-fluid">
                <hr/>
                <section>
                    <header className="module">
                        <span className="number">01</span>
                        <h2>Mobile &amp; CMS development</h2>
                    </header>
                    <div className="row">
                        <h3 className="col-md-8 col-md-offset-2">I developed this hybrid mobile app and its content
                            management system:</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <ul className="numbered-detail">
                                <li className="col-md-4">
                                    <img src="/uploads/logos/400x200/jquery-mobile-w.png"
                                         alt=""/>
                                    <p><strong>01</strong> HTML mockup &amp; JavaScript development with jQuery Mobile
                                        Framework</p></li>
                                <li className="col-md-4">
                                    <img src="/uploads/logos/400x200/cordoba-white.png" alt=""/>
                                    <p><strong>02</strong> Mobile App Building for Android, iOS &amp; Windows phone with
                                        Apache CORDOVA Framework</p></li>
                                <li className="col-md-4">
                                    <img src="/uploads/logos/400x200/angular.png" alt=""/>
                                    <p><strong>03</strong> Content management system with PHP and MySQL</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <hr/>
                <section>
                    <header className="module">
                        <span className="number">02</span>
                        <h2>Branch locator</h2>
                    </header>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-2">
                            <p className="mt2">&nbsp;</p><p className="mt">&nbsp;</p>
                            <p className="h3-css">The app uses the device GPS to find the closest franchise, or allows
                                the user to find one by location.</p>
                        </div>
                        <div className="col-md-4">
                            <img className="phone" src="/uploads/project/farmacity-gps.jpg"
                                 alt=""/>
                        </div>
                    </div>
                </section>
                <hr/>
                <section>
                    <header className="module">
                        <span className="number">03</span>
                        <h2>Marketing material</h2>
                    </header>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-2"><img className="phone"
                                                                       src="/uploads/project/farmacity-marketing-material.jpg"
                                                                       alt=""/></div>
                        <div className="col-md-4">
                            <p className="mt2">&nbsp;</p><p className="mt">&nbsp;</p>
                            <p className="h3-css">The app offers a lot of different marketing materials and lets the
                                user share them by email.</p>
                        </div>
                    </div>
                </section>
                <hr/>
                <section>
                    <header className="module">
                        <span className="number">04</span>
                        <h2>Company Info</h2>
                    </header>
                    <div className="row">
                        <div className="col-md-3 col-md-offset-2">
                            <p className="mt">&nbsp;</p>
                            <p className="h3-css">The app displays the latest news about the franchise and information
                                about company employees.</p>
                        </div>
                        <div className="col-md-4 col-md-offset-1">
                            <div id="farmacity-app-slide" className="carousel phone slide" data-ride="carousel">

                                <ol className="carousel-indicators">
                                    <li data-target="#farmacity-app-slide" data-slide-to="0" className="active"></li>
                                    <li data-target="#farmacity-app-slide" data-slide-to="1" className=""></li>
                                    <li data-target="#farmacity-app-slide" data-slide-to="2" className=""></li>
                                </ol>

                                <style>


                                </style>
                                <div className="carousel-inner phone" role="listbox">
                                    <div className="item active">
                                        <img src="/uploads/project/farmacity-employees.jpg"/>
                                        <div className="carousel-caption"></div>
                                    </div>
                                    <div className="item">
                                        <img src="/uploads/project/farmacity-news.jpg"/>
                                        <div className="carousel-caption"></div>
                                    </div>
                                    <div className="item">
                                        <img
                                            src="/uploads/project/farmacity-responsabilidad-social.jpg"/>
                                        <div className="carousel-caption"></div>
                                    </div>
                                </div>

                                <a className="left carousel-control" href="#farmacity-app-slide" role="button"
                                   data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control" href="#farmacity-app-slide" role="button"
                                   data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <hr id="app-demo"/>
                <section className="footer">
                    <div className="data">
                        <strong>Year:</strong> 2012 <span className="sep">—</span> <strong>Client:</strong> <a
                        href="http://www.kasiopea.net/" rel="nofollow" target="_blank">Kasiopea</a>, for <a
                        href="http://www.farmacity.com.ar/" target="_blank" rel="nofollow">Farmacity SA</a>
                    </div>
                </section>
            </div>
        </main>
    )
}