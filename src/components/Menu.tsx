import {ViewProps} from "./View";
import {menuItems} from "../data/Menu";
import MenuItem from "./MenuItem";
import React from "react";

export function Menu({view, subView}: ViewProps) {
    const topMenuItems = menuItems.filter((value, idx) => idx !== 0 );
    const liMenuItems = topMenuItems.map(menuItem =>
        <MenuItem currentView={view} menuItem={menuItem}/>
    );
    return (
        <ul id="main-menu" className="menu">
            {liMenuItems}
        </ul>
    )
}