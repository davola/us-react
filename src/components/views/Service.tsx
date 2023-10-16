import WebApplication from "./services/WebApplication";
import ECommerce from "./services/ECommerce";
import ResponsiveWebsites from "./services/ResponsiveWebsites";
import MobileCrossPlatform from "./services/MobileCrossPlatform";
import {DataServices, DataServiceType} from "../../dara/DataServices";

export type ServiceProp = {
    subView: string;
}
export default function Service({subView}: ServiceProp) {
    const currentService: DataServiceType = DataServices.filter(service => service.subView === subView)[0];

    let service;

    switch (subView) {
        case 'web-applications':
            service = <WebApplication currentService={currentService}/>;
            break;
        case 'mobile-cross-platform-applications':
            service = <MobileCrossPlatform currentService={currentService}/>;
            break;
        case 'e-commerce-websites':
            service = <ECommerce currentService={currentService}/>;
            break;
        case 'wordpress-and-silverstripe-responsive-websites':
            service = <ResponsiveWebsites currentService={currentService}/>;
            break;
        default:
            service = (
                <main>
                    <h3>The current View is:</h3>
                    <h1>Service</h1>
                    <h3>The current SubView is:</h3>
                    <h1>{subView}</h1>
                    <hr/>
                </main>
            );
    }

    return service;
}