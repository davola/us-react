import {DataServiceType} from "../../../data/DataServices";

type OtherServiceProp = {
    prevService: DataServiceType;
    nextService: DataServiceType;
}
export function ServiceOthersItems({prevService, nextService}:OtherServiceProp) {
    return (
        <div className="row">
            <div className="col-sm-6">
                <a className="service" href={prevService.link}>
                    <span className="wrapper">
                        <span className="btn-arrow left"></span>
                        <span>{prevService.short}</span> <span className="display-block">development</span>
                    </span>
                </a>
            </div>
            <div className="col-sm-6">
                <a className="service" href={nextService.link}>
                    <span className="wrapper">
                        <span>{nextService.short}</span> <span className="display-block">development</span>
                        <span className="btn-arrow right"></span>
                    </span>
                </a>
            </div>
        </div>
    )
}