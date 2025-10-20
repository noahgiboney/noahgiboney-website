"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GiAlienFire } from "react-icons/gi";

export default function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative flex items-center justify-between md:justify-around px-10 md:px-0 border-b border-gray-200 p-4">
      <Link href="/">
      <p className="font-bold text-4xl hover:scale-110 hover:text-gray-500 transition-transform">NG</p>
      </Link>

      <div
        className="flex items-center text-2xl md:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col absolute top-full left-0 right-0 bg-white shadow-md md:shadow-none md:static md:flex md:flex-row md:gap-6 items-center text-lg z-50`}
      >
        <Link
          href="/"
          className="text-black font-semibold px-4 py-2 hover:scale-110 hover:text-gray-500 transition-transform"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-black font-semibold px-4 py-2 hover:scale-110 hover:text-gray-500 transition-transform"
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="text-black font-semibold px-4 py-2 hover:scale-110 hover:text-gray-500 transition-transform"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
