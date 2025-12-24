"use client"
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  const linkClasses = (href: string) =>
    `relative text-black font-semibold px-4 py-2 transition-transform hover:scale-110 hover:text-gray-500 ${
      activeLink === href
        ? "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gray-500"
        : ""
    }`;

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
          className={linkClasses("/")}
          onClick={() => handleLinkClick("/")}
        >
          Home
        </Link>

        <Link
          href="/projects"
          className={linkClasses("/projects")}
          onClick={() => handleLinkClick("/projects")}
        >
          Projects
        </Link>

        <Link
          href="/contact"
          className={linkClasses("/contact")}
          onClick={() => handleLinkClick("/contact")}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}