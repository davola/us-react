import {CurrentServiceProps} from "./WebApplication";
import {ServiceRelatedWork} from "./ServiceRelatedWork";
import {ServiceOthers} from "./ServiceOthers";

export default function ResponsiveWebsites({currentService}: CurrentServiceProps) {
    return (
        <main className="service">
            <h1>Responsive Websites</h1>
            <ServiceRelatedWork currentService={currentService} />
            <ServiceOthers currentService={currentService} />
        </main>
    )
}