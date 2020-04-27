import React from 'react' ;

const AskHistoryItem = ({ask:{text,date}}) =>{
    return(
        <div className ="container">
            <p >{date}</p>
            <p className='h6 p-2
            bg-dark text-white 
            rounded text-right '>
                {text}</p>
                <hr/>
        </div>
    )

}


export default AskHistoryItem ;