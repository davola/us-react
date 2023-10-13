import {DataServiceType} from "../../../dara/DataServices";
import {ServiceWorkItem} from "./ServiceWorkItem";

type ServiceRelatedWorkProp = {
    currentService: DataServiceType;
}

export function ServiceRelatedWork({currentService}: ServiceRelatedWorkProp) {
    return (
        <section className="examples">
            <div className="container">
                <h3 className="title">Here are some examples of our
                    <br/>
                    <strong>{currentService.short} work</strong>
                </h3>
                <div className="projects-container">
                    <ServiceWorkItem workTag="something"/>
                </div>
            </div>
        </section>
    )
}