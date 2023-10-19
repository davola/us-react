import {DataMenu, DataMenuAll} from "../data/Menu";
import React from "react";
import MenuItem, {MenuItemType} from "./MenuItem";
import {PlacementPageTop} from "./PageTop";

type MenuProps = {
    view: string;
    subView: string;
    placement: string;
}

export function Menu({view, subView, placement}: MenuProps) {
    return (
        <ul id="main-menu" className="menu">
            {DataMenu.map(menuItem => (
                <MenuItem key={'menu-top-' + menuItem.id} currentView={view} menuItem={menuItem} placement={placement}/>
            ))}
        </ul>
    )
}