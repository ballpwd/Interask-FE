import React, { Fragment } from 'react';
import logo from '../../assets/org-logo.svg';
import googlelogin from '../../assets/signin.svg';
import { Container, Row, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import queryString from "query-string";

const LoginOrg = (props) => {
    const {
        isAuthenticated
    } = props

    const redirect = queryString.parse(useLocation().search).redirect_uri
    console.log(queryString.parse(useLocation().search).redirect_uri)

    if (isAuthenticated) {
        if(redirect){
            return <Redirect to={redirect} />;
        }       
        return <Redirect to='/organizer/room' />;
    }

    return (
        <Fragment>
            <div className='bg2 fullscreen'>
            <Container>
            <div className="center">
                <Row className='justify-content-center align-items-center '>
                    <img src={logo} alt='Interask' className='img-fluid '></img>
                </Row>
                <Row className='justify-content-center align-items-center '>
                    <a href={`/api/auth/google`}><img src={googlelogin} alt='Interask' className='img-fluid' style={{width:'350px' ,height:'87px'}} /></a>
                </Row>
                <Row className='justify-content-center align-items-end '>
                    <Button className ='howto' color="dark" size="sm"  style={{width:'200px' , height:'40px'}} >How to</Button>
                </Row>
            </div>
                <Row className='justify-content-center align-items-end footer'>
                        <p>Change to user login <a href='/login'> User</a></p>
                </Row>
            </Container>
            </div>
        </Fragment >
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(LoginOrg);