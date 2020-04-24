import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Ask from "../Ask/Ask";
import Room from "../Room/Room";
import OrganizerRoom from "../OrganizerRoom/OrganizerRoom";
import CreateRoom from "../CreateRoom";
import OrganizerAsk from "../OrganizerAsk/OrganizerAsk";
import OrganizerPresent from "../OrganizerPresentation/OrganizerPresent";
import NotFound from '../layout/NotFound';


const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path="/ask/:id" component={Ask} />
        <Route exact path="/askpresent/:id" component={OrganizerPresent} />
        <Route exact path="/room" component={Room} />
        <Route exact path="/organizer/room" component={OrganizerRoom} />
        <Route exact path="/createroom" component={CreateRoom} />
        <Route exact path="/organizer/ask/:id" component={OrganizerAsk} />
        <Route exact path="/organizer/present/:id" component={OrganizerPresent}/>
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
