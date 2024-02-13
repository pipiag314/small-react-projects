import { MenuItemT, MenuItemsType } from "./sideMenuItems";

type SideMenuProps = {
  menuItems: MenuItemsType;
};

const MenuList = ({ menuItems }: { menuItems: MenuItemsType }) => {
  return (
    <div>
      {menuItems.length > 0
        ? menuItems.map((item) => {
            return (
                <MenuItem item={item} />
            );
          })
        : null}
    </div>
  );
};

const MenuItem = ({item} : {item: MenuItemT}) => {
  return (
    <div>
      <h1>{item.label}</h1>
      {
        item.children
         ? <div className="pl-5"><MenuList menuItems={item.children} /></div>
         : null 
      }
    </div>
  );
};

const SideMenu: React.FC<SideMenuProps> = ({ menuItems }) => {
  return (
    <div>
      <MenuList menuItems={menuItems} />
    </div>
  );
};
export default SideMenu;
