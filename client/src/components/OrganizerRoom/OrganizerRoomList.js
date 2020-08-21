import React, { useState, Fragment } from "react";
import OrganizerRoomItem from "./OrganizerRoomItem";
import {
  Row,
  Container,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import plus from "../../assets/button.svg";
import CreateRoom from "./CreateRoom";
const OrganizerRoomList = (props) => {
  const [modal, setModal] = useState(false);
  const { roomList, edit } = props;

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <Fragment>
      <div className="pt-2 px-4">
        <h3 className="org-h3 text-center">Organizer ROOM</h3>
        <hr />
        <Container className="text-center">
          <Row xs="1" sm="2" md="3" lg="4" xl="5">
            {Array.isArray(roomList)}
            {roomList.map((room) => (
              <OrganizerRoomItem key={room._id} room={room} edit={edit} />
            ))}
            <Col className="p-3 my-4">
              <div>
                <br />
                <Button
                  color="link"
                  onClick={toggle}
                  style={{ color: "black" }}
                >
                  <img src={plus} width="46px" height="46px"></img>
                  <br />
                  <br />
                  <p className="org-p"> CREATE ROOM</p>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalHeader
          close={closeBtn}
          className="border-0 pb-0"
          cssModule={{ "modal-title": "w-100 text-center pt-5" }}
        >
          <p className="org-h3">CREATE ROOM</p>
        </ModalHeader>
        <ModalBody>
          <div>
            <CreateRoom toggle={toggle} />
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default OrganizerRoomList;
