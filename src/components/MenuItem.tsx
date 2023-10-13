export type MenuItemType = {
    id: number;
    view: string;
    route: string;
    name: string;
}

type MenuItemProp = {
    currentView: string;
    menuItem: MenuItemType;
}

export default function MenuItem({currentView, menuItem}: MenuItemProp) {
    const active: string = (menuItem.route.includes(currentView)) ? 'active' : '';
    return (
        menuItem &&
        <li className={active} id={'id-' + menuItem.id} key={menuItem.id}><a href={menuItem.route}>{menuItem.name}</a></li>
    );

}