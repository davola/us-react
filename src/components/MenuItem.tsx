import {classNames} from "../utils/Utils";

export type MenuItemType = {
    id: number;
    view: string;
    route: string;
    name: string;
    class: string;
}

type MenuItemProp = {
    currentView: string;
    menuItem: MenuItemType;
}

export default function MenuItem({currentView, menuItem}: MenuItemProp) {
    const active: boolean = menuItem.route.includes(currentView);
    const menuItemClasses: string = classNames(active && 'active', menuItem.class);

    return (
        <li className={menuItemClasses} key={menuItem.id}><a href={menuItem.route}>{menuItem.name}</a></li>
    );

}