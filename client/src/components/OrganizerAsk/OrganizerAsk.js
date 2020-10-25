import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getOrgRoomById, orgRoomUnload } from "../../actions/orgRoomActions";
import { getOrgAskList, orgAskListUnload } from "../../actions/orgAskActions";
import OrganizerAskList from "./OrganizerAskList";
import OrganizerAskAnalyze from "./OrganizerAskAnalyze";
import Loading from "../Loading/Loading";
import { Container, Row, Col, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import apiUrl from '../../utils/apiUrl' ;
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

//socket
import io from "socket.io-client";
//export
import { exportAsk } from "../../utils/export";

const OrganizerAsk = (props) => {
  const {
    getOrgRoomById,
    orgRoomUnload,
    getOrgAskList,
    orgAskListUnload,
    orgRoom: { room, roomLoading },
    orgAsk: { askList, askLoading },
    match,
  } = props;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const [filterDate,setFilterDate] = useState([]);
  const [dropdownDate,setDropdownDate] = useState('All');

  useEffect(() => {
    getOrgRoomById(match.params.roomid);
    return () => {
      orgRoomUnload();
    };
  }, [getOrgRoomById, match.params.roomid, orgRoomUnload]);


  useEffect(() => {
    let socket = io.connect(apiUrl);

    socket.emit("room", match.params.roomid);

    socket.on("organizerAsk", (data) => {
      if (data.status === 200) {
        getOrgAskList(match.params.roomid);
      }
    });

    getOrgAskList(match.params.roomid);

    return () => {
      orgAskListUnload();
      socket.disconnect();
    };
  }, [getOrgAskList, match.params.roomid, orgAskListUnload]);
  
  const groups = askList.reduce((groups, ask) => {
    const date = ask.date.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(ask);
    return groups;
  }, {});

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      askList: groups[date]
    };
  });

  useEffect(() => {
    let filtered = askList ;
    
    if(dropdownDate !== "All"){
        filtered = filtered.filter(item => {
        return item.date.split('T')[0] === dropdownDate 
      })
    }

    console.log(dropdownDate)
    console.log(filtered)
    setFilterDate(filtered)

  }, [dropdownDate,askList]);

  return ((room == null || roomLoading) || askLoading) ? (
    <Loading></Loading>
  ) : (
    <Fragment>
      <div className="fullscreen bg">
        <Container fluid>
          <h1 className="org-h1 text-center org-section">ASK</h1>
        </Container>
        <Container fluid>
          <Row className="justify-content-center align-items-center">
            <Col md="5" xs="12" className="mt-4">
              <Row>
                <Col>
                  <h5 className="org-h5">
                    ROOM: {room.roomName}
                  <br />
                    PIN: {room.code}
                  </h5>
                </Col>
                <Col className="text-right" style={{marginTop: "15px"}}>
                  <Dropdown isOpen={dropdownOpen} onSelect={(e)=> console.log(e.target.value)} toggle={toggle}>
                  <DropdownToggle caret>
                    Filter date {dropdownDate}
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem onClick={() => setDropdownDate('All')}>All</DropdownItem>
                    {groupArrays.map((data)=>{
                      return <DropdownItem onClick={() => setDropdownDate(data.date)}>{data.date}</DropdownItem>
                      
                    })}
                  </DropdownMenu>
              </Dropdown>
                </Col>
              </Row>
              <Row>
                <Col>
                  {<OrganizerAskList askList={filterDate}  />}
                </Col>
              </Row>
            </Col>
            <Col md="5" xs="12" className="mt-4">
              {<OrganizerAskAnalyze askList={filterDate} />}
              <Row>
                <Col md="6" xs="12" className="text-center mt-5">
                  <Button
                    className="org-btn"
                    onClick={() => exportAsk(filterDate)}
                    style={{
                      backgroundColor: "#FF8BA7",
                      borderColor: "#121629",
                      borderWidth: "2px",
                      color: "#232946",
                    }}
                  >
                    Export
                  </Button>
                </Col>
                <Col md="6" xs="12" className="text-center mt-5">
                  <Link to={`/organizer/${room._id}/ask/present`}>
                    <Button
                      className="org-btn"
                      style={{
                        backgroundColor: "#FF8BA7",
                        borderColor: "#121629",
                        borderWidth: "2px",
                        color: "#232946",
                      }}
                    >
                      Presentaion
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  orgRoom: state.orgRoom,
  orgAsk: state.orgAsk,
});

export default connect(mapStateToProps, {
  getOrgRoomById,
  getOrgAskList,
  orgRoomUnload,
  orgAskListUnload,
})(OrganizerAsk);
