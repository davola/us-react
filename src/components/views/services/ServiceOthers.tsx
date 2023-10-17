import {DataServices, DataServiceType} from "../../../data/DataServices";
import {ServiceOthersItems} from "./ServiceOthersItems";

type ServiceOthersProps = {
    currentService: DataServiceType;
}

function getPrevNextService(currenService: DataServiceType){
    let idx = 0;
    for (let i = 0; i < DataServices.length; i++){
        if (DataServices[i] === currenService){
            idx = i;
            break;
        }
    }
    const prevService = (idx > 0) ? DataServices[idx - 1] : DataServices[DataServices.length - 1];
    const nextService = (idx === DataServices.length - 1) ? DataServices[0] : DataServices[idx + 1];

    return [prevService, nextService];
}

export function ServiceOthers({currentService}: ServiceOthersProps) {
    const [prevService, nextService] = getPrevNextService(currentService);
    return (
        <section className="other-services">
            <header>
                <h3>Want to know more?</h3>
                <h1>Choose another
                    <a href="/services">development service</a>
                </h1>
            </header>
            <ServiceOthersItems prevService={prevService} nextService={nextService} />
        </section>
    )
}

