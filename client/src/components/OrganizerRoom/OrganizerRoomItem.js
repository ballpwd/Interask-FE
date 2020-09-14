import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import EditRoom from "./EditRoom";
import pencil from "../../assets/pencil.svg";

const OrganizerRoomItem = (props) => {
  const { room, edit } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  return (
    <Fragment>
      {!edit ? (
        <Col className="my-4">
          <Link to={`/organizer/${room._id}`}>
            <Button
              className="orgroom-box"
              size="lg"
              style={{
                backgroundColor: "#e5e5e5",
                borderColor: "#e5e5e5",
                color: "black",
              }}
            >
              {room.roomName}
            </Button>
          </Link>
        </Col>
      ) : (
        <Col className="my-4">
          <Button
            className="orgroom-box"
            onClick={toggle}
            size="lg"
            style={{
              backgroundColor: "#c4c4c4",
              borderColor: "#c4c4c4",
              color: "black",
            }}
          >
            <br />
            <img src={pencil} width="48px" height="48px"></img>
            <div className="org-h6 my-3">{room.roomName}</div>
          </Button>
        </Col>
      )}
      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalHeader
          close={closeBtn}
          className="border-0 pb-0"
          cssModule={{ "modal-title": "w-100 text-center pt-5" }}
        >
          <p className="org-h3">EDIT ROOM NAME</p>
        </ModalHeader>
        <ModalBody>
          <div>
            <EditRoom toggle={toggle} room={room} />
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default OrganizerRoomItem;
