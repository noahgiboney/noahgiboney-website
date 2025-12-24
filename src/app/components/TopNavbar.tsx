"use client"
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const linkClasses = () =>
    `text-black font-semibold px-4 py-2 transition-transform hover:scale-110 hover:text-gray-500`;

  return (
    <nav className="relative flex items-center justify-between md:justify-around px-10 md:px-0 border-b border-gray-200 p-4">
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
          className={linkClasses()}
          onClick={handleLinkClick}
        >
          Home
        </Link>

        <Link
          href="/projects"
          className={linkClasses()}
          onClick={handleLinkClick}
        >
          Projects
        </Link>

        <Link
          href="/contact"
          className={linkClasses()}
          onClick={handleLinkClick}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}