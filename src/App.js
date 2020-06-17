import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './css/App.css';
import Index from './pages/Index';
import Login from './pages/Login';
import ChoosePlan from './pages/ChoosePlan'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/login' component={Login} />
        <Route path='/choose-plan' component={ChoosePlan} />
      </Switch>
       
    </Router>

  );
}

export default App;
