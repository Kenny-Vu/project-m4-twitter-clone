import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

import {
  GiDuck,
  GiBarn,
  GiBigEgg,
  GiWoodenFence,
  GiWhistle,
} from "react-icons/gi";
import { COLORS } from "../constants";

const { primary, secondary } = COLORS;

const Sidebar = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <Sidenav>
      <GiDuck />
      <Link to="/">
        <GiBarn />
        Home
      </Link>
      <Link to={`/${currentUser.handle}`}>
        <GiBigEgg />
        Profile
      </Link>
      <Link to="/notifications">
        <GiWhistle />
        Notifications
      </Link>
      <Link to="/bookmarks">
        <GiWoodenFence />
        Bookmarks
      </Link>
      <TweetButton>Quack!</TweetButton>
    </Sidenav>
  );
};

const Sidenav = styled.div`
  flex: 0 0 350px;
  height: 100%;
  width: 250px;
  color: #fff;
  padding: 0.5rem;
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
`;
const TweetButton = styled.button`
  display: block;
  margin: 4rem auto;
  border: none;
  padding: 0.5rem;
  width: 120px;
  height: 70px;
  font-size: 1.25rem;
  color: #fff;
  background-color: ${primary};
  border-radius: 18px;
  cursor: pointer;
`;

export default Sidebar;
