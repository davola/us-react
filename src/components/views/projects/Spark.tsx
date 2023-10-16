export default function Spark(){
    return (
        <main className="project spark static-modal-navigation" data-controller="MainProject" style={{width: "100%", height: "100%", top: "0px", left: "0px"}}>

            <nav className="modal-navigation">
                <div className="brand">
                    <a href="/" className="btn-us">underSCREEN</a>
                </div>
                <div className="title">
                    Spark - Snapped mobile application
                    <a href="/work" className="btn-close">X</a>
                </div>
            </nav>

            <div className="project spark">
                <h1><span>Allowing Spark employees to</span> <span>participate in a photo contest</span></h1>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3 className="subtitle">I developed this hybrid mobile application that let users create photo compositions
                            using the company logo, and send them back to the server to participate in a contest.</h3>
                    </div>
                </div>
                <div className="image">
                    <img src="/uploads/project/snapped.app.jpg" alt="" />
                </div>
            </div>

            <div className="container-fluid">
                <hr />
                    <section>
                        <header className="module">
                            <span className="number">01</span>
                            <h2>Mobile cross-platform development</h2>
                        </header>
                        <div className="row">
                            <h3 className="col-md-8 col-md-offset-2">I developed this hybrid application for iOS, Android and Windows phones with these frameworks and libraries:</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <ul className="numbered-detail">
                                    <li className="col-md-4">
                                        <img src="/uploads/logos/400x200/jquery-mobile-w.png" alt="" />
                                            <p><strong>01</strong> HTML mockup &amp; JavaScript development with jQuery Mobile Framework</p></li>
                                    <li className="col-md-4">
                                        <img src="/uploads/logos/400x200/cordoba-white.png" alt="" />
                                            <p><strong>02</strong> Mobile App Building for Android, iOS &amp; Windows phone with Apache CORDOVA Framework</p></li>
                                    <li className="col-md-4">
                                        <img src="/uploads/logos/400x200/push-woosh.png" alt="" />
                                            <p><strong>03</strong> Push notifications framework</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <hr />
                        <section>
                            <header className="module">
                                <span className="number">02</span>
                                <h2>creating compositions</h2>
                            </header>
                            <div className="row">
                                <h3 className="col-md-8 col-md-offset-2">The main idea of this app is to let users take pictures or select
                                    photos from their phones and create compositions with the company logo.</h3>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <p>&nbsp;</p><p>&nbsp;</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-md-offset-2">
                                    <p>&nbsp;</p>
                                    <p className="h3-css">The creation process is as follow:</p>
                                    <ul className="numbered-detail vertical">
                                        <li>
                                            <p><strong>01</strong> Take a picture o select one from the gallery</p>
                                        </li>
                                        <li>
                                            <p><strong>02</strong> Choose between two company logo layouts</p>
                                        </li>
                                        <li>
                                            <p><strong>03</strong> Place the logo somewhere on top of the image</p>
                                        </li>
                                        <li>
                                            <p><strong>04</strong> Chose a color for the logo and tint the image</p>
                                        </li>
                                        <li>
                                            <p><strong>05</strong> Add some text and tags to the composition</p>
                                        </li>
                                        <li>
                                            <p><strong>06</strong> Upload the final composition to the server</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div id="spark-app-slide" className="carousel slide" data-ride="carousel">
                                        
                                        <ol className="carousel-indicators">
                                            <li data-target="#spark-app-slide" data-slide-to="0" className="active"></li>
                                            <li data-target="#spark-app-slide" data-slide-to="1" className=""></li>
                                            <li data-target="#spark-app-slide" data-slide-to="2" className=""></li>
                                            <li data-target="#spark-app-slide" data-slide-to="3" className=""></li>
                                            <li data-target="#spark-app-slide" data-slide-to="4" className=""></li>
                                            <li data-target="#spark-app-slide" data-slide-to="5" className=""></li>
                                        </ol>
                                        
                                        <style>
                                            {/*.carousel-inner .item img { position:relative; left: 50%; transform:translateX(-50%); }*/}
                                            {/*a.carousel-control{background: none !important; position: absolute; }*/}
                                            {/*.carousel-inner img{ border: 10px solid #01854B; background-color: #01854B; padding: 80px 5px; border-radius: 60px; }*/}
                                        </style>
                                        <div className="carousel-inner" role="listbox">
                                            <div className="item active">
                                                <img src="/uploads/project/spark-01-photo.jpg" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                            <div className="item">
                                                <img src="/uploads/project/spark-02-choose-layout.jpg" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                            <div className="item">
                                                <img src="/uploads/project/spark-03-position-stencil.jpg" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                            <div className="item">
                                                <img src="/uploads/project/spark-04-tint-stencil.jpg" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                            <div className="item">
                                                <img src="/uploads/project/spark-06-add-tags.jpg" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                            <div className="item">
                                                <img src="/uploads/project/spark-06-upload-photo.jpg" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                        </div>
                                        
                                        <a className="left carousel-control" href="#spark-app-slide" role="button" data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="right carousel-control" href="#spark-app-slide" role="button" data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <hr />
                            <section>
                                <header className="module">
                                    <span className="number">03</span>
                                    <h2>Push notifications</h2>
                                </header>
                                <div className="row">
                                    <div className="col-md-4 col-md-offset-2">
                                        <p className="h3-css text-left">The app inform the user about new missions to accomplish using the phones push notification system.</p>
                                        <p className="h3-css text-left">I integrated the Pushwoosh 3rd party framework for handling the cross-platforms notifications.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <img src="/uploads/logos/400x200/push-woosh.png" alt="" />
                                    </div>
                                </div>
                            </section>
                            <hr id="app-demo" />
                                <section className="app-demo">
                                    <header className="module">
                                        <span className="number">04</span>
                                        <h2>Mobile App demo</h2>
                                    </header>
                                    <div className="row">
                                        <div className="col-md-4 col-md-offset-2">
                                            <p className="h3-css">If you want to test the app, you can play right now with the app-demo* on the right.</p>
                                            <small>(*) As an app-demo, some features like camera, gallery and publishing are limited or simulated.
                                                The only purpose of this site is to show the global idea about the final app developed.
                                            </small>
                                            <a href="#app-demo-iframe" data-controller="StartDemo" data-iframe-id="spark-iframe" data-src="http://demo.underscreen.com/telecom.snapped/index.html" className="btn big-btn app-btn">
                                                Start the App-Demo
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="phone iphone">
                                                <iframe id="spark-iframe" src="" width="320" height="568" frameBorder="0"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="footer">
                                    <div className="row">
                                        <a href="#app-demo" data-controller="ScrollTo" className="col-md-12 btn-link">
                                            Checkout the Mobile App Demo* <span className="btn-arrow right"></span>
                                        </a>
                                    </div>
                                    <div className="data">
                                        <strong>Year:</strong> 2014 <span className="sep">—</span> <strong>Client:</strong> <a href="http://www.saltinteractive.com/" rel="nofollow" target="_blank">Salt Interactive</a>, for <a href="https://www.spark.co.nz/" target="_blank" rel="nofollow">Spark</a> -formelly Telecom-
                                    </div>
                                </section>
            </div>
        </main>
    )
}