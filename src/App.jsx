import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {GuardedRoute} from './routeGuard/RouteGuard'
import { store } from "./store/index.js";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Header } from "./components/Header";
import {Users} from "./pages/Users";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Login} /> 
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
