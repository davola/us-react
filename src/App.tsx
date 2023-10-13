import React from 'react';

import './App.css';
import PageTop from "./components/PageTop";
import View from "./components/View";

function App() {
    const view = window.location.pathname.substring(1) || 'home';
    return (
        <div className="App">
            <PageTop view={view}/>
            <View view={view}/>
        </div>
    );
}

export default App;
