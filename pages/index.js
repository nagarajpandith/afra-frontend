import Head from 'next/head';

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
      <main>
        <h1 className="text-2xl">AFRA</h1>
      </main>
    </div>
  );
}
