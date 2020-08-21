import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Ask from "../Ask/Ask";
import Room from "../Room/Room";
import OrganizerRoom from "../OrganizerRoom/OrganizerRoom";
import OrganizerAsk from "../OrganizerAsk/OrganizerAsk";
import OrganizerPresent from "../OrganizerPresentation/OrganizerPresent";
import NotFound from '../layout/NotFound';
import Login from '../Login/Login';
import LoginOrg from '../Login/LoginOrg';
import Loading from '../Loading/Loading';

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/home" component={Login} />
        <Route exact path="/ask/:id" component={Ask} />
        <Route exact path="/askpresent/:id" component={OrganizerPresent} />
        <Route exact path="/room" component={Room} />
        <Route exact path="/organizer/room" component={OrganizerRoom} />
        <Route exact path="/organizer" component={LoginOrg} />
        <Route exact path="/organizer/ask/:id" component={OrganizerAsk} />
        <Route exact path="/organizer/present/:id" component={OrganizerPresent}/>
        <Route component={NotFound} />
      </Switch>
  
  );
};

export default Routes;
