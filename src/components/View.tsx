import Home from "./views/Home";

type ViewProps = {
    view: string;
}

export default function View({view}: ViewProps) {
    let currentView = (
        <div>
            <h2>Default view in use is:</h2>
            <h1>{view}</h1>
        </div>
    );
    switch (view) {
        case 'home': currentView = <Home />; break;
        case 'contact': currentView = <Home />; break;
    }

    return (
        <div className={'view-' + view}>
            {currentView}
        </div>
    );
}