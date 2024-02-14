import { useState } from "react";
import { MenuItemT, MenuItemsType } from "./sideMenuItems";

type SideMenuProps = {
  menuItems: MenuItemsType;
};

const MenuList = ({ menuItems }: { menuItems: MenuItemsType }) => {
  return (
    <div>
      {menuItems.length > 0
        ? menuItems.map((item) => {
            return <MenuItem item={item} />;
          })
        : null}
    </div>
  );
};

const MenuItem = ({ item }: { item: MenuItemT }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div>
      <h1 onClick={() => setShowChildren(!showChildren)}>{item.label} {item.children ? (showChildren) ? "-" : "+" : ""}{}</h1>
      {item.children && showChildren ? (
        <div className="pl-5">
          <MenuList menuItems={item.children} />
        </div>
      ) : null}
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
