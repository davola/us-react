import {DataWorkType} from "../../../dara/DataWorks";
import parse from "html-react-parser";

type ServiceWorkItemProps = {
    workItem: DataWorkType;
}

export function ServiceWorkItem({workItem}: ServiceWorkItemProps) {
    return (
        <a data-controller="Project" href={'/project/' + workItem.class} data-page-title={workItem.pageTitle}>
            <article className={"project " + workItem.class}>
                <h1>{parse(workItem.thumbTitle)}</h1>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3 className="subtitle">{parse(workItem.pageDesc)}</h3>
                    </div>
                </div>
                <div className="image">
                    <img src={workItem.thumbImage} alt=""/>
                </div>
            </article>
        </a>
    )
}