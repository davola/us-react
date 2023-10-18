import WebApplication from "./services/WebApplication";
import ECommerce from "./services/ECommerce";
import ResponsiveWebsites from "./services/ResponsiveWebsites";
import MobileCrossPlatform from "./services/MobileCrossPlatform";
import {DataServices, DataServiceType} from "../../data/DataServices";
import {ServiceRelatedWork} from "./services/ServiceRelatedWork";
import {ServiceOthers} from "./services/ServiceOthers";

export type ServiceProp = {
    serviceSubView: ServiceType;
}

export type ServiceType =
    'featured'
    | 'web-applications'
    | 'mobile-cross-platform-applications'
    | 'e-commerce-development'
    | 'wordpress-and-silverstripe-responsive-websites';

export function getServiceTypeCurrentService(serviceType: ServiceType) {
    return DataServices.filter(service => service.subView === serviceType)[0];
}

export default function Service({serviceSubView}: ServiceProp) {
    const currentService: DataServiceType = getServiceTypeCurrentService(serviceSubView);

    let service;

    switch (serviceSubView as any) {
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
                    <h1>{serviceSubView}</h1>
                    <hr/>
                </main>
            );
    }

    return (
        <main className="service">
            {service}
            <ServiceRelatedWork currentService={currentService}/>
            <ServiceOthers currentService={currentService}/>
        </main>
    )

}