import React, { useEffect, useState, useRef } from "react";
import style from "../style/Home.module.css";
import SubMenuDropdown from "./SubmenuDropdown";

const MenuItem = ({ item, depth }) => {
  const myref = useRef();
  const [showmenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const myhandler = (event) => {
      if (showmenu && myref.current && !myref.current.contains(event.target)) {
        setShowMenu(!showmenu);
      }
    };
    document.addEventListener("mousedown", myhandler);
  }, [showmenu]);

  const onMouseEnter = () => {
    setShowMenu(true);
  };
  const onMouseLeave = () => {
    setShowMenu(false);
  };
  return (
    <>
      {item.submenu && item.submenu.length > 0 ? (
        <li
          className={style.parent}
          ref={myref}
          //   onMouseEnter={onMouseEnter}
          //   onMouseLeave={onMouseLeave}
        >
          <div className={style.btnstyle} onClick={handleToggleMenu}>
            {item.title}
            {depth > 1 ? (
              <i
                className="fa fa-angle-right"
                aria-hidden="true"
                style={{ color: "white", marginLeft: "10px" }}
              ></i>
            ) : (
              <i
                className="fa fa-angle-down"
                aria-hidden="true"
                style={{ color: "white", marginLeft: "10px" }}
              ></i>
            )}
          </div>
          <SubMenuDropdown
            submenu={item.submenu}
            depth={depth}
            showmenu={showmenu}
          />
        </li>
      ) : (
        <li>{item.title}</li>
      )}
    </>
  );
};

export default MenuItem;
