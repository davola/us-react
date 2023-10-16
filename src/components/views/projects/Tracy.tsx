export default function Tracy(){
    return (
        <main className="project tracy static-modal-navigation" data-controller="MainProject" style={{width: "100%", height: "100%", top: "0px", left: "0px"}}>

            <nav className="modal-navigation">
                <div className="brand">
                    <a href="/" className="btn-us">underSCREEN</a>
                </div>
                <div className="title">
                    Tracy - eMonitor
                    <a href="/work" className="btn-close">X</a>
                </div>
            </nav>

            <div className="project tracy">
                <h1><span>Measuring the evolution</span> <span>of psychiatric patients</span></h1>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3 className="subtitle">I developed this web application for the TrACY project, an innovative study of the
                            evolution of psychiatric patients in New Zealand.</h3>
                    </div>
                </div>
                <div className="image">
                    <img src="/uploads/project/tracy.webapp.jpg" alt="" />
                </div>
                <div className="container-fluid">
                    <hr />
                        <section>
                            <header className="module">
                                <span className="number">01</span>
                                <h2>Web Application Development</h2>
                            </header>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <h3 className="mb2 pb">I based the project on a wireframe design delivered by the project leader. I
                                        were in charge of the rest of the development process, including:</h3>
                                    <ul className="numbered-detail mt2">
                                        <li className="col-md-4"><img src="/uploads/logos/400x200/db-schema.png" alt="" />
                                            <p><strong>01</strong> DB schema design</p>
                                        </li>
                                        <li className="col-md-4"><img src="/uploads/logos/400x200/bootstrap.png" alt="" />
                                            <p><strong>02</strong> HTML Mockup building with Bootstrap</p>
                                        </li>
                                        <li className="col-md-4"><img src="/uploads/logos/400x200/symfony.png" alt="" />
                                            <p><strong>03</strong> Web application development with Symfony</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <hr />
                            <section>
                                <header className="module">
                                    <span className="number">02</span>
                                    <h2>Webapp Overview</h2>
                                </header>
                                <div className="row">
                                    <div className="col-md-4 col-md-offset-1">
                                        <p className="h3-css">The system is used by several New Zealand clinics and includes different user
                                            profiles and permissions.</p>
                                        <p className="h3-css">RAs uses the webapp to manage patients and conduct surveys and clinicians use it
                                            to evaluate patient evolution.</p>
                                    </div>
                                    <div className="col-md-7">

                                    </div>
                                </div>
                            </section>
                            <section className="footer">
                                <div className="row">
                                    <a href="https://www.tracyemonitor.org/" rel="nofollow" target="_blank" className="col-md-12 btn-link">
                                        tracyemonitor.org <span className="text-danger">—Restricted Access, sorry—</span>
                                    </a>
                                </div>
                                <div className="data">
                                    <strong>Year:</strong> 2012 <span className="sep">—</span> <strong>Client:</strong> <a href="http://www.saltinteractive.com/" rel="nofollow" target="_blank">Salt Interactive</a>, for the TrACY project
                                </div>
                            </section>
                </div>
            </div>
        </main>
    )
}