import React from 'react' ;
import { connect } from "react-redux";
import { setPresent } from "../../actions/orgAskActions";
import { Row, Col } from "reactstrap";
const OrganizerAskItem = props =>{
    const {
        setPresent,
        ask
    } = props
  
    const setStatus =()=> {
        const askId = ask._id
        setPresent(askId)
    }

    const time = new Date(ask.date)
    
    return(
        <Row className='justify-content-center align-items-center mx-3'>
            <Col xs='2' sm='1' className='pl-0'>
                <div className="custom-control custom-checkbox checkbox-present text-center ">
                            <input
                                type="checkbox"
                                className="custom-control-input "
                                id={`controlPresent${ask._id}`}
                                checked={ask.present}
                                onChange={() => setStatus()}
                            />

                            <label
                                className="custom-control-label "
                                htmlFor={`controlPresent${ask._id}`}
                            >
                            </label>
                </div>  
            </Col>
            <Col xs='10' sm='11' className='p-0'>
                <div className='boxitem'>
                    <div className='org-p p-2 text-break'> 
                        {ask.text} <br/>
                        - {ask.anonymous ? 'Question from: Anonymous' : `Question from: ${ask.user.userName}` }  at  {time.toUTCString()}
                    </div>
                </div>
            </Col>
        </Row>
    )

}

export default connect(null, {setPresent})(OrganizerAskItem) ;




