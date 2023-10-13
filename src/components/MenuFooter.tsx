import {ViewProps} from "./View";
import {menuItems} from "../dara/Menu";
import MenuItem from "./MenuItem";
import React from "react";

export function MenuFooter({view}: ViewProps) {
    const liMenuItems = menuItems.map(menuItem => {
            return (
                <MenuItem currentView={view} menuItem={menuItem}/>
            );
        }
    );
    return (
        <nav>
            <div className="container">
                <ul className="menu">
                    {liMenuItems}
                </ul>
            </div>
        </nav>
    )
}