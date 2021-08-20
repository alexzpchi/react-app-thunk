import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import {GuardedRoute} from './routeGuard/RouteGuard'
import { store } from "./store/index.js";
import { Login } from "./pages";
import { Signup } from "./pages";
import {Users} from "./pages";
import { Header } from "./components/header";


function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Router>
          <Switch>
            <Redirect exact from='/' to='/login' /> 
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <GuardedRoute path='/users' component={Users} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
