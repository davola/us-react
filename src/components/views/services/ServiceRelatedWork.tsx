import {DataServiceType} from "../../../data/DataServices";
import {ServiceWorkItem} from "./ServiceWorkItem";
import {DataWorks} from "../../../data/DataWorks";
import {getServiceTypeCurrentService} from "../Service";

type ServiceRelatedWorkProp = {
    currentService: DataServiceType;
}

export function getServiceTypeRelatedWork(currentService: DataServiceType){
    return DataWorks.filter(work => work.tag.includes(currentService.workTag));
}

export function ServiceRelatedWork({currentService}: ServiceRelatedWorkProp) {

    const serviceWorkItems = getServiceTypeRelatedWork(currentService).map(workItem =>
        <ServiceWorkItem workItem={workItem}/>
    )
    return (
        <section className="examples">
            <div className="container">
                <h3 className="title">Here are some examples of our
                    <br/>
                    <strong>{currentService.short} work</strong>
                </h3>
                <div className="projects-container">
                    {serviceWorkItems}
                </div>
            </div>
        </section>
    )
}