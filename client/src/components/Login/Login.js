import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import googlelogin from '../../assets/signin.svg';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import queryString from "query-string";

const Login = (props) => {
    const {
        isAuthenticated
    } = props

    const redirect = queryString.parse(useLocation().search).redirect_uri
    console.log(queryString.parse(useLocation().search).redirect_uri)
    // const token = queryString.parse(useLocation().search).token

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
                        <a href={`/api/auth/google`}><img src={googlelogin} alt='Interask' className='img-fluid' style={{width:'340px'}} /></a>
                    </Row>
                </div>
                    <Row className='justify-content-center align-items-end footer'>
                        <p>Create your own room for FREE<a href='/organizer/login'> Organizer</a></p>
                    </Row>
                </Container>
            </div>
        </Fragment >
        
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Login);