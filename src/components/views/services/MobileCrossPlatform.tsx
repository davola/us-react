import {CurrentServiceProps} from "./WebApplication";
import {ServiceRelatedWork} from "./ServiceRelatedWork";
import {ServiceOthers} from "./ServiceOthers";

export default function MobileCrossPlatform({currentService}: CurrentServiceProps) {
    return (
        <main className="service">
            <h1>Mobile Cross Platform</h1>
            <ServiceRelatedWork currentService={currentService} />
            <ServiceOthers currentService={currentService} />
        </main>
    )
}