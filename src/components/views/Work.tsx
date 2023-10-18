import {getWorkServiceName} from "../../utils/Routing";
import {WorkServices} from "./WorkServices";
import {WorkTypeSamples} from "./WorkTypeSamples";
import {ServiceSelector} from "../../modules/ServiceSelector";
import {useState} from "react";

export type WorkProp = {
    workSubView: WorkType;
}

export type WorkType =
    "featured"
    | "web-application-development"
    | "mobile-development"
    | "ecommerce-development"
    | "responsive-website-development";

export default function Work({workSubView}: WorkProp) {
    const serviceSelector = new ServiceSelector('context-text');
    let [workServiceName] = useState(getWorkServiceName(workSubView));

    return (
        <>
            <main className="work">
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <h1 className="very-big">I <span className="text-red">♥</span> work</h1>
                                <h3><span className="star limeLight"></span>I really enjoy developing quality software
                                    for startups, companies, and digital agencies from around the globe.</h3>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="work">
                    <div className="container">
                        <div className="row selector">
                            <h3>Here you have some examples of my
                                <a href="#workServiceClick" onClick={(e)=> {e.preventDefault(); alert(serviceSelector.init())}} className="btn-service">
                                    <span>{workServiceName}</span>
                                </a> work.
                            </h3>
                        </div>
                        <WorkTypeSamples workSubView={workSubView}/>
                    </div>
                </section>
            </main>
            <div className="serviceModal">
                <button className="btn-close"></button>
                <div className="centered">
                    <h3>Choose a type of work</h3>
                    <h3 className="loading">Loading</h3>
                    <WorkServices workSubView={workSubView}/>
                </div>
            </div>
        </>
    )
}