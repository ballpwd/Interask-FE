import React from 'react' ;

const OrganizerAskItem = props =>{
    const {ask:{user:{userName},text,date,anonymous}} = props
    return(
        <div >
            <p className='text-left'> {anonymous ? 'Question from: Anonymous' : `Question from: ${userName}` }  text: {text} date: {date}</p>
        </div>
    )

}


export default OrganizerAskItem ;