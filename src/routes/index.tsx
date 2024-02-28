import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" Component={Home} key="home" />
        <Route path="/Login" Component={Login} key="login" />
        <Route path="/Signup" Component={Signup} key="signup" />
      </Switch>
    </Router>
  );
};

export default Routes;
