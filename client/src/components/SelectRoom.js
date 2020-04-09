import React from "react";

const SelectRoom = ({
  roomQ: { _id, owner, roomName, askStatus, feedbackStatus },
}) => {
  return (
    <div>
      <div className="container-fuild">
        <p className="text-center">{owner.userName}</p>
        <p className="text-center">{roomName}</p>
        {/* <p className="text-center">{askStatus}</p>
        <p className="text-center">{feedbackStatus}</p> */}
        <hr />
      </div>
    </div>
  );
};

export default SelectRoom;
