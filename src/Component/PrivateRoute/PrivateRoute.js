import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
  const {logIn,Booking}=useContext(userContext);
  const [logginUser,setLogginUser]=logIn;

    return (
        <Route
      {...rest}
      render={({ location }) =>
      logginUser.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;