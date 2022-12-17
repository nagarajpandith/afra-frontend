import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center md:p-0 p-5">
      <div className="w-full max-w-md">
        <Image
          src="/logo.png"
          width={150}
          height={150}
          className="mb-6 mx-auto"
          alt="logo"
        />
        <h1 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome to AFRA - Attendance system with Face Recognition & Automation
        </h1>
        <p className="text-gray-700 text-base mb-4">
          AFRA is a cross-platform software that uses face detection and
          recognition algorithms to automatically mark attendance for students.
        </p>
        <p className="text-gray-700 text-base mb-4">
          Simply scan your face on the system, and AFRA will match your face
          landmarks against previously stored images in the database to mark
          your attendance.
        </p>

        <Link href="/scan">
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-teal">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
