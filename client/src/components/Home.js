import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <div>
          <Link to="/ask" className="btn btn-primary">
            Go to Ask
          </Link>
        </div>
        <div>
          <Link to="/askpresent" className="btn btn-primary">
            Go to AskPresent
          </Link>
        </div>
        <div>
          <Link to="/room" className="btn btn-primary">
            Go to Room
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
