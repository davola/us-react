import React from 'react';

import PageTop from "./components/PageTop";
import View from "./components/View";
import {PageBottom} from "./components/PageBottom";
import {classNames} from "./utils/Utils";

function parseViewPath(path: string[]): string[] {
    const viewNameNormalization: {} = {
        "why-hire-freelance-development": 'why-hire-us',
        "freelance-software-development-services": 'services'
    }
    const viewName = Reflect.get(viewNameNormalization, path[0]) || path[0];
    if (path.length === 1) return [viewName || 'home', ''];
    switch (path[0]) {
        case 'freelance-software-development':
            return ['service', path[1]];
    }
    return [viewName, path[1]];
}

function App() {
    const path: string[] = window.location.pathname.substring(1).split('/');
    const [view, subView] = parseViewPath(path);
    const bodyClasses: string = classNames('body', 'view-' + view);
    return (
        <div className={bodyClasses}>
            <PageTop view={view} subView={subView}/>
            <View view={view} subView={subView}/>
            <PageBottom view={view} />
        </div>
    );
}

export default App;
