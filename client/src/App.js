import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Ask from "./components/Ask";
import Room from "./components/Room";
import OrganizerRoom from "./components/OrganizerRoom";
import CreateRoom from "./components/CreateRoom";
import OrganizerAsk from "./components/OrganizerAsk";
import OrganizerPresent from "./components/OrganizerPresent";
import NotFound from "./components/error/NotFound";
import Cookies from "js-cookie"

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
          <Route exact path="/ask/:id" component={Ask} />
          <Route exact path="/askpresent/:id" component={OrganizerPresent} />
          <Route exact path="/room" component={Room} />
          <Route exact path="/organizer/room" component={OrganizerRoom} />
          <Route exact path="/createroom" component={CreateRoom} />
          <Route exact path="/organizer/ask/:id" component={OrganizerAsk} />
          <Route
            exact
            path="/organizer/present/:id"
            component={OrganizerPresent}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
