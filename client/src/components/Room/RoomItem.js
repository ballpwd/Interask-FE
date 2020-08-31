import React,{Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, ModalHeader  } from "reactstrap";
import leave_room from "../../assets/leave_room.svg";
import LeaveRoom from "../Room/LeaveRoom";
import close from "../../assets/close.svg";
 
const RoomItem = (props) => {
  const {
    room,
    edit
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  return (
    <Fragment>
      {!edit ?(
      <Link to={`/room/${room._id}`}>
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
      <div>{room.roomName}</div>
      </Button>
    </Link>
      ) : (
          <Button
            className="room-box"
            onClick={toggle}
            style={{
            backgroundColor: "white",
            borderColor: "#e493c980",
            color: "black",
            borderRadius: "10px 10px 10px 10px",
            fontSize: "24px",
            }}
          >
            <div>{room.roomName}
            <img src={leave_room} className="leave-img" width="48px" height="48px" ></img>
            </div>
          </Button>
      )
    }
      <div className="p-4"></div>
      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalHeader
          close={closeBtn}
          className="border-0 pb-0 "
          cssModule={{ "modal-title": "w-100 text-center pt-5" }}
        >
          <img src={close}  width="128px" height="128px" ></img>
          <p className="warn-leave">DO YOU WANT TO LEAVE</p>
          <p className="org-h3">"{room.roomName}" room ?</p>
        </ModalHeader>
        <ModalBody>
          <div>
            <LeaveRoom toggle={toggle} room={room} />
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default RoomItem;
