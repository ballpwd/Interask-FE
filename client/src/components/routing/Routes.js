import React from "react";
import { Route, Switch } from "react-router-dom";
import Ask from "../Ask/Ask";
import Room from "../Room/Room";
import OrganizerRoom from "../OrganizerRoom/OrganizerRoom";
import OrganizerAsk from "../OrganizerAsk/OrganizerAsk";
import OrganizerPresent from "../OrganizerPresentation/OrganizerPresent";
import NotFound from "../layout/NotFound";
import Login from "../Login/Login";
import LoginOrg from "../Login/LoginOrg";
import Loading from "../Loading/Loading";
import PrivateRoute from "../routing/PrivateRoute";
import OrganizerFeedback from "../OrganizerFeedback/OrganizerFeedback";
import OrganizerMenu from "../OrganizerMenu/OrganizerMenu";
import RoomMenu from "../RoomMenu/RoomMenu";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/organizer/login" component={LoginOrg} />
      <PrivateRoute exact path="/ask/:id" component={Ask} />
      <PrivateRoute exact path="/room" component={Room} />
      <PrivateRoute exact path="/room/:id" component={RoomMenu} />
      <PrivateRoute exact path="/organizer/room" component={OrganizerRoom} />
      <PrivateRoute exact path="/organizer/room/:id" component={OrganizerMenu} />
      <PrivateRoute exact path="/askpresent/:id" component={OrganizerPresent} />
      <PrivateRoute exact path="/organizer/ask/:id" component={OrganizerAsk} />
      <PrivateRoute exact path="/organizer/present/:id" component={OrganizerPresent}/>
      <PrivateRoute exact path="/organizer/feedback/:id" component={OrganizerFeedback}/>

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
