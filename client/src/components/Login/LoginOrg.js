import React, { Fragment, useState } from "react";
import logo from "../../assets/org-logo.svg";
import googlelogin from "../../assets/signin.svg";
import {
  Container,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { connect } from "react-redux";
import { Redirect, useLocation, Link } from "react-router-dom";
import queryString from "query-string";
import apiUrl from "../../utils/apiUrl";
import HowTo from "../Howto";

const LoginOrg = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { isAuthenticated } = props;

  const redirect = queryString.parse(useLocation().search).redirect_uri;
  console.log(queryString.parse(useLocation().search).redirect_uri);

  if (isAuthenticated) {
    if (redirect) {
      return <Redirect to={redirect} />;
    }
    return <Redirect to="/organizer/room" />;
  }

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <Fragment>
      <div className="bg2 fullscreen">
        <Container>
          <div className="center">
            <Row className="justify-content-center align-items-center ">
              <img src={logo} alt="Interask" className="img-fluid "></img>
            </Row>
            <Row className="justify-content-center align-items-center ">
              <a
                href={`${apiUrl}/api/auth/google?redirect_uri=${window.location.href}`}
              >
                <img
                  src={googlelogin}
                  alt="Interask"
                  className="img-fluid"
                  style={{ width: "350px", height: "87px" }}
                />
              </a>
            </Row>
            <Row className="justify-content-center align-items-end ">
              <Button
                className="howto"
                color="dark"
                size="sm"
                style={{ width: "200px", height: "40px" }}
                onClick={toggle}
              >
                How to use
              </Button>
            </Row>
            <Row className="justify-content-center align-items-end footer">
              <p>
                Join the room for FREE<Link to="/login"> User</Link>
              </p>
            </Row>
          </div>
        </Container>
      </div>

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
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LoginOrg);
