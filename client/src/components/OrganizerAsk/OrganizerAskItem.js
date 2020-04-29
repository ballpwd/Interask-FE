import React from 'react' ;

const OrganizerAskItem = props =>{
    const {ask:{user:{userName},text,date,anonymous}} = props
    const time = new Date(date)
    return(
        <div className='boxitem'>
            <div className='org-p p-2 text-break'> 
                {text} <br/>
                - {anonymous ? 'Question from: Anonymous' : `Question from: ${userName}` }  at  {time.toUTCString()}
            </div>
        </div>
    )

}

export default OrganizerAskItem ;




