import React from 'react' ;
import { Link } from "react-router-dom";

const RoomItem = props =>{
    const {room:{_id,roomName}} = props
    return(
        <div >
            <p className='text-center'> <Link to={`/ask/${_id}`}>{roomName}</Link></p>
        </div>
    )
    

}


export default RoomItem ;