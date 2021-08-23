import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import {GuardedRoute} from './routeGuard/RouteGuard'
import { store } from "./store";
import { Login, Signup, Users } from "./pages";
import { Header } from "./components";


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
