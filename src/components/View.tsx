import Home from "./views/Home";

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