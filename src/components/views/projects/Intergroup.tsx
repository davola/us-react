export default function Intergroup(){
    return (
        <main className="project intergroup static-modal-navigation" data-controller="MainProject" style={{width: "100%", height: "100%", top: "0px", left: "0px"}}>
            <nav className="modal-navigation">
                <div className="brand">
                    <a href="/" className="btn-us">underSCREEN</a>
                </div>
                <div className="title">
                    Intergroup - NZ Infrastructure &amp; Industrial Services Specialists
                    <a href="/work" className="btn-close">X</a>
                </div>
            </nav>

            <div className="project intergroup">

                <h1><span>Showcasing different areas</span> <span>of a Kiwi conglomerate</span></h1>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3 className="subtitle">Built this website for Intergroup group, a conglomerate of over 35 Companies that deal
                            with a wide range of businesses</h3>
                    </div>
                </div>

                <div className="image">
                    <img src="/uploads/project/intergroup.open-source-left.jpg" alt="" />
                </div>

                <div className="container-fluid">
                    <hr />
                        <section>
                            <header className="module">
                                <span className="number">01</span>
                                <h2>Wordpress development</h2>
                            </header>
                            <div className="row">
                                <div className="col-md-4 col-md-offset-2">
                                    <h3 className="mb2 pb">I developed this responsive website and its custom theme with wordpress</h3>
                                </div>
                                <div className="col-md-4">
                                    <img src="/uploads/logos/400x200/wordpress.png" alt="" />
                                </div>
                            </div>
                        </section>
                        <hr />
                            <section>
                                <header className="module">
                                    <span className="number">02</span>
                                    <h2>Theme customization</h2>
                                </header>
                                <div className="row">
                                    <div className="col-md-3 col-md-offset-1">
                                        <p className="h3-css">I developed this wordpress responsive website on top of a stock theme called “bouncy”.</p>
                                        <p className="h3-css">I customized the original theme to our clients design and information needs.</p>
                                    </div>
                                    <div className="col-md-8">

                                    </div>
                                </div>
                            </section>
                            <section className="footer">
                                <div className="row">
                                    <a href="//intergroup.co.nz/" target="_blank" rel="noreferrer" className="col-md-12 btn-link">
                                        Check intergroup.co.nz
                                    </a>
                                </div>
                                <div className="data">
                                    <strong>Year:</strong> 2014 <span className="sep">—</span> <strong>Client:</strong> <a href="http://www.saltinteractive.com/" target="_blank" rel="noreferrer">Salt Interactive</a>, for Intergroup
                                </div>
                            </section>
                </div>
            </div>
        </main>
    )
}