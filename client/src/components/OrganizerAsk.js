import React, {Fragment , useEffect} from 'react' ;
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {getRoomById} from '../actions/roomActions' ;
import {getAskByRoomId} from '../actions/askActions' ;
import OrganizerAskList from './OrganizerAskList' ;
import OrganizerAskAnalyze from './OrganizerAskAnalyze' ;
const OrganizerAsk = props =>{

    const { getRoomById,
        getAskByRoomId,
        room:{room},
        ask:{askList,loading},
        match 
    } = props ;


    useEffect(() => {
        getRoomById(match.params.id);
    } ,[getRoomById, match.params.id])
    
    // http://localhost:3000/organizer/ask/5e85457618a87c3a58dfffb8
   
    useEffect(() => {
        getAskByRoomId(match.params.id);
    } ,[getAskByRoomId, match.params.id])
    
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
                    <div className='col-md'>
                        
                        {<OrganizerAskList askList={askList}/>}
                        
                    </div>
                    <div className='col-md'>
                        {<OrganizerAskAnalyze askList={askList}/>}
                        
                    </div>
                </div>    
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
    room: state.room,
    ask: state.ask
})

export default connect(mapStateToProps,{getRoomById,getAskByRoomId})(OrganizerAsk) ;