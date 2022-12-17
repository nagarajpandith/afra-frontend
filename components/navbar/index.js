import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    {
      title: 'Scan Face',
      path: '/scan',
    },
    {
      title: 'Enroll Students',
      path: '/enroll',
    },
    {
      title: 'Add Course',
      path: '/addcourse',
    },
    {
      title: 'Add Student',
      path: '/addstudent',
    },
  ];
  return (
    <nav className="bg-gray-800 lg:flex lg:items-center lg:justify-between p-4 fixed w-full z-10 top-0 left-0">
      <div className="flex items-center justify-between flex-shrink-0 text-white">
        <Image src="/logo.png" alt="AFRA Logo" width={30} height={30} />
        <Link className="font-semibold text-xl tracking-tight mr-6" href="/">
          AFRA
        </Link>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          menuOpen ? 'flex-col' : 'hidden'
        } menu`}
      >
        <div className="text-sm lg:flex-grow">
          {navLinks.map(({ title, path, index }) => (
            <Link
              href={path}
              key={index}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              {title}
            </Link>
          ))}
        </div>
        <div>
          <Link
            href="/login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
