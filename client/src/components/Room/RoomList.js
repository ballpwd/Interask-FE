import React, { useState, Fragment } from "react";
import RoomItem from "./RoomItem";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import plus from "../../assets/plus.svg";
import JoinRoom from "./JoinRoom";
const RoomList = (props) => {
  const [modal, setModal] = useState(false);
  const { roomList, edit } = props;

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <div>
        {roomList.length >= 1 ? (
          <div>
            {roomList.map((room) => (
              <RoomItem key={room._id} room={room} edit={edit} />
            ))}
          </div>
        ) : (
          <Row className="justify-content-center mt-2">
            <p className="nulltextroom text-center"> PLEASE JOIN THE ROOM</p>
          </Row>
        )}
        <Button
          className="btn-join"
          onClick={toggle}
          style={{
            backgroundColor: "#d4d8f0",
            borderColor: "#121629",
            color: "#232946",
            borderRadius: "10px 10px 10px 10px",
            fontSize: "24px",
          }}
          size="md"
        >
          <div>
            <img
              src={plus}
              className="plus-img"
              width="38px"
              height="38px"
            ></img>{" "}
            JOIN ROOM
          </div>
        </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalHeader
          close={closeBtn}
          className="border-0 pb-0"
          cssModule={{ "modal-title": "w-100 text-center pt-5" }}
        >
          <p className="org-h4">JOIN ROOM</p>
        </ModalHeader>
        <ModalBody>
          <div>
            <JoinRoom toggle={toggle} />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RoomList;
