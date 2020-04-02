import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAsk } from '../actions/askActions';
// import AskList from "./AskList";
import AskQuestion from "./AskQuestion";

const Ask = ({getAsk,ask}) => {
  useEffect(() => {
    getAsk();
  }, [getAsk]);

  return (
		<div>
      <div className='container-fluid' >
        <h1 className='text-center'>Ask</h1>
      </div>
      
      <div>
        {ask.map(askQ => (<AskQuestion key={askQ._id} askQ={askQ} />)) }
      </div>

      <div className='buttons'>
        <Link to='/'>
          Go to Home
        </Link>
      </div>     
		</div>
	);
  

}


const mapStateToProps = state => ({
    ask: state.ask
  });

export default connect(mapStateToProps, { getAsk })(Ask);