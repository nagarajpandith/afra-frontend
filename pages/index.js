import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AFRA</title>
        <meta
          name="description"
          content="Attendance system with Face Recognition & Automation (AFRA) | AI Mini Project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
    </div>
  );
}
