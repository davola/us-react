import React from 'react';

import PageTop from "./components/PageTop";
import View from "./components/View";
import {PageBottom} from "./components/PageBottom";

function parseViewPath(path: string[]): string[] {
    if (path.length === 1) return [path[0] || 'home', ''];
    switch (path[0]) {
        case 'freelance-software-development':
            return ['service', path[1]];
    }
    return [path[0], path[1]];
}

function App() {
    const path: string[] = window.location.pathname.substring(1).split('/');
    const [view, subView] = parseViewPath(path);
    return (
        <div className={'view-' + view}>
            <PageTop view={view} subView={subView}/>
            <View view={view} subView={subView}/>
            <PageBottom view={view} />
        </div>
    );
}

export default App;
