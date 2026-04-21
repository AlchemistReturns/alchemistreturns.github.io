"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="container nav-container">
        <Link href="/" className="logo" aria-label="Home" onClick={closeMenu}>
          AMH<span className="dot">.</span>
        </Link>

        <ul
          className={`nav-links${isOpen ? " active" : ""}`}
          id="nav-links"
          role="list"
        >
          <li>
            <Link href="/#about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="nav-link" onClick={closeMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="nav-link" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="nav-link" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#achievements" className="nav-link" onClick={closeMenu}>
              Achievements
            </Link>
          </li>
          <li>
            <Link href="/blog" className="nav-link" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Wvb6U7F29JNNOmgnnMHMfaOYNuVp3lYQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="menu-toggle"
          id="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <i
            className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
