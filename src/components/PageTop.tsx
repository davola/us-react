import React from 'react';
import MenuItem, {MenuItemType} from "./MenuItem";

type PageTopProp = {
    view: string;
}

const menuItems: MenuItemType[] = [
    {
        id: 1,
        view: 'services',
        route: 'freelance-software-development-services',
        name: 'Services',
    },
    {
        id: 2,
        view: 'work',
        route: 'work',
        name: 'Work',
    },
    {
        id: 3,
        view: 'about-us',
        route: 'about-us',
        name: 'About us',
    },
    {
        id: 4,
        view: 'why-hire-us',
        route: 'why-hire-freelance-development',
        name: 'Why hire us',
    },
    {
        id: 5,
        view: 'contact-us',
        route: 'contact-us',
        name: 'Contact',
    },
    {
        id: 6,
        view: 'get-a-quote',
        route: 'get-a-quote',
        name: 'Get a quote',
    },
];

function PageTop({view}:PageTopProp)
{
    const liMenuItems = menuItems.map(menuItem =>
        <MenuItem currentView={view} menuItem={menuItem} />
    );
    return (
        <nav className="main-nav" data-controller="Sticky">
            <div className="container">
                <a data-controller="MenuMobile" href="#" className="menu-mobile">
                    <span className="bar"></span>
                </a>
                <a href="/" className="home">
                    <img src="/img/underscreen-logo.png" alt="underSCREEN"/>
                </a>
                <ul id="main-menu" className="menu">
                    {liMenuItems}
                </ul>
                <a href="/get-a-quote"
                   className="btn wire <?php if ( $view == 'get-a-quote') echo 'active'; ?>">
                    Get a quote
                </a>
            </div>
        </nav>
    );
}

export default PageTop;