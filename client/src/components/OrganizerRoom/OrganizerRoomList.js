import React from "react";
import OrganizerRoomItem from "./OrganizerRoomItem";

const OrganizerRoomList = props  => {
const {roomList} = props
  return (
    <div >
      <h4 className='text-left font-weight-bold text-center'> Organizer ROOM</h4>
      <hr/>
        {Array.isArray(roomList)}
        {roomList.map(room => (<OrganizerRoomItem key={room._id} room={room} />))}
    </div>
  );
};

export default OrganizerRoomList;
