"use client"
import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";
import { FiActivity } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>
        <div className={styles.icon}>
          <p>NG</p>
          <FiActivity />
        </div>
      </Link>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        <Link href={"/"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
}
