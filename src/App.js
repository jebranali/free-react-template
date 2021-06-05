import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from "./views/pages/login/Login";
import Register from "./views/pages/register/Register";
import ForgotPassword from "./views/pages/forgot-password/ForgotPassword";
import Dashboard from "./views/dashboard/Dashboard";

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path="/" name="Login Page" render={props => <Login {...props}/>} />
          <Route exact path="/register" name="Register" render={props => <Register {...props}/>} />
          <Route exact path="/forgot-password" name="ForgotPassword" render={props => <ForgotPassword {...props}/>} />
          <Route exact path="/dashboard/:page" name="Dashboard" render={props => <Dashboard {...props}/>} />
        </Switch>
      </HashRouter>
  );
}

export default App;
