import React,{useState}from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
import OrganizerAskItem from "./OrganizerAskItem";
import { selectAllPresent, clearPresent } from "../../actions/orgAskActions";

const OrganizerAskList = (props) => {

  const {
    selectAllPresent,
    clearPresent,
    askList,
    room
  } = props;

  const selectAll =()=> {
    const askId = askList.map((ask)=>{
      return ask._id
    })
    selectAllPresent(askId,room._id)
  }

  const clearAll =()=> {
    const askId = askList.map((ask)=>{
      return ask._id
    })
    clearPresent(askId,room._id)
  }

  return (
    <div className="org-box">
      <Row className='pt-4 px-3'>
        <Col xs='4'>
          <h4 className="org-h4 text-left"> Question</h4>
        </Col>
        <Col xs='8' className='text-right '>
          <Button onClick={selectAll} className='m-1'> Select All</Button>
          <Button onClick={clearAll} className='m-1'> Clear</Button>
        </Col>
      </Row>
      <Row className='px-3'>
        <Col>
          <hr className="border border-secondary" />
        </Col>
      </Row>
      <Row>
        <Col>
          {askList.length >= 1 ? (
            <div className="org-boxlist">
              {askList.map((ask) => (
                <OrganizerAskItem key={ask._id} ask={ask} />
              ))}
            </div>
          ) : (
            <div className="org-boxlist">
              <p className="nulltext text-break">DON'T HAVE ANY QUESTION</p>
            </div>
          )}
        </Col>  
      </Row>
    </div>  
  );
};

export default connect(null, { selectAllPresent, clearPresent})(OrganizerAskList);
