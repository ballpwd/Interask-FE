import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import googlelogin from '../../assets/signin.svg';
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect, useLocation, Link } from 'react-router-dom';
import queryString from "query-string";
import apiUrl from '../../utils/apiUrl'

const Login = (props) => {
    const {
        isAuthenticated
    } = props

    const redirect = queryString.parse(useLocation().search).redirect_uri
    console.log(queryString.parse(useLocation().search).redirect_uri)

    if (isAuthenticated) {
        if(redirect){
            return <Redirect to={redirect} />;
        }
        return <Redirect to='/room' />;
    }
    
    return (
        <Fragment>
            <div className='bg2 fullscreen'>
                <Container>
                <div className="center">
                    <Row className='justify-content-center align-items-center '>
                        <img src={logo} alt='Interask' className='img-fluid '></img>
                    </Row>
                    <Row className='justify-content-center align-items-center'>
                        <a href={`${apiUrl}/api/auth/google?redirect_uri=${window.location.href}`}><img src={googlelogin} alt='Interask' className='img-fluid' style={{width:'340px'}} /></a>
                    </Row>
                    <Row className='justify-content-center align-items-end '>
                        <Button className ='howto' color="dark" size="sm"  style={{width:'200px' , height:'40px'}} >How to</Button>
                    </Row>
                    <Row>
                        <Col className='footer'>
                        <p>Create your own room for FREE<Link to='/organizer/login'> Organizer</Link></p>
                        </Col>
                    </Row>
                </div>
                   
                </Container>
            </div>
        </Fragment >
        
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Login);