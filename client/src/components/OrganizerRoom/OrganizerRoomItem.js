import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Col } from "reactstrap";
const OrganizerRoomItem = (props) => {
  const {
    room: { _id, roomName },
  } = props;
  return (
    <Col className='my-4'>
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
          {roomName}
        </Button>
      </Link>
    </Col>
  );
};

export default OrganizerRoomItem;
