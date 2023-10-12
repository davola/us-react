export type MenuItemType = {
    view: string;
    route: string;
    name: string;
}

export default function MenuItem(menuItem:MenuItemType) {
    return (
        <li key={menuItem.name}><a href={menuItem.route}>{menuItem.name}</a></li>
    );

}