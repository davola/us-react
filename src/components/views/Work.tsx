import {DataServices} from "../../dara/DataServices";
import {getWorkServiceName} from "../../utils/Routing";
import {DataWorks} from "../../dara/DataWorks";

function WorkServices({workSubView}: WorkProp) {
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

function getWorkTypeRelatedWork(workType: WorkType){
    return DataWorks.filter(dataWork => dataWork.tag.includes(workType));
}

function WorkServiceSamples({workSubView}: WorkProp) {

    const relatedWorkServiceSamples = getWorkTypeRelatedWork(workSubView).map(service =>
        <a data-controller="Project" href="/project/donmario"
           data-page-title="Don Mario - Productivity Hybrid Mobile Application">
            <article className="project donmario">
                <h1></h1>
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
    )

    return (
        <div className="projects-container">
            {relatedWorkServiceSamples}
        </div>
    );
}

export type WorkProp = {
    workSubView: WorkType;
}

export type WorkType = "featured" | "web-application-development" | "mobile-development" | "ecommerce-development" | "responsive-website-development";

export default function Work({workSubView}: WorkProp) {
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
                            <a data-controller="ServiceSelector" href="#" className="btn-service"><span>{getWorkServiceName(workSubView)}</span></a> work.
                        </h3>
                    </div>
                    <WorkServiceSamples workSubView={workSubView} />
                </div>
            </section>
            <div className="serviceModal">
                <button className="btn-close"></button>
                <div className="centered">
                    <h3>Choose a type of work</h3>
                    <h3 className="loading">Loading</h3>
                    <WorkServices workSubView={workSubView} />
                </div>
            </div>
        </main>
    )
}