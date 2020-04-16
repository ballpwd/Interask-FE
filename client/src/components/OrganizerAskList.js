import React from 'react' ;
import OrganizerAskItem from './OrganizerAskItem' ;

const OrganizerAskList = ({askList}) =>{
    return(
        <div >
            <h4 className='text-left font-weight-bold'> Question</h4>
            <hr/>
            {console.log(askList)}
            {askList&&askList.map((ask) => (<OrganizerAskItem key={ask._id} ask={ask}/>))}
        </div>
    )

}


export default OrganizerAskList ;