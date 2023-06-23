import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
function Menu() {
  
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
    <Navbar/>
    <div className="menu">
      <h1 className="menuTitle">Services</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              title={menuItem.title}
              description={menuItem.description}
            />
          );
        })}
      </div>
    </div>
    {!isHomePage && <Footer />}
    </>

  );
}

export default Menu;