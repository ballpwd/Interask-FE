import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAskByRoomIdUserId, askUnload } from '../../actions/askActions';
import { getRoomById, roomUnload } from '../../actions/roomActions';
import Loading from '../Loading/Loading';
import AskHistory from './AskHistory';
import AskForm from './AskForm';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../Navbar/NavBar'

const Ask = (props) => {
  const {
    getRoomById,
    roomUnload,
    getAskByRoomIdUserId,
    askUnload,
    ask: { askList, askLoading },
    room: { room, roomLoading },
    match,
  } = props;

  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayIndex = d.getDay();
  const dayName = days[dayIndex];
  const timeString = dayName + " " + day + "-" + month + "-" + year;
  
  useEffect(() => {
    getRoomById(match.params.id);
    return () => {
      roomUnload();
    };
  }, [getRoomById, match.params.id, roomUnload]);

  useEffect(() => {
    getAskByRoomIdUserId(match.params.id, "5e85403922192a21e87fbbaa");
    return () => {
      askUnload();
    };
  }, [getAskByRoomIdUserId, match.params.id, askUnload]);

  return (askLoading || roomLoading) ? (
    <Loading></Loading>
  ) : (

      <Fragment>
        <div className='ask-section bg fullscreen'>
          <NavBar></NavBar>
          <Container fluid className='topic'>
            <h1>ASK</h1>
          </Container>

          <Container>
            <Row>
              <Col className='ask-box mx-2'>
                <h4 className='askRoomName'>{room.roomName}</h4>
                <div className='todayTime'>Today : {timeString}</div>
                <hr className='border border-secondary'/>
                {askList && <AskHistory askList={askList} />}
              </Col>
            </Row>
          </Container>
          <Container class ='ask-form'>
            {room && <AskForm room={room} />}
          </Container>


          <div className='mt-3'>
            <Link to='/' className='btn btn-primary'>
              Go to Home
                </Link>
          </div>
        </div>
      </Fragment>


    );

};

const mapStateToProps = (state) => ({
  room: state.room,
  ask: state.ask,
});

export default connect(mapStateToProps, {
  getRoomById,
  getAskByRoomIdUserId,
  roomUnload,
  askUnload,
})(Ask);
