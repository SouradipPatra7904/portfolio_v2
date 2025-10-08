import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";
import { toggleTheme } from "../theme";

export default function NavBar() {
  const [isLight, setIsLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setIsLight(true);
  }, []);

  const handleToggleTheme = () => {
    toggleTheme();
    setIsLight(!isLight);
  };

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="logo">Souradip Patra</div>

      {/* Center (Desktop only): Navigation Links */}
      <ul className="nav-links desktop">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right side: Theme toggle + Hamburger */}
      <div className="nav-actions">
        <button className="theme-toggle" onClick={handleToggleTheme}>
          <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
        </button>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile slide-out menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
