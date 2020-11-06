import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { logout } from "../../actions/authActions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { connect } from "react-redux";
import piclogout from "../../assets/leave-white.svg";
import HowTo from "../Howto";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle1 = () => setIsOpen(!isOpen);
  const {
    auth: { user },
    logout,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  return (
    <div>
      <Navbar light expand="md" className="navorg-section pt-0 pb-0">
        <NavbarBrand href="/">
          <img src={Logo} style={{ width: "138px", height: "61px" }}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle1} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to={"/room"} className="nav-item">
                {" "}
                USER{" "}
              </Link>
            </NavItem>
            <NavItem>
              <Link to={"/organizer/room"} className="nav-item">
                ORGANIZER
              </Link>
            </NavItem>
            <NavItem>
              <div className="nav-item" onClick={toggle}>
                HOW TO USE
              </div>
            </NavItem>
          </Nav>

          {user ? (
            <Nav className="navbar-nav">
              <NavItem className="">
                <NavbarText className="nav-user" style={{ color: "white" }}>
                  Hi, {user.userName}
                </NavbarText>
              </NavItem>
              <NavItem>
                <Button onClick={logout}>
                  <img src={piclogout} width="15px" height="15px"></img>
                </Button>
              </NavItem>
            </Nav>
          ) : null}
        </Collapse>
      </Navbar>
      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalHeader
          close={closeBtn}
          className="border-0 pb-0"
          cssModule={{ "modal-title": "w-100 text-center pt-4" }}
        >
          <p className="org-h4">HOW TO USE INTERASK</p>
        </ModalHeader>
        <ModalBody>
          <div>
            <HowTo toggle={toggle} />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
