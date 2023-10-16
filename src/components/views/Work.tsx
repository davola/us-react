import {DataServices} from "../../dara/DataServices";
import {ServiceProp} from "./Service";

function WorkServices({subView}: ServiceProp) {
    const workServices = DataServices.map((service) => {
        const ref = '/work/' + service.subView;
        const active = '';
        return (
            <li><a href={ref} className={active} onClick={workServiceClick} data-service="featured">{service.subView}</a></li>
        );
    })
    return (
        <ul className="services">
            {workServices}
        </ul>
    );
}

function workServiceClick (){
    alert('Clicked!')
}

function getWorkServiceName(subView: string){

    const workServices: {} = {
        'featured': 'Featured',
        'web-application-development': 'Web Application Development',
        'mobile-development': 'Mobile Development',
        'ecommerce-development': 'E-commerce Development',
        'responsive-website-development': 'Responsive Website Development',
    }
    return Reflect.get(workServices, subView);
}

export default function Work({subView}: ServiceProp) {
    return (
        <main className="work">
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h1 className="very-big">I <span className="text-red">♥</span> work</h1>
                            <h3><span className="star limeLight"></span>I really enjoy developing quality software for
                                startups, companies, and digital agencies from around the globe.</h3>
                        </div>
                    </div>
                </div>
            </header>

            <section className="work">
                <div className="container">
                    <div className="row selector">
                        <h3>Here you have some examples of my
                            <a data-controller="ServiceSelector" href="#" className="btn-service"><span>{getWorkServiceName(subView)}</span></a> work.
                        </h3>
                    </div>
                    <div className="projects-container">
                        <a data-controller="Project" href="/project/donmario"
                           data-page-title="Don Mario - Productivity Hybrid Mobile Application">
                            <article className="project donmario">
                                <h1><span>Helping farmers calculate their</span>
                                    <span>seed order and find a dealer</span>
                                </h1>
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-2">
                                        <h3 className="subtitle">I built this productivity mobile cross-platform
                                            application
                                            and it’s Symfony web application content manager system for for one of the
                                            largest Argentine seed sellers: DonMario Semillas.</h3>
                                    </div>
                                </div>
                                <div className="image">
                                    <img src="/uploads/project/donmario.app.jpg" alt=""/>
                                </div>
                            </article>
                        </a>
                    </div>
                </div>
            </section>
            <div className="serviceModal">
                <button className="btn-close"></button>
                <div className="centered">
                    <h3>Choose a type of work</h3>
                    <h3 className="loading">Loading</h3>
                    <WorkServices subView={subView} />
                </div>
            </div>
        </main>
    )
}