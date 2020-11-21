import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { connect } from "react-redux";

const QuestionItem = (props) => {
  const {auth: {user}, room, question } = props;

const answeredCheck = question.answered.includes(user._id)
const sytlelink = answeredCheck ? { pointerEvents: 'none'}:{}
const buttonStyle = answeredCheck ? {
  backgroundColor: "#999999",
  borderColor: "#999999",
  color: "black",
  borderRadius: "10px 10px 10px 10px",
} : {
  backgroundColor: "#E5E5E5",
  borderColor: "#E5E5E5",
  color: "black",
  borderRadius: "10px 10px 10px 10px",
}

return (
    <Fragment>
      <Link to={`/${room._id}/answer/${question._id}`} style={sytlelink} >
        <Button
          className="text-break question-boxitem"
          style={buttonStyle}
          size="lg"
        >
          <div className="text-break">{question.questionDetail}</div>
        </Button>
      </Link>
      <br />
      <br />
      <br />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(QuestionItem);
