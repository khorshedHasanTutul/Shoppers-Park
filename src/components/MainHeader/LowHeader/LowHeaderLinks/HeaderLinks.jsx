import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLinks = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <li>
          <NavLink
            to={link.to}
            activeStyle={{
              color: "#DF2C8A",
            }}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </>
  );
};
export default HeaderLinks;

// style={({ isActive }) => {
//   return {
//     display: "block",
//     margin: "1rem 0",
//     color: isActive ? "#DF2C8A" : ""
//   };
// }}
