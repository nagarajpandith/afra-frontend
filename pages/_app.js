import '../styles/globals.css';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <div className="mb-20">
        <Navbar />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
