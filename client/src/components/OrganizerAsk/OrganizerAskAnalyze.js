import React  from 'react' ;

const OrganizerAskAnalyze = props =>{
    const {askList} = props

    const countAsker = () =>{
        const distinctId = [...new Set(askList.map(ask => ask.user._id))]
        return distinctId.length
    };
    
    return (

        <div >
            <h2 className='text-center font-weight-bold mt-5'> Analyze</h2>
            {console.log(askList)}
            <div className='row'>
                <div className='col-md mt-5'>
                    <h1 className='text-center font-weight-bold display-1'>{askList.length}</h1>
                    <h1 className='text-center'>All questions</h1>
                </div>
                <div className='col-md mt-5'>
                    <h1 className='text-center font-weight-bold display-1'>{countAsker()}</h1>
                    <h1 className='text-center'>Asker</h1>
                </div>
            </div>
        </div>
    )

}



export default OrganizerAskAnalyze ;