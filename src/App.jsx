import React from "react";
import "./index.css";
import MenuItem from "./Pages/MenuItem";
import styles from "./style/Home.module.css";

const menu_items = [
  { title: "Home" },
  {
    title: "Services",
    submenu: [
      { title: "Digital Marketing" },
      { title: "Email Marketing" },
      { title: "Online Courses" },
      {
        title: "Live Couching",

        submenu: [
          { title: "Digital Marketing" },
          {
            title: "Logo Designing",
          },
          { title: "Email Marketing" },
          {
            title: "Online Courses",
            submenu: [
              { title: "Digital Marketing" },
              { title: "Email Marketing" },
              { title: "Online Courses" },
              { title: "Live Couching" },
              { title: "Affiliate Marketing" },
            ],
          },
          { title: "Live Couching" },
          { title: "Affiliate Marketing" },
        ],
      },
      { title: "Affiliate Marketing" },
    ],
  },
  { title: "Contact" },
  { title: "Technologies" },
  {
    title: "Hardware",
    submenu: [
      { title: "Digital Marketing" },
      { title: "Email Marketing" },
      { title: "Online Courses" },
      {
        title: "Live Couching",
        submenu: [
          { title: "Digital Marketing" },
          { title: "Email Marketing" },
          { title: "Online Courses" },
          { title: "Live Couching" },
          { title: "Affiliate Marketing" },
        ],
      },
      { title: "Affiliate Marketing" },
    ],
  },
  { title: "Software" },
  { title: "About us" },
];

function App() {
  return (
    <>
      <div className={styles.header}>
        <ul>
          {menu_items.map((item, index) => {
            return (
              <div key={index}>
                <MenuItem item={item} depth={1} />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
