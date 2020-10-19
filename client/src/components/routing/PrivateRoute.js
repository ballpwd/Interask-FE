import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../Loading/Loading'

const PrivateRoute = (props) => {
  const {
    component: Component,
    auth: { user,isAuthenticated, authLoading, token },
    path,
    ...rest
  } = props

  let redirectLogin = `/login?redirect_uri=${window.location.pathname}${window.location.search}`
  if(path.indexOf('/organizer') > -1){
    redirectLogin = `/organizer/login?redirect_uri=${window.location.pathname}${window.location.search}`
  }
  return ((token !== null && authLoading)) ? (
    <Loading/>
  ):(
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          (user == null) ? (
            <Loading/>
          ):(
            <Component {...props} />
          )
          
        ) : (
          <Redirect to={redirectLogin} />
        )
      }
    />
  )

}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
