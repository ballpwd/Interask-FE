import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";

const OrganizerQuestionItem = (props) => {
  const { question } = props;

  return (
    <Fragment>
      <div className="container-fluid">
        {/* <Link to={`/organizer/question/answer/${question._id}`}> */}
        <Card>
          <Button
            color="#e5e5e5"
            size="lg"
            style={{
              backgroundColor: "#e5e5e5",
              borderColor: "#e5e5e5",
              color: "black",
            }}
            className="pre-box"
          >
            <div>{question.questionDetail}</div>
          </Button>
        </Card>
        {/* </Link> */}
      </div>
    </Fragment>
  );
};

export default OrganizerQuestionItem;
