import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookrmarks from "./components/Bookmarks";

import GlobalStyle from "./GlobalStyles";

import { CurrentUserContext } from "./components/CurrentUserContext";

function App() {
  const { currentUser, status } = React.useContext(CurrentUserContext);
  return (
    <>
      <Router>
        <GlobalStyle />

        <Wrapper>
          <Sidebar />
          <Main>
            {status === "idle" ? (
              <Switch>
                <Route exact path="/" component={HomeFeed} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/bookmarks" component={Bookrmarks} />
                <Route path="/tweet/tweetId" />
                <Route path="/:profileId" component={Profile} />
              </Switch>
            ) : (
              <Loading>{status}</Loading>
            )}
          </Main>
        </Wrapper>
      </Router>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 1 0 auto;
`;
const Loading = styled.div``;

export default App;
