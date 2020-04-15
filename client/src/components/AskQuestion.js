import React from 'react';

const AskQuestion =({ask:{_id,user:{userName},text,date}})=>{
    return(
        
        <div>
             <div className="container-fuild">
                <p className='text-center'>{userName}</p>
                <p className='text-center'>{text}</p>
                <p className='text-center'>{date}</p>
                <hr />
            </div>
        </div>
    )

}

export default AskQuestion ;