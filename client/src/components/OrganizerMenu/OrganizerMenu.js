import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getOrgRoomById, editAskStatus, orgRoomUnload } from "../../actions/orgRoomActions";
import { Container, Row, Col, Button } from "reactstrap";
import Loading from '../Loading/Loading';
import { Link } from "react-router-dom";
import ask from "../../assets/ask.svg";
import question from "../../assets/question.svg";
import feedback from "../../assets/feedback.svg";

const OrganizerMenu = (props) => {
    const { 
      getOrgRoomById,
      orgRoomUnload,
      editAskStatus,
      orgRoom:{room,roomLoading},
      match 
  } = props ;

  const [askSwitch, setAskSwitch] = useState(true);

  useEffect(() => {
    console.log(match.params.id)
    getOrgRoomById(match.params.id) ;
    return () => { orgRoomUnload() }
} ,[getOrgRoomById, match.params.id, orgRoomUnload])

    console.log(askSwitch)
    console.log(roomLoading)
    console.log(room)
    return (room == null || roomLoading) ? (
      <Loading></Loading>
    ) : (
      <Fragment>
        <Container className="orgmenu-room">
          <p>ROOM : {room.roomName}</p>
          <p>PIN : {room.code}</p>
          
        </Container>
        <Container>
          <Row className="orgmenu-row">
            <Col className="my-4">
              <Link to={`/organizer/ask/${room._id}`}>
              <Button
              className="orgmenu-box"
              size="lg"
              style={{
                  backgroundColor: "#e5e5e5",
                  borderColor: "#e5e5e5",
                  color: "black",
              }}
              >
              <p className="orgmenu-text">ASK</p>
              <img src={ask} width="64px" height="64px"></img>
              </Button>
              </Link>


              <Col className="text-center mt-2">
                <div className="custom-control custom-switch text-center ">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="controlAskSwitch"
                    checked={room.askStatus}
                    onChange={() => editAskStatus(room._id)}
                  />
                
                  <label
                    className="custom-control-label anonymous"
                    htmlFor="controlAskSwitch"
                  >
                    ON-OFF FUNCTION
                  </label>
                </div>
              </Col>



              <Col className='text-center mt-5 '>
                <Link to={`/askpresent/${room._id}`}>
                <Button className="btn btn-dark org-btn">Presentation</Button>
                </Link>
              </Col>
            </Col>
          <Col className="my-4">
            
              <Button
              className="orgmenu-box"
              size="lg"
              style={{
                  backgroundColor: "#e5e5e5",
                  borderColor: "#e5e5e5",
                  color: "black",
              }}
              >
              <p className="orgmenu-text">QUESTION</p>
              <img src={question} width="64px" height="64px"></img>
              </Button>
            </Col>
            
            <Col className="my-4">
            <Link to={`/organizer/feedback/${room._id}`}>
              <Button
              className="orgmenu-box"
              size="lg"
              style={{
                  backgroundColor: "#e5e5e5",
                  borderColor: "#e5e5e5",
                  color: "black",
              }}
              >
              <p className="orgmenu-text">FEEDBACK</p>
              <img src={feedback} width="64px" height="64px"></img>
              </Button>
              </Link>
              <Col className="text-center mt-2">
                <div className="custom-control custom-switch text-center ">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="controlFeedbackSwitch"
                  />
                
                  <label
                    className="custom-control-label anonymous"
                    htmlFor="controlFeedbackSwitch"
                  >
                    ON-OFF FUNCTION
                  </label>
                </div>
              </Col>
            </Col>
          </Row>
          </Container>
       </Fragment>
  
    )
}

const mapStateToProps = state => ({
  orgRoom: state.orgRoom,
})

export default connect(mapStateToProps,{getOrgRoomById,editAskStatus,orgRoomUnload})(OrganizerMenu) ;