import React from 'react';
import {ViewProps} from "./View";
import {Menu} from "./Menu";

function PageTop({view}: ViewProps) {
    return (
        <nav className="main-nav" data-controller="Sticky">
            <div className="container">
                <a data-controller="MenuMobile" href="#" className="menu-mobile">
                    <span className="bar"></span>
                </a>
                <Menu view={view} />
                <a href="/get-a-quote"
                   className="btn wire <?php if ( $view == 'get-a-quote') echo 'active'; ?>">
                    Get a quote
                </a>
            </div>
        </nav>
    );
}

export default PageTop;