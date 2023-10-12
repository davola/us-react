import React, {Component} from 'react';
import MenuItem, {MenuItemType} from "./MenuItem";

const menuItems: MenuItemType[] = [
    {
        view: 'services',
        route: 'freelance-software-development-services',
        name: 'Services',
    },
    {
        view: 'work',
        route: 'work',
        name: 'Work',
    },
    {
        view: 'about-us',
        route: 'about-us',
        name: 'About us',
    },
    {
        view: 'why-hire-us',
        route: 'why-hire-freelance-development',
        name: 'Why hire us',
    },
    {
        view: 'contact-us',
        route: 'contact-us',
        name: 'Contact',
    },
    {
        view: 'get-a-quote',
        route: 'get-a-quote',
        name: 'Get a quote',
    },
];

class PageTop extends Component {
    render() {
        const liMenuItems = menuItems.map(menuItem =>
            <MenuItem {...menuItem} />
        );
        return (
            <nav className="main-nav" data-controller="Sticky">
                <div className="container">
                    <a data-controller="MenuMobile" href="#" className="menu-mobile">
                        <span className="bar"></span>
                    </a>
                    <a href="%PUBLIC_URL%" className="home">
                        <img src="%PUBLIC_URL%/img/underscreen-logo.png" alt="underSCREEN"/>
                    </a>
                    <ul id="main-menu" className="menu">
                        {liMenuItems}
                    </ul>
                    <a href="<?php echo $_r['base']; ?>/get-a-quote"
                       className="btn wire <?php if ( $view == 'get-a-quote') echo 'active'; ?>">
                        Get a quote
                    </a>
                </div>
            </nav>
        );
    }
}

export default PageTop;