import React from "react";
import Navbar from "./components/navbar/navbar";
import Navbar2 from "./components/navbar/navbar2";
import Home from "./components/pages/home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/pages/dashboard/Dashboard";
import AuthGuard from "./components/auth/helpers/AuthGuard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar2 />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/user/:uid"
            render={props => (
              <AuthGuard
                link={"/signin"}
                component={<Dashboard {...props} />}
              />
            )}
          />
          <Route
            exact
            path="/signin"
            render={props => (
              <AuthGuard link={"/"} component={<SignIn {...props} />} />
            )}
          />
          <Route
            exact
            path="/signUp"
            render={props => (
              <AuthGuard link={"/"} component={<SignUp {...props} />} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
