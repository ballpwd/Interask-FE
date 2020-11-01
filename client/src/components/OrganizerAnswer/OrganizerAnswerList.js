import React from "react";
import OrganizerAnswerItem from "./OrganizerAnswerItem";
import { Row, Col } from "reactstrap";

const OrganizerAnswerList = ({ answerList }) => {
  return (
    <div className="org-box">
      <Row className='pt-4 px-3'>
        <Col>
          <h4 className="org-h4 text-left"> Answer</h4>
        </Col>
      </Row>
      <Row className='px-3'>
        <Col>
          <hr className="border border-secondary" />
        </Col>
      </Row>
      <Row>
        <Col>
          {answerList.length >= 1 ? (
            <div className="org-boxlist">
              {answerList.map((answer) => (
                <OrganizerAnswerItem key={answer._id} answer={answer} />
              ))}
            </div>
          ) : (
            <div className="org-boxlist">
              <p className="nulltext text-break">DON'T HAVE ANY ANSWER</p>
            </div>
          )}
        </Col>  
      </Row>
    </div>  
  );
};

export default OrganizerAnswerList;
