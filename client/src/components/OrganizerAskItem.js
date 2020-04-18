import React from 'react' ;

const OrganizerAskItem = props =>{
    const {ask:{user:{userName},text,date}} = props
    return(
        <div >
            <p className='text-left'> userName: {userName}  text: {text} date: {date}</p>
        </div>
    )

}


export default OrganizerAskItem ;