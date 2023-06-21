import React from "react";
import { MenuLists } from "../helpers/MenuLists";
import List from "../components/List";
import "../styles/Feedback.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Menu() {
  return (
    <>
    <Navbar/>
    <div className="menu">
      <h1 className="menuTitle">What people are saying...</h1>
      
      <div className="menuList">
        {MenuLists.map((menuItem1, key) => {
          return (
            <List
              key={key}
              title={menuItem1.title}
             description={menuItem1.description}
            />
          );
        })}
      </div>
    </div>
    </>

  );
}

export default Menu;