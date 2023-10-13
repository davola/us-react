import {DataServiceType} from "../../../dara/DataServices";
import {ServiceOthersItems} from "./ServiceOthersItems";

type ServiceOthersProps = {
    currentService: DataServiceType;
}

export function ServiceOthers({currentService}: ServiceOthersProps) {
    return (
        <section className="other-services">
            <header>
                <h3>Want to know more?</h3>
                <h1>Choose another
                    <a href="/services">development service</a>
                </h1>
            </header>
            <ServiceOthersItems/>
        </section>
    )
}

