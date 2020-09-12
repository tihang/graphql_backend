import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu size="large" pointing secondary>
      <Menu.Item name="home" as={NavLink} exact to="/" />

      <Menu.Menu position="right">
        <Menu.Item name="login" as={NavLink} exact to="/login" />
        <Menu.Item name="register" as={NavLink} exact to="/register" />
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
