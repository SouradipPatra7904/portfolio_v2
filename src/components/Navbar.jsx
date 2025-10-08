import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";
import { toggleTheme } from "../theme";

export default function NavBar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Initialize theme state from saved theme
    const saved = localStorage.getItem("theme");
    if (saved === "light") setIsLight(true);
  }, []);

  const handleToggle = () => {
    toggleTheme(); // existing function toggles class & localStorage
    setIsLight(!isLight); // update icon
  };

  return (
    <nav className="navbar">
      <div className="logo">Souradip Patra</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="theme-toggle" onClick={handleToggle}>
        <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
      </button>
    </nav>
  );
}
