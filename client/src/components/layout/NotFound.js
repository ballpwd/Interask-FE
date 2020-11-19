import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
		<div className='bg fullscreen'>
            <div className="content">
                <h1>404</h1>
                <h4>Oops! Page not found</h4>
                <p>This page you were looking for doesn't exist.</p>
                <div className='buttons'>
                    <Link to='/'>
                        <div className="nf-buttons">Go to Home</div>
                    </Link>
                </div>
            </div>
		</div>
	);

}

export default NotFound;
