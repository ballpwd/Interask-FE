import React, { useState } from "react";
import { addFeedback } from "../../actions/feedbackActions";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

const FeedbackForm = (props) => {
  const [text, setText] = useState("");
  const{
    room, 
    addFeedback
  } = props

  const handleSubmit = (e) => {
    e.preventDefault();
    const roomId = room._id;
    addFeedback({ roomId, text});
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Row className="mt-2">
          <Col xs="12" className="p-2">
            <input
              className="askText text-break"
              type="text"
              name="text"
              placeholder="Suggestion/Review"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-2">
            <button class="btn btn-primary" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default connect(null, { addFeedback })(FeedbackForm);
