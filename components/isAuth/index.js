import React from 'react';
import Router from 'next/router';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const checkAuth = () => {
      // Make a request to the server to check if the user is logged in
      return { isLoggedIn: true };
    };

    const user = checkAuth();

    if (user.isLoggedIn) {
      // Redirect to the home page if the user is logged in
      if (process.browser) {
        Router.push('/');
      }
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
