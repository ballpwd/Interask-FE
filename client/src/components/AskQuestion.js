import React from 'react';

const AskQuestion =({askQ:{_id,user,text,date}})=>{
    return(
        
        <div>
             <div className="container-fuild">
                <p className='text-center'>{user.userName}</p>
                <p className='text-center'>{text}</p>
                <p className='text-center'>{date}</p>
                <hr />
            </div>
        </div>
    )

}

export default AskQuestion ;