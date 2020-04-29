import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAskByRoomIdUserId, askUnload } from "../../actions/askActions";
import { getRoomById, roomUnload } from '../../actions/roomActions';
import AskHistory from './AskHistory';
import AskForm from './AskForm';
import { Container, Row, Col } from 'reactstrap';

const Ask = props => {
  const {
    getRoomById,
    roomUnload,
    getAskByRoomIdUserId,
    askUnload,
    ask: { askList, loading },
    room: { room },
    match
  } = props


  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();

  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]
  const dayIndex = d.getDay()
  const dayName = days[dayIndex]
  const timeString = dayName + ' ' + day + '-' + month + '-' + year;



  useEffect(() => {
    getRoomById(match.params.id);
    return () => { roomUnload() }
  }, [getRoomById, match.params.id, roomUnload])

  useEffect(() => {
    getAskByRoomIdUserId(match.params.id, '5e85403922192a21e87fbbaa');
    return () => { askUnload() }
  }, [getAskByRoomIdUserId, match.params.id, askUnload])


  return loading ? (
    <h1>Loading</h1>
  ) : (
      <Container fluid>
        <h1>ASK</h1>

        <h4 className="text-center font-weight-normal">{room.roomName}</h4>
        <div className="todayTime">{timeString}</div>
        <hr />

        <Container>
          <Row>
            <Col className="question-column">
              {askList && <AskHistory askList={askList} />}
            </Col>
          </Row>
          <Row>
            <Col sm="12"> {room && <AskForm room={room} />}</Col>
          </Row>
        </Container>


        <div className='mt-3 text-center'>
          <Link to="/" className="btn btn-primary">
            Go to Home
                </Link>
        </div>

      </Container >
    );
};

const mapStateToProps = state => ({
  room: state.room,
  ask: state.ask
})

export default connect(mapStateToProps, { getRoomById, getAskByRoomIdUserId, roomUnload, askUnload })(Ask);



