import { FunctionComponent } from "react";
import MenuItem, { MenuItemProps } from "./menuItem";

export type MenuProps = {
  entries: MenuItemProps[]
}

const Menu: FunctionComponent<MenuProps> = (props) => {
  const { entries } = props;

  return (
    <div className="container">
      {entries.map((item, index) => <MenuItem key={index} {...item}/>)}
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Menu;
