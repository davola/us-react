export default function CFFC(){
    return (
        <main className="project cffc static-modal-navigation" data-controller="MainProject" style={{width: "100%", height: "100%", top: "0px", left: "0px"}}>

            <nav className="modal-navigation">
                <div className="brand">
                    <a href="/" className="btn-us">underSCREEN</a>
                </div>
                <div className="title">
                    CFFC - Silverstripe responsive website
                    <a href="/work" className="btn-close">X</a>
                </div>
            </nav>

            <div className="project cffc">
                <h1><span>Informing the New Zealand </span> <span>community of retirement services</span></h1>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3 className="subtitle">I developed the website and customize the responsive theme for the Commission for Financial Capability Organization.</h3>
                    </div>
                </div>
                <div className="image">
                    <img src="/uploads/project/cffc.silverstripe.jpg" alt="" />
                </div>
                <div className="container-fluid">
                    <hr />
                        <section>
                            <header className="module">
                                <span className="number">01</span>
                                <h2>Silverstripe development</h2>
                            </header>
                            <div className="row">
                                <div className="col-md-4 col-md-offset-2">
                                    <p className="h3-css"><br />I developed this responsive website with Silverstripe.</p>
                                    <p className="h3-css">I customize the HTML mockup theme to match client designs.</p>
                                </div>
                                <div className="col-md-4">
                                    <img src="/uploads/logos/400x200/silverstripe.png" alt="" />
                                </div>
                            </div>
                        </section>
                        <section className="footer">
                            <div className="row">
                                <a href="//cffc.org.nz/" target="_blank" rel="noreferrer" className="col-md-12 btn-link">
                                    Check cffc.org.nz
                                </a>
                            </div>
                            <div className="data">
                                <strong>Year:</strong> 2015 <span className="sep">—</span> <strong>Client:</strong> <a href="http://www.saltinteractive.com/" target="_blank" rel="noreferrer">Salt Interactive</a>, for CFFC Organization
                            </div>
                        </section>
                </div>
            </div>
        </main>
    )
}