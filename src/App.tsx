import React from 'react';

import PageTop from "./components/PageTop";
import View from "./components/View";
import {PageBottom} from "./components/PageBottom";
import {classNames} from "./utils/Utils";
import {parseViewPath} from "./utils/Routing";

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
