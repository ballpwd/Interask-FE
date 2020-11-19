import React, { useState, Fragment } from "react";
import OrganizerRoomItem from "./OrganizerRoomItem";
import {
  Row,
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import plus from "../../assets/plus_white.svg";

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
      <Container className="text-center">
        {roomList.length >= 1 ? (
          <div className="pt-2 px-4">
            <Row className="orgroom-row ">
              {Array.isArray(roomList)}
              {roomList.map((room) => (
                <div>
                  <OrganizerRoomItem key={room._id} room={room} edit={edit} />
                </div>
              ))}
              <div className=" px-3">
                <Button
                  className="orgroom-box"
                  onClick={toggle}
                  size="lg"
                  style={{
                    backgroundColor: "#FF8BA7",
                    borderColor: "#121629",
                    borderWidth: "2px",
                    color: "#fff",
                  }}
                >
                  <br />
                  <img src={plus} alt='create' width="46px" height="46px"></img>
                  <br />
                  <br />
                  <p className="orgroom-p"> CREATE ROOM</p>
                </Button>
              </div>
            </Row>
          </div>
        ) : (
          <Container>
            <Row className="justify-content-center mt-2">
              <p className="nulltextroomorg text-center">
                {" "}
                PLEASE CREATE YOUR ROOM
              </p>
            </Row>
            <div className="text-center px-3">
              <Button
                className="orgroom-box"
                onClick={toggle}
                size="lg"
                style={{
                  backgroundColor: "#FF8BA7",
                  borderColor: "#121629",
                  borderWidth: "2px",
                  color: "#fff",
                }}
              >
                <br />
                <img src={plus} alt='create' width="46px" height="46px"></img>
                <br />
                <br />
                <p className="orgroom-p"> CREATE ROOM</p>
              </Button>
            </div>
          </Container>
        )}
      </Container>

      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalHeader
          close={closeBtn}
          className="border-0 pb-0"
          cssModule={{ "modal-title": "w-100 text-center pt-5" }}
        >
          <p className="org-h4">CREATE ROOM</p>
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
