import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Bookrmarks from "./components/Bookmarks";

import GlobalStyle from "./GlobalStyles";

import { CurrentUserContext } from "./components/CurrentUserContext";

function App() {
  const { currentUser, status, test } = React.useContext(CurrentUserContext);

  console.log(test);
  return (
    <>
      <Router>
        <GlobalStyle />
        <Sidebar />
        <Wrapper>
          {status === "idle" ? (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/bookmarks" component={Bookrmarks} />
              <Route path="/tweet/tweetId" />
              <Route path="/:profileId" component={Profile} />
            </Switch>
          ) : (
            status
          )}
        </Wrapper>
      </Router>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
