import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useEffect} from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import Routes from './components/routing/Routes';
import Home from "./components/Home";
import Login from './components/Login/Login';
import queryString from "query-string";

//Redux
import store from "./store";
import {loadToken,loadUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  const token = queryString.parse(useLocation().search).token
  
  useEffect(() => {
    if(token){   // check token from queryString
      store.dispatch(loadToken(token))
      setAuthToken(token)
      store.dispatch(loadUser());
    }else if (localStorage.token) {  // check token from localStorage
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
    
  }, []);
  
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Routes} />
    </Switch>
  );
};

export default App;
