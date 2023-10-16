import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import WhyUs from "./views/WhyUs";
import Services from "./views/Services";
import Service, {ServiceType} from "./views/Service";
import Work, {WorkType} from "./views/Work";

export type ViewProps = {
    view: string;
    subView: string;
}

export default function View({view, subView}: ViewProps) {
    let currentView = (
        <main>
            <h2>Default view in use is:</h2>
            <h1>{view}</h1>
        </main>
    );
    switch (view) {
        case 'home':
            currentView = <Home/>;
            break;
        case 'about-us':
            currentView = <AboutUs/>;
            break;
        case 'why-hire-us':
            currentView = <WhyUs/>;
            break;
        case 'contact':
            currentView = <Home/>;
            break;
        case 'services':
            currentView = <Services/>;
            break;
        case 'service':
            currentView = <Service serviceSubView={subView as ServiceType}/>;
            break;
        case 'work':
            currentView = <Work workSubView={subView as WorkType} />;
            break;
    }

    return (
        <>
            {currentView}
        </>
    );
}