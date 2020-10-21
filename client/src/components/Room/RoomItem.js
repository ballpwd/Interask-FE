import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import leave_room from "../../assets/leave.svg";
import LeaveRoom from "../Room/LeaveRoom";
import close from "../../assets/close.svg";

const RoomItem = (props) => {
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
      <div>
        <Link to={`/${room._id}`}>
          <Button
            className="room-box"
            style={{
              backgroundColor: "#EEBBC3",
              borderColor: "#121629",
              borderWidth: "2px",
              color: "#232946",
              borderRadius: "10px 10px 10px 10px",
              fontSize: "24px",
            }}
            size="md"
          >
            <div className="room-text">{room.roomName}</div>
          </Button>
        </Link>
      
        <Modal isOpen={modal} toggle={toggle} size="lg" centered>
          <ModalHeader
            close={closeBtn}
            className="border-0 pb-0 "
            cssModule={{ "modal-title": "w-100 text-center pt-5" }}
          >
            <img src={close} width="128px" height="128px"></img>
            <p className="warn-leave">DO YOU WANT TO LEAVE</p>
            <p className="org-h4 text-break">"{room.roomName}" room ?</p>
          </ModalHeader>
          <ModalBody>
            <div>
              <LeaveRoom toggle={toggle} room={room} />
            </div>
          </ModalBody>
        </Modal>
      </div>
    </Fragment>
  );
};

export default RoomItem;
