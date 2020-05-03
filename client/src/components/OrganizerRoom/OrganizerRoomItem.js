import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const OrganizerRoomItem = (props) => {
  const {
    room: { _id, roomName },
  } = props;
  return (
    <div>
      <Link to={`/organizer/ask/${_id}`}>
        <Button
          className="orgroom-box"
          size="lg"
          style={{
            backgroundColor: "#e5e5e5",
            borderColor: "#e5e5e5",
            color: "black",
          }}
        >
          <div>{roomName}</div>
        </Button>
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
};

export default OrganizerRoomItem;
