import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAskByRoomIdUserId, askUnload } from "../../actions/askActions";
import { getRoomById, roomUnload } from '../../actions/roomActions';
import AskHistory from './AskHistory';
import AskForm from './AskForm';


const Ask = props => {
  const { 
    getRoomById,
    roomUnload, 
    getAskByRoomIdUserId,
    askUnload, 
    ask: { askList,loading }, 
    room: { room }, 
    match
  } = props


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
    <div>
      <div className="container">
        <h1 className='text-center font-weight-bold text-white'>ASK</h1>

        <div className="bg-white rounded">
          <h3 className="text-center font-weight-normal">{room.roomName}</h3>


          <div>
            {askList && <AskHistory askList={askList} />}
          </div>
        </div>
        <div>
          {room && <AskForm room={room} />}
        </div>
      </div>

      <div>
        <Link to="/" className="text-center btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  room: state.room,
  ask: state.ask
})

export default connect(mapStateToProps, { getRoomById, getAskByRoomIdUserId, roomUnload, askUnload})(Ask);



