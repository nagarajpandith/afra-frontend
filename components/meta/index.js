import Head from 'next/head';

function Meta() {
  return (
    <Head>
      <title>AFRA - Attendance system with Face Recognition & Automation</title>
      <meta
        name="description"
        content="AFRA is a cross-platform software that uses face detection and recognition algorithms to automatically mark attendance for students."
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://afra.vercel.app/" />
      <meta name="robots" content="index,follow" />
    </Head>
  );
}

export default Meta;
