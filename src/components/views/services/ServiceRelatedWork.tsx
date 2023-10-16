import {DataServiceType} from "../../../dara/DataServices";
import {ServiceWorkItem} from "./ServiceWorkItem";
import {DataWorks} from "../../../dara/DataWorks";

type ServiceRelatedWorkProp = {
    currentService: DataServiceType;
}

export function ServiceRelatedWork({currentService}: ServiceRelatedWorkProp) {
    const workItems = DataWorks.filter(work => work.tag.includes(currentService.workTag));
    const serviceWorkItems = workItems.map(workItem =>
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