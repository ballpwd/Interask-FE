import React from "react";
import OrganizerRoomItem from "./OrganizerRoomItem";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import { PlusCircleIcon } from "@primer/octicons-v2-react";

const OrganizerRoomList = (props) => {
  const { roomList } = props;
  return (
    <div className="pt-3 px-4">
      <h3 className="org-h3 text-center">Organizer ROOM</h3>
      <hr />
      <br />
      <Container className="text-center">
        <Row xs="1" sm="2" md="3" lg="4" xl="5">
          {Array.isArray(roomList)}
          {roomList.map((room) => (
            <Col>
              <OrganizerRoomItem key={room._id} room={room} />
            </Col>
          ))}
          <div>
            <br />
            <Col className="org-p">
              <Link to="/createroom">
                <PlusCircleIcon size="large" />
                <br />
                <br />
                CREATE ROOM
              </Link>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default OrganizerRoomList;
