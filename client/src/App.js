import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

//IMPORTED COMPONENTS
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile/Profile";
import HomePage from "./components/HomePage";
import Notifications from "./components/Unrequired/Notifications";
import Bookmarks from "./components/Unrequired/Bookmarks";
import BigTweet from "./components/Tweet/BigTweet";
import ErrorScreen from "./components/ErrorScreen";
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
            {status === "idle" && (
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/bookmarks" component={Bookmarks} />
                <Route path="/tweet/:tweetId" component={BigTweet} />
                <Route path="/:profileId" component={Profile} />
              </Switch>
            )}
            {status === "loading" && <Load />}
            {status === "error" && <ErrorScreen />}
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
