import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAsk } from "../actions/askActions";
import AskQuestion from "./AskQuestion";

const AskPresent = ({ getAsk, ask }) => {
  useEffect(() => {
    getAsk();
  }, [getAsk]);

  const askList =
    ask &&
    Array.isArray(ask) &&
    ask.map((askQ) => <AskQuestion key={askQ._id} askQ={askQ} />);

  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center">Ask</h1>
      </div>

      <div>{askList}</div>

      <div>
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ask: state.ask,
});

export default connect(mapStateToProps, { getAsk })(AskPresent);
