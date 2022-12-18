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
  const checkUser = () => {
    // by making a request to the server, we can check if the user is logged in and if they are an admin
    // return { isAdmin: true }; // just for now until backend is integrated

    return null;
  };

  const user = checkUser();

  if (!user) {
    return { userRole: null };
  } else if (user.isAdmin) {
    return { userRole: 'admin' };
  } else {
    return { userRole: 'enroller' };
  }
};

export default MyApp;
