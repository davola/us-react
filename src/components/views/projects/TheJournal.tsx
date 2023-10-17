export default function TheJournal(){
    return (
        <main className="project thejournal static-modal-navigation" data-controller="MainProject" style={{width: "100%", height: "100%", top: "0px", left: "0px"}}>

            <nav className="modal-navigation">
                <div className="brand">
                    <a href="/" className="btn-us">underSCREEN</a>
                </div>
                <div className="title">
                    The Journal - Early detection program for depression
                    <a href="/work" className="btn-close">X</a>
                </div>
            </nav>

            <div className="project thejournal">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h1><span>Detecting early-warning</span> <span>signs of depression</span></h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3 className="subtitle">I help building this interactive e-book application where the users has to complete
                            different exercises and questions that helps detect early signs of depression.</h3>
                    </div>
                </div>
                <div className="image">
                    <img src="/uploads/project/thejournal.app.jpg" alt="" />
                </div>
            </div>

            <div className="container-fluid">
                <hr />
                    <section>
                        <header className="module">
                            <span className="number">01</span>
                            <h2>Web Application Development</h2>
                        </header>
                        <div className="row">
                            <div className="col-md-4 col-md-offset-2">
                                <h3 className="text-left"><br />I participate in the development process of this webapp with Google’s AngularJS Framework.</h3>
                            </div>
                            <div className="col-md-6">
                                <img src="/uploads/logos/400x200/angular.png" alt="" />
                            </div>
                        </div>
                        <h3><br />I developed all the different components in the book, including:</h3>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <ul className="numbered-detail">
                                    <li className="col-md-5ths">
                                        <p><strong>01</strong> Drag and drop lists</p>
                                    </li>
                                    <li className="col-md-5ths">
                                        <p><strong>02</strong> Recipe builders</p>
                                    </li>
                                    <li className="col-md-5ths">
                                        <p><strong>03</strong> Calendars</p>
                                    </li>
                                    <li className="col-md-5ths">
                                        <p><strong>04</strong> Item sorting</p>
                                    </li>
                                    <li className="col-md-5ths">
                                        <p><strong>05</strong> Checklists and more...</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <hr />
                        <section>
                            <header className="module">
                                <span className="number">02</span>
                                <h2>E-book overview</h2>
                            </header>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <h3 className="h3-css">Users have to complete different tests about their daily workouts and diets.</h3>
                                    <h3 className="h3-css">After completing the tests, the app detects early sign of depression and encourage users to change their bad habits.</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-md-offset-0">
                                    <div id="journalapp" className="carousel phone tablet slide" data-ride="carousel">
                                        
                                        <ol className="carousel-indicators">
                                            <li data-target="#journalapp" data-slide-to="0" className="active"></li>
                                            <li data-target="#journalapp" data-slide-to="1" className=""></li>
                                            <li data-target="#journalapp" data-slide-to="2" className=""></li>
                                            <li data-target="#journalapp" data-slide-to="3" className=""></li>
                                            <li data-target="#journalapp" data-slide-to="4" className=""></li>
                                            <li data-target="#journalapp" data-slide-to="5" className=""></li>
                                            <li data-target="#journalapp" data-slide-to="6" className=""></li>
                                        </ol>
                                        
                                        <style>
                                            {/*.carousel-inner .item img{ min-width: 100%; height: auto; }*/}
                                        </style>
                                        <div className="carousel-inner" role="listbox">
                                            <div className="item active">
                                                <img src="/uploads/project/journa-drag-n-drop.jpg" alt="" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                            <div className="item">
                                                <img src="/uploads/project/journal-brain-food.jpg" alt="" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                            <div className="item">
                                                <img src="/uploads/project/journal-calendar.jpg" alt="" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                            <div className="item">
                                                <img src="/uploads/project/journal-invite-a-friend.jpg" alt="" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                            <div className="item">
                                                <img src="/uploads/project/journal-list-problems.jpg" alt="" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                            <div className="item">
                                                <img src="/uploads/project/journal-receipe.jpg" alt="" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                            <div className="item">
                                                <img src="/uploads/project/journal-sleep-routine.jpg" alt="" />
                                                    <div className="carousel-caption"></div>
                                            </div>
                                        </div>
                                        
                                        <a className="left carousel-control" href="#journalapp" role="button" data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="right carousel-control" href="#journalapp" role="button" data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="footer">
                            <div className="row">
                                <a href="http://myjournal.depression.org.nz" target="_blank" rel="noreferrer" className="col-md-12 btn-link">
                                    Checkout myjournal.depression.org.nz <span className="btn-arrow right"></span>
                                </a>
                            </div>
                            <div className="data">
                                <strong>Year:</strong> 2013 <span className="sep">—</span> <strong>Client:</strong> <a href="http://www.saltinteractive.com/" target="_blank" rel="noreferrer">Salt Interactive</a>, for Depression.org
                            </div>
                        </section>
            </div>

        </main>
    )
}