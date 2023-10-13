import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import WhyUs from "./views/WhyUs";

export type ViewProps = {
    view: string;
}

export default function View({view}: ViewProps) {
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
        case 'why-hire-freelance-development':
        case 'why-hire-us':
            currentView = <WhyUs/>;
            break;
        case 'contact':
            currentView = <Home/>;
            break;
    }

    return (
        <>
            {currentView}
        </>
    );
}