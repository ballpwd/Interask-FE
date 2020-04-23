import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <div>
          <Link to="/room" className="btn btn-primary">
            Go to Room 
          </Link>
        </div>
        <div>
          <Link to="/organizer/room" className="btn btn-primary">
            Go to OrganizerRoom 
          </Link>
        </div>
        <div>
          <Link to="/ask/5e8546ad7db02d2b70f38d78" className="btn btn-primary">
            Go to Ask //mockup room 5e85457618a87c3a58dfffb8
          </Link>
        </div>
        <div>
          <Link to="/askpresent/5e85457618a87c3a58dfffb8" className="btn btn-primary">
            Go to AskPresent //mockup room 5e85457618a87c3a58dfffb8
          </Link>
        </div>
        
        <div>
          <Link to="/organizer/ask/5e85457618a87c3a58dfffb8" className="btn btn-primary">
            Go to OrganizerAsk //mockup room 5e85457618a87c3a58dfffb8
          </Link>
        </div>
        <div>
          <Link to="/organizer/ask/5e8546ad7db02d2b70f38d78" className="btn btn-primary">
            Go to OrganizerAsk //mockup room 5e8546ad7db02d2b70f38d78
          </Link>
        </div>
        <div>
          <a href="/api/auth/google" className="btn btn-primary">
            login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
