import React, { useEffect, Fragment } from 'react';
import logo from '../../assets/logo.svg';
import googlelogin from '../../assets/signin.svg';
import { Container, Row, Col, Button } from 'reactstrap';


const LoginOrg = () => {
    return (
        <Fragment>
            <Container >
                <Row className='justify-content-center align-items-center logo'>
                    <img src={logo} alt='Interask' className='img-fluid '></img>
                </Row>

                <Row className='justify-content-center align-items-center buttonOrg'>
                    <a href="/api/auth/google"><img src={googlelogin} alt='Interask' className='img-fluid' style={{width:'350px' ,height:'87px'}} /></a>
                </Row>

                <Row className='justify-content-center align-items-end'>
                <Button className ='howto' color="dark" size="lg"  style={{width:'226px' , height:'55px'}} >How to</Button>
                </Row>
            </Container>

        </Fragment >
    );
};


export default LoginOrg;