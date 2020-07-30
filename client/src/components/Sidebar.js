import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { GiDuck } from "react-icons/gi";

const Sidebar = () => {
  return (
    <Sidenav>
      <GiDuck />
      <Router>
        <Link to="#">Home</Link>
        <Link to="#">Profile</Link>
        <Link to="#">Notifications</Link>
        <Link to="#">Bookmarks</Link>
      </Router>
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
  font-size: 1.25rem;
  padding: 0.5rem;
  a {
    display: block;
    text-decoration: none;
    margin: 0.5rem;
    color: #fff;
  }
`;

export default Sidebar;
