import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Ask from "./components/Ask";
import AskPresent from "./components/AskPresent";
import Room from "./components/Room";
import NotFound from "./components/error/NotFound";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import AskQuestion from "./components/AskQuestion";
import { createRoom } from "./actions/roomActions";
import CreateRoom from "./components/CreateRoom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ask" component={Ask} />
          <Route exact path="/askpresent" component={AskPresent} />
          <Route exact path="/room" component={Room} />
          <Route exact path="/createroom" component={CreateRoom} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;