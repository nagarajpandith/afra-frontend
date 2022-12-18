import React from 'react';
import Router from 'next/router';

const withAdminRoute = (WrappedComponent) => {
  const AdminRoute = (props) => {
    const checkUser = () => {
      // by making a request to the server, we can check if the user is logged in and if they are an admin
      return { isAdmin: true };
    };

    const user = checkUser();

    if (!user || !user.isAdmin) {
      if (process.browser) {
        // because it was throwing an error in the server, so we need to check if we are in the browser
        Router.push('/');
      }
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AdminRoute;
};

export default withAdminRoute;
