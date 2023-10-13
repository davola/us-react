import {CurrentServiceProps} from "./WebApplication";
import {ServiceRelatedWork} from "./ServiceRelatedWork";
import {ServiceOthers} from "./ServiceOthers";

export default function ECommerce({currentService}: CurrentServiceProps) {
    return (
        <main className="service">
            <h1>E Commerce</h1>
            <ServiceRelatedWork currentService={currentService} />
            <ServiceOthers currentService={currentService} />
        </main>
    )
}