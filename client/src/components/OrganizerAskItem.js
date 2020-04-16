import React from 'react' ;

const OrganizerAskItem = ({ask:{user:{userName},text,date}}) =>{
    return(
        <div >
            <p className='text-left'> userName: {userName}  text: {text} date: {date}</p>
        </div>
    )

}


export default OrganizerAskItem ;