import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registeration from "./Components/Registeration";
import profile from "./Components/profile";

import "./App.css";
//import ForgotPwd from './Components/ForgotPwd';

function App() {
  return (
    <>
      <profile />
      <Router>
        <Switch>
          <Route exact path="/" component={Registeration} />

          <Route exact path="/profile" component={profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
