import React from 'react';

import './App.css';
import PageTop from "./components/PageTop";
import View from "./components/View";
import {PageBottom} from "./components/PageBottom";

function App() {
    const view = window.location.pathname.substring(1) || 'home';
    return (
        <div className={'view-' + view}>
            <PageTop view={view}/>
            <View view={view}/>
            <PageBottom view={view} />
        </div>
    );
}

export default App;
