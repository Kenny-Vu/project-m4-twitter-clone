import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Router>
        <Route exact={true} path="/">
          My profile
        </Route>
        <Route path="/feed">feed</Route>
        <Route path="/profile">profile</Route>
      </Router>
    </div>
  );
}

export default App;
