export type MenuItemType = {
    id: number;
    view: string;
    route: string;
    name: string;
}

export default function MenuItem(menuItem:MenuItemType) {
    return (
        menuItem &&
        <li id={'id-' + menuItem.id} key={menuItem.id}><a href={menuItem.route}>{menuItem.name}</a></li>
    );

}