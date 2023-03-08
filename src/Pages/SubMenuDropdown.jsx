import React from "react";
import MenuItem from "./MenuItem";
import style from "../style/Home.module.css";

const SubMenuDropdown = ({ submenu, depth, showmenu }) => {
  return (
    <>
      <ul
        className={`${style.subMenuDropdown} ${
          depth > 1 ? style.subMenuDropdownStyle : ""
        } ${showmenu ? style.showMenu : style.hideMenu}`}
      >
        {submenu.map((menu, index) => {
          return (
            <div key={index}>
              <MenuItem item={menu} depth={depth + 1} />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default SubMenuDropdown;
