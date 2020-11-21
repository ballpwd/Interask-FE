import React from "react";
import { Row, Col } from "reactstrap";

const OrganizerAnswerItem = (props) => {
  const {
    answer: {
      user: { userName },
      text,
      date,
    },
  } = props;
  const time = new Date(date);
  return (
    <Row className='justify-content-center align-items-center mx-3'>
      <Col className='p-0'>
          <div className='boxitem'>
              <div className='org-p p-2 text-break'> 
                {text} <br />- Answer from: {userName} at {time.toUTCString()}
              </div>
          </div>
      </Col>
    </Row> 
  );
};

export default OrganizerAnswerItem;
