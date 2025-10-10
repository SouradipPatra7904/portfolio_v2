import React, { useState, useEffect, useRef } from "react";
import NavInfoButton from "./NavInfoButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
  faUser,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";
import { toggleTheme } from "../theme";

export default function NavBar() {
  const [isLight, setIsLight] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // read initial theme (assumes your theme.js adds 'light-mode' to body when light)
  useEffect(() => {
    setIsLight(document.body.classList.contains("light-mode"));
  }, []);

  const handleToggleTheme = () => {
    toggleTheme();
    setIsLight((s) => !s);
  };

  // lock scrolling when menu is open
  useEffect(() => {
    const doc = document.documentElement;
    if (open) {
      // keep full-page scroll locked
      doc.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      doc.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      doc.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close on resize (prevents stuck open state)
  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeAndNavigate = () => setOpen(false);

  return (
    <>
      <header className="navbar" role="banner">
        <a href="https://souradippatra-dev.netlify.app/">
          <div className="logo">Souradip Patra</div>
        </a>
        
        

        <div className="nav-actions">
          <NavInfoButton />

          <button
            className="theme-toggle"
            onClick={handleToggleTheme}
            aria-pressed={isLight}
            title="Toggle theme"
          >
            <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
          </button>

          <button
            className={`menu-toggle ${open ? "open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </button>
        </div>
      </header>

      {/* Backdrop below navbar; clicking it closes menu */}
      <div
        className={`menu-backdrop ${open ? "visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Bubble-style menu (fixed) */}
      <nav
        ref={menuRef}
        id="bubble-menu"
        className={`bubble-menu ${open ? "show" : ""} ${isLight ? "light" : "dark"}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <ul>
          <li>
            <FontAwesomeIcon icon={faUser} className="mi" />
            <a href="#about" onClick={closeAndNavigate}>
              About
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faFolderOpen} className="mi" />
            <a href="#projects" onClick={closeAndNavigate}>
              Projects
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="mi" />
            <a href="#contact" onClick={closeAndNavigate}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
