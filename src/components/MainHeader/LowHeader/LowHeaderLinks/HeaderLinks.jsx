import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLinks = ({ links, toggleClass }) => {
  return (
    <>
      {links.map((link) => (
        <li onClick={toggleClass}>
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
