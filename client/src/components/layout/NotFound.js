import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
		<div>
            <h1> Page not found</h1>
            <div className='buttons'>
                <Link to='/'>
                    Go to Home
                </Link>
            </div>
		</div>
	);

}

export default NotFound;
