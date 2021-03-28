import React , { Component } from 'react';
import {
  BrowserRouter, Switch,
  Route, Redirect,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from "./containers/login/Login";
import NotFound from "./containers/notFound/NotFound";
import Main from "./containers/main/Main";
import Test from "./containers/test/TestScreen"

const App = () => {
  return (
      <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <PrivateRoute exact path="/test" component={Test} />
            
            <Route exact path="/login" component={Login} /> 
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
  );
};

export default App;
