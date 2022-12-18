import '../styles/globals.css';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps, userRole }) {
  return (
    <>
      <Meta />
      <div className="mb-20">
        <Navbar userRole={userRole} />
      </div>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // fetch the user's role from API or a cookie
  //use 
  const checkUser = async() => {
    const response = await fetch('http://localhost', {
        method: 'GET',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials:"include"
    });

    const res=await response.json()

    if(!res)
    {
        return null
    }
    if(res.isAdmin===true)
      return { isAdmin: true };
    else
        return { isAdmin: false };
    // by making a request to the server, we can check if the user is logged in and if they are an admin // just for now until backend is integrated

    // return null;
  };

  const user = await checkUser();
//   const user = null;

  if (!user) {
    return { userRole: null };
  } else if (user.isAdmin) {
    return { userRole: 'admin' };
  } else {
    return { userRole: 'enroller' };
  }
};

export default MyApp;
