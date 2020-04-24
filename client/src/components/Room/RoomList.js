import React from "react";
import RoomItem from "./RoomItem";

const RoomList = props  => {
const {roomList} = props
  return (
    <div >
      <h4 className='text-left font-weight-bold text-center'> ROOM</h4>
      <hr/>
        {Array.isArray(roomList)}
        {roomList.map(room => (<RoomItem key={room._id} room={room} />))}
    </div>
  );
};

export default RoomList;
