import React from 'react';
import Router from 'next/router';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const checkAuth =async () => {
      // Make a request to the server to check if the user is logged in
      const response = await fetch('http://localhost/', {
        method: 'GET',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
            // "Access-Control-Allow-Origin":true
        },
        credentials:"include"
    });
    const responseData = await response.json();
    if(responseData.isAdmin)
      return { isLoggedIn: true };
    return { isLoggedIn: false };
    };

    checkAuth().then((user)=>{

        if (user.isLoggedIn) {
          // Redirect to the home page if the user is logged in
          if (process.browser) {
            Router.push('/');
          }
          return null;
        }

    })
    return <WrappedComponent {...props} />;


  };

  return AuthComponent;
};

export default withAuth;
