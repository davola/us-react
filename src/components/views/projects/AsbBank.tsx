export default function Silverstripe(){
    return (
        <main className="project asb static-modal-navigation" data-controller="MainProject" style={{width: "100%", height: "100%", top: "0px", left: "0px"}}>

            <nav className="modal-navigation">
                <div className="brand">
                    <a href="https://underscreen.com/" className="btn-us">underSCREEN</a>
                </div>
                <div className="title">
                    ASB Bank - Renovation Budget Planner
                    <a href="/work" className="btn-close">X</a>
                </div>
            </nav>

            <div className="project asb">
                <h1><span>Getting a loan for your</span> <span>next renovation project</span></h1>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3 className="subtitle">I helped developing this renovation budget planner web application. I built it
                            with JavaScript framework Angular and it was optimized for use on tablets.</h3>
                    </div>
                </div>
                <div className="image">
                    <img src="https://underscreen.com/uploads/project/asb.app.jpg" alt="" />
                </div>
            </div>

            <div className="container-fluid">
                <hr />
                    <section>
                        <header className="module">
                            <span className="number">01</span>
                            <h2>Web Application Development</h2>
                        </header>
                        <h3>I participated in the front-end development, including:</h3>
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <ul className="numbered-detail">
                                    <li className="col-md-6">
                                        <img src="https://underscreen.com/uploads/logos/400x200/jquery-mobile-w.png" alt="" />
                                            <p><strong>01</strong> HTML mockup and app behavior with jQuery Mobile</p></li>
                                    <li className="col-md-6">
                                        <img src="https://underscreen.com/uploads/logos/400x200/backbone.png" alt="" />
                                            <p><strong>02</strong> Front-end Javascript development with Angular JS</p></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <hr />
                        <section>
                            <header className="module">
                                <span className="number">02</span>
                                <h2>Budget calculation</h2>
                            </header>
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <p className="h3-css">Users can create different types of renovation projects and manage their budgets.</p>
                                    <p className="h3-css">They can add and edit expenses and the app keeps track of the related renovation costs of the project.</p>
                                </div>
                            </div>
                        </section>
                        <section className="footer">
                            <div className="row">
                                <a href="https://renovate.asb.co.nz/" rel="nofollow" target="_blank" className="col-md-12 btn-link">
                                    Checkout renovate.asb.co.nz <span className="btn-arrow right"></span>
                                </a>
                            </div>
                            <div className="data">
                                <strong>Year:</strong> 2013 <span className="sep">—</span> <strong>Client:</strong> <a href="http://www.saltinteractive.com/" rel="nofollow" target="_blank">Salt Interactive</a>, for the ASB Bank
                            </div>
                        </section>
            </div>

        </main>
    )
}