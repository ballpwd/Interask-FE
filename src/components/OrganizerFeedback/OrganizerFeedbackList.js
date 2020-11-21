import React from "react";
import OrganizerFeedbackItem from "./OrganizerFeedbackItem";
import { Row, Col } from "reactstrap";

const OrganizerFeedbackList = ({ feedbackList }) => {
  return (
    <div className="org-box">
      <Row className='pt-4 px-3'>
        <Col>
          <h4 className="org-h4 text-left"> Feedback</h4>
        </Col>
      </Row>
      <Row className='px-3'>
        <Col>
          <hr className="border border-secondary" />
        </Col>
      </Row>
      <Row>
        <Col>
          {feedbackList.length >= 1 ? (
            <div className="org-boxlist">
              {feedbackList.map((feedback) => (
                <OrganizerFeedbackItem key={feedback._id} feedback={feedback} />
              ))}
            </div>
          ) : (
            <div className="org-boxlist">
              <p className="nulltext text-break">DON'T HAVE ANY FEEDBACK</p>
            </div>
          )}
        </Col>  
      </Row>
    </div>  
  );
};

export default OrganizerFeedbackList;
