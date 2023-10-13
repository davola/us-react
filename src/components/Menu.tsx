import {ViewProps} from "./View";
import {menuItems} from "../dara/Menu";
import MenuItem from "./MenuItem";
import React from "react";

export function Menu({view}: ViewProps) {
    const liMenuItems = menuItems.map(menuItem =>
        <MenuItem currentView={view} menuItem={menuItem}/>
    );
    return (
        <div>
            <a href="/" className="home">
                <img src="/img/underscreen-logo.png" alt="underSCREEN"/>
            </a>
            <ul id="main-menu" className="menu">
                {liMenuItems}
            </ul>
        </div>
    )
}