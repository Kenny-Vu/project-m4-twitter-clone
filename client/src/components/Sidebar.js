import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { GiDuck } from "react-icons/gi";

const Sidebar = () => {
  return (
    <Sidenav>
      <GiDuck />
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/bookmarks">Bookmarks</Link>
    </Sidenav>
  );
};

const Sidenav = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #7fdbda;
  color: #fff;
  font-size: 4rem;
  padding: 0.5rem;
  a {
    display: block;
    text-decoration: none;
    margin: 0.5rem;
    color: #fff;
    font-size: 1.25rem;
  }
`;

export default Sidebar;
