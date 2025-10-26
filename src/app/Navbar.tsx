"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  
  return (
    <nav className="flex bg-gray-800 py-2 px-5">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex ml-5">
        <Link href="/">
          <li className={`mr-3 cursor-pointer ${pathname === '/' ? 'text-blue-400'  :  'text-white'}`}>Home</li>
        </Link>
        <Link href="/about">
          <li className={`mr-3 cursor-pointer ${pathname === '/about' ? 'text-blue-400'  :  'text-white'}`}>About</li>
        </Link>
        <Link href="/about/profile">
          <li className={`mr-3 cursor-pointer ${pathname === '/about/profile' ? 'text-blue-400'  :  'text-white'}`}>Profile</li>
        </Link>
        <Link href="/login">
          <li className={`mr-3 cursor-pointer ${pathname === '/login' ? 'text-blue-400'  :  'text-white'}`}>Login</li>
        </Link>
      </ul>
    </nav>
  );
}
