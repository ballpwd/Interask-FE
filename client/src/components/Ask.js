import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAskByRoomIdUserId } from "../actions/askActions";
import { getRoomById } from '../actions/roomActions';
import AskHistory from './AskHistory';
import AskForm from './AskForm';


const Ask = ({ getRoomById, getAskByRoomIdUserId, ask: { askList }, room: { room }, match }) => {

  useEffect(() => {
    getRoomById(match.params.id);
  }, [getRoomById, match.params.id])

  useEffect(() => {
    getAskByRoomIdUserId(match.params.id, '5e85403922192a21e87fbbaa');
  }, [getAskByRoomIdUserId, match.params.id])

  return (
    <div>
      <div class="container">
        <h1 class='text-center font-weight-bold text-white'>ASK</h1>


        <div class="bg-white rounded">
          <h3 class="text-center font-weight-normal">{room.roomName}</h3>


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

export default connect(mapStateToProps, { getRoomById, getAskByRoomIdUserId })(Ask);



