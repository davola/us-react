import {menuItems} from "../data/Menu";
import MenuItem from "./MenuItem";
import React from "react";
import {PageBottomProps} from "./PageBottom";

export function MenuFooter({view}: PageBottomProps) {
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