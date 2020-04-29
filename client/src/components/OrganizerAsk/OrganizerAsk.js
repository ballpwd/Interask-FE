import React, {Fragment , useEffect} from 'react' ;
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {getOrgRoomById,orgRoomUnload} from '../../actions/orgRoomActions' ;
import {getOrgAskByRoomId,orgAskListUnload} from '../../actions/orgAskActions' ;
import OrganizerAskList from './OrganizerAskList' ;
import OrganizerAskAnalyze from './OrganizerAskAnalyze' ;
import { Container, Row, Col, Button } from 'reactstrap';
const OrganizerAsk = props =>{

    const { 
        getOrgRoomById,
        orgRoomUnload,
        getOrgAskByRoomId,
        orgAskListUnload,
        orgRoom:{room},
        orgAsk:{askList,loading},
        match 
    } = props ;


    useEffect(() => {
        getOrgRoomById(match.params.id);
        return () => { orgRoomUnload() }
    } ,[getOrgRoomById, match.params.id,orgRoomUnload])
    
    // http://localhost:3000/organizer/ask/5e85457618a87c3a58dfffb8
   
    useEffect(() => {
        getOrgAskByRoomId(match.params.id);
        return () => { orgAskListUnload() }
    } ,[getOrgAskByRoomId, match.params.id,orgAskListUnload])
    
    console.log(room)
    console.log(askList)
    
    return loading ? (
        <h1>Loading</h1> 
    ) : (
        <Fragment>
            <Container fluid>
                <h1 className='org-h1 text-center'>
                    ASK
                </h1>
            </Container>
            <Container fluid >
                <Row className='justify-content-center align-items-center'>
                    <Col md='5' xs='12' className='mt-4'>
                        <h5 className='org-h5'>
                            ROOM: {room.roomName}
                            <br/>
                            ROOMID: {room._id}
                        </h5>
                        {<OrganizerAskList askList={askList}/>}
                    </Col>    
                    <Col md='5' xs='12' className='mt-4'>
                        {<OrganizerAskAnalyze askList={askList}/>}
                        <Row>
                            <Col md='6' xs='12' className='text-center mt-5'>
                                <Button className="btn btn-dark org-btn">
                                    Export
                                </Button>
                            </Col>
                            <Col md='6' xs='12' className='text-center mt-5'>
                                <Link to={`/askpresent/${room._id}`} className="btn btn-dark org-btn">
                                    Presentaion
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>   
            </Container>

            <div className='mt-3'> 
                <Link to="/" className="btn btn-primary">
                    Go to Home
                </Link>
            </div>
           
        </Fragment>
      
    )

}

const mapStateToProps = state => ({
    orgRoom: state.orgRoom,
    orgAsk: state.orgAsk
})

export default connect(mapStateToProps,{getOrgRoomById,getOrgAskByRoomId,orgRoomUnload,orgAskListUnload})(OrganizerAsk) ;