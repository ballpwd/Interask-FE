import React, {Fragment} from "react";
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
import Alert from '../layout/Alert';

const Routes = () => {
  return (
    <Fragment>
      <Alert/>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/organizer/login" component={LoginOrg} />
        <PrivateRoute exact path="/ask/:id" component={Ask} />
        <PrivateRoute exact path="/room" component={Room} />
        <PrivateRoute exact path="/room/:id" component={RoomMenu} />
        <PrivateRoute exact path="/organizer/room" component={OrganizerRoom} />
        <PrivateRoute exact path="/organizer/room/:id" component={OrganizerMenu} />
        <PrivateRoute exact path="/organizer/ask/:id" component={OrganizerAsk} />
        <PrivateRoute exact path="/askpresent/:id" component={OrganizerPresent} />
        <PrivateRoute exact path="/organizer/feedback/:id" component={OrganizerFeedback}/>


        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/organizer/login" component={LoginOrg} />
        <PrivateRoute exact path="/" component={Room} />
        <PrivateRoute exact path="/:roomid" component={RoomMenu} />
        <PrivateRoute exact path="/:roomid/ask" component={Ask} /> 
         /:roomid/feedback     ///Feedback Page///
         /:roodid/question     ///Question Page///
        <PrivateRoute exact path="/organizer" component={OrganizerRoom} />
        <PrivateRoute exact path="/organizer/:roomid" component={OrganizerMenu} />
        <PrivateRoute exact path="/organizer/:roomid/ask" component={OrganizerAsk} />
        <PrivateRoute exact path="/organizer/:roomid/ask/present" component={OrganizerPresent} />
        <PrivateRoute exact path="/organizer/:roomid/feedback" component={OrganizerFeedback}/>
        /organizer/:roomid/question     ///Org Question Page///
        /organizer/:roomid/question/:questionid   ///Org Question Answer Page/// */}


        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
