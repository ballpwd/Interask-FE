import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRoom } from "../actions/roomActions";
import SelectRoom from "./SelectRoom";

const Room = ({ getRoom, room }) => {
  useEffect(() => {
    getRoom();
  }, [getRoom]);

  const roomList =
    room &&
    Array.isArray(room) &&
    room.map((roomQ) => <SelectRoom key={roomQ._id} roomQ={roomQ} />);
  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center">Select Room</h1>
      </div>

      <div>{roomList}</div>

      <div>
        <Link to="/createroom" className="btn btn-primary">
          Create Room
        </Link>
      </div>
      <div>
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ask: state.room,
});

export default connect(mapStateToProps, { getRoom })(Room);
