import React from "react";
import "../styles/Feedback.css";
function List({title, description }) {
  return (
    <div className="menuItem1">
      <h1> {title} </h1>
      <p> {description} </p>
    </div>
  );
}

export default List;