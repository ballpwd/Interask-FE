import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from './components/routing/Routes';
import Home from "./components/Home";
import Login from './components/Login/Login';
import Cookies from "js-cookie";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadToken,loadUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    const token = Cookies.get('token')
    if(token){
        store.dispatch(loadToken(token))
        setAuthToken(token)
        store.dispatch(loadUser());
    }
  }, []);
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
