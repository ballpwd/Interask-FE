import React from "react";
import RoomItem from "./RoomItem";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import plus from "../../assets/plus.svg";

const RoomList = (props) => {
  const { roomList } = props;
  return (
    <div>
      <Container className="text-center">
        {Array.isArray(roomList)}
        {roomList.map((room) => (
          <RoomItem key={room._id} room={room} />
        ))}
        <Link to="/">
          <Button
            className="btn-join"
            style={{
              backgroundColor: "#C19AD8",
              borderColor: "white",
              color: "white",
              borderRadius: "10px 10px 10px 10px",
              fontSize: "24px",
            }}
            size="md"
          >
            <div>
              <img src={plus} width="38px" height="38px"></img> JOIN ROOM
            </div>
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default RoomList;
