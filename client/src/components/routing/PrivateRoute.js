import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../Loading/Loading'

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, authLoading, token },
  ...rest
}) => ((token !== null && authLoading)) ? 
(
  <Loading></Loading>
):(
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
)

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
