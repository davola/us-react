import {DataMenu, DataMenuAll} from "../data/Menu";
import MenuItem from "./MenuItem";
import React from "react";
import {PageBottomProps} from "./PageBottom";

export function MenuFooter({view}: PageBottomProps) {
    return (
        <nav>
            <div className="container">
                <ul className="menu" key="menu-ul-footer">
                    {DataMenuAll.map(menuItem => (
                        <MenuItem key={'footer-' + menuItem.id} currentView={view} menuItem={menuItem} placement="footer" />
                    ))}
                </ul>
            </div>
        </nav>
    )
}