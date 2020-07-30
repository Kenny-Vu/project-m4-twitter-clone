import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Bookrmarks from "./components/Bookmarks";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/bookmarks" component={Bookrmarks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
