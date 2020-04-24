import React, {Fragment , useEffect} from 'react' ;
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {getRoomByUserId,roomListUnload} from '../../actions/roomActions' ;
import RoomList from './RoomList' ;
const Room = props =>{
    //mockup user
    const user = {
        _id: '5e85403922192a21e87fbbaa',
        email: 'ballpwd5@gmail.com',
        userName: 'ballpwd5'
    }
    
    const { 
        getRoomByUserId,
        roomListUnload,
        room:{roomList,loading}
    } = props ;


    useEffect(() => {
        getRoomByUserId(user._id);
        return () => { roomListUnload() }
    } ,[getRoomByUserId,roomListUnload,user._id])
    
    console.log(roomList)
    
    return loading ? (
        <h1>Loading</h1>
    ) : (
        <Fragment>
             <div className='container-fluid'>   
                <h1 className='text-center font-weight-bold'>
                   Hi "{user.userName}" 
                </h1>
                <p className='text-danger text-center'> Mockup Room for User ballpwd5 </p>
            </div> 
            <div className='container-fluid'>
                <div>
                    {<RoomList roomList={roomList}/>}
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
    room: state.room
})

export default connect(mapStateToProps,{getRoomByUserId,roomListUnload})(Room) ;