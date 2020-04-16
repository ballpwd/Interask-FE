import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllRoom } from "../actions/roomActions";
import SelectRoom from "./SelectRoom";

const Room = ({ getAllRoom, room: {roomList} }) => {
  useEffect(() => {
    getAllRoom();
  }, [getAllRoom]);
  
  console.log(roomList)

  const showRoom =
    roomList &&
    Array.isArray(roomList) &&
    roomList.map((room) => <SelectRoom key={room._id} room={room} />);

  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center">Select Room</h1>
      </div>

      <div>{showRoom}</div>

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
  room: state.room,
});

export default connect(mapStateToProps, { getAllRoom })(Room);







