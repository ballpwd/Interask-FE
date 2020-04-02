import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
		<div>
            <h1>Home Page</h1>
            <div className='buttons'>
                <Link to='/ask'>
                    Go to Ask
                </Link>
            </div>
		</div>
	);

}

export default Home;
