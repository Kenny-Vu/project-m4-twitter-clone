import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile/Profile";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import BigTweet from "./components/BigTweet";

import GlobalStyle from "./GlobalStyles";

import { CurrentUserContext } from "./components/CurrentUserContext";
import Load from "./components/Load";

function App() {
  const { currentUser, status } = React.useContext(CurrentUserContext);
  return (
    <>
      <Router>
        <GlobalStyle />
        <Wrapper>
          {status === "idle" && <Sidebar />}
          <Main>
            {status === "idle" ? (
              <Switch>
                <Route exact path="/" component={HomeFeed} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/bookmarks" component={Bookmarks} />
                <Route path="/tweet/:tweetId" component={BigTweet} />
                <Route path="/:profileId" component={Profile} />
              </Switch>
            ) : (
              <Load />
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

export default App;
