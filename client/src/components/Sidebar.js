import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { FaCat, FaHome } from "react-icons/fa";
import { FiUser, FiBookmark, FiBell } from "react-icons/fi";
import { COLORS } from "../constants";

const { primary, secondary } = COLORS;

const Sidebar = () => {
  return (
    <Sidenav>
      <FaCat />
      <Link to="/">
        <FaHome />
        Home
      </Link>
      <Link to="/:profileId">
        <FiUser />
        Profile
      </Link>
      <Link to="/notifications">
        <FiBell />
        Notifications
      </Link>
      <Link to="/bookmarks">
        <FiBookmark />
        Bookmarks
      </Link>
      <button>Quack!</button>
    </Sidenav>
  );
};

const Sidenav = styled.div`
  height: 100%;
  width: 350px;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  padding: 0.5rem;
  overflow-x: hidden;
  box-shadow: 0 0 2px grey;
  > svg {
    color: ${primary};
    display: block;
    margin: 2rem auto;
    font-size: 5rem;
  }
  a {
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
    margin: 2rem 2.5rem;
    color: black;
    font-size: 1.25rem;
    padding: 0.5rem;
    transition: 0.2s;
    width: 70%;
  }
  a:hover {
    transform: translate(12px, 0) scale(1.2);
    border-radius: 12px;
    color: ${primary};
    background-color: ${secondary};
  }
  a:focus {
    color: ${primary};
  }
  a svg {
    margin-right: 1.75rem;
  }
  button {
    display: block;
    margin: 4rem auto;
    border: none;
    padding: 0.5rem;
    width: 120px;
    height: 70px;
    font-size: 1.25rem;
    color: #fff;
    background-color: ${primary};
    border-radius: 8px;
  }
`;

export default Sidebar;
