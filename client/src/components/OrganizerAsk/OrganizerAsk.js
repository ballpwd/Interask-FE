import React, {Fragment , useEffect} from 'react' ;
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {getOrgRoomById,orgRoomUnload} from '../../actions/orgRoomActions' ;
import {getOrgAskByRoomId,orgAskListUnload} from '../../actions/orgAskActions' ;
import OrganizerAskList from './OrganizerAskList' ;
import OrganizerAskAnalyze from './OrganizerAskAnalyze' ;
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
            <div className='container-fluid'>   
                <h1 className='text-center font-weight-bold'>
                    ASK
                </h1>
            </div> 
            <div className='container-fluid'>
                <h5 className='text-left'>
                                ROOM: {room.roomName}
                                <br/>
                                ROOMID: {room._id}
                </h5>
                <div className='row'>
                    <div className='col-md-8'>
                        
                        {<OrganizerAskList askList={askList}/>}
                        
                    </div>
                    <div className='col-md'>
                        {<OrganizerAskAnalyze askList={askList}/>}
                        
                    </div>
                </div>    
            </div>

            <div className='mt-5'> 
                <Link to={`/askpresent/${room._id}`} className="btn btn-primary">
                    Presentaion
                </Link>
            </div>

            <div className='mt-5'> 
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