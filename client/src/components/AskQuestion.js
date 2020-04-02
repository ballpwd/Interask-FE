import React from 'react';

// const AskQuestion =({askQ:{_id,text,date}})=>{
    const AskQuestion =({askQ})=>{
    return(
        
        <div>
             <div className="container-fuild">
                <p className='text-center'>{askQ.user.userName}</p>
                <p className='text-center'>{askQ.text}</p>
                <p className='text-center'>{askQ.date}</p>
                <hr />
            </div>
        </div>
    )

}

export default AskQuestion ;