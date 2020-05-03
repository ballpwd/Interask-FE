import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const RoomItem = (props) => {
  const {
    room: { _id, roomName },
  } = props;
  return (
    <div>
      <Link to={`/ask/${_id}`}>
        <Button
          className="room-box"
          style={{
            backgroundColor: "white",
            borderColor: "#e493c980",
            color: "black",
            borderRadius: "10px 10px 10px 10px",
            fontSize: "24px",
          }}
          size="md"
        >
          <div>{roomName}</div>
        </Button>
      </Link>
      <div className="p-4"></div>
    </div>
  );
};

export default RoomItem;
