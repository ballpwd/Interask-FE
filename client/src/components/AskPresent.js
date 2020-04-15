import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllAsk } from "../actions/askActions";
import AskQuestion from "./AskQuestion";

const AskPresent = ({ getAllAsk, ask: {askList} }) => {
  useEffect(() => {
    getAllAsk();
  }, [getAllAsk]);

  const showAsk =
    askList &&
    Array.isArray(askList) &&
    askList.map((ask) => <AskQuestion key={ask._id} ask={ask} />);

  return (
    <div>
      {console.log(askList)}
      <div className="container-fluid">
        <h1 className="text-center">Ask</h1>
      </div>

      <div>{showAsk}</div>

      <div>
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ask: state.ask
});

export default connect(mapStateToProps, { getAllAsk })(AskPresent);
