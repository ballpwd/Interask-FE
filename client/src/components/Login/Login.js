import React, { useEffect, Fragment } from 'react';
import logo from '../../assets/logo.svg';
import googlelogin from '../../assets/signin.svg';
import { Container, Row, Col } from 'reactstrap';


const Login = () => {
    return (
        <Fragment>
            <Container >
                <Row className='justify-content-center align-items-center logo'>
                    <img src={logo} alt='Interask' className='img-fluid '></img>
                </Row>

                <Row className='justify-content-center align-items-center button'>
                    <a href="/api/auth/google"><img src={googlelogin} alt='Interask' className='img-fluid' style={{width:'340px'}} /></a>
                </Row>

                <Row className='justify-content-center align-items-end footer'>
                    <p>Create your own room for <a href='/organizer'>FREE organization.com</a></p>
                </Row>


            </Container>

        </Fragment >
    );
};


export default Login;