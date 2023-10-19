import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import WhyUs from "./views/WhyUs";
import Services from "./views/Services";
import Service, {ServiceType} from "./views/Service";
import Work, {WorkType} from "./views/Work";
import {Project} from "./views/Project";

export type ViewProps = {
    view: string;
    subView: string;
}

export default function View({view, subView}: ViewProps) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="why-hire-us" element={<WhyUs />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='contact-us' element={<Home />} />
            <Route path='get-a-quote' element={<Home />} />
            <Route path='software-development-services' element={<Services/>} />
            <Route path='service' element={<Service serviceSubView={subView as ServiceType}/>} />
            <Route path='work' element={<Work workSubView={subView as WorkType}/>} />
            <Route path='project' element={<Project subView={subView}/>} />
        </Routes>
    );
}