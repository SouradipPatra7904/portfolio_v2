import React, { useState, useEffect } from "react";
import "../styles/NavInfoButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";

export default function NavInfoButton() {
  const [open, setOpen] = useState(false);

  // Prevent scroll behind the backdrop when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="nav-info-wrapper">
      {/* Info Circle */}
      <button
        className={`info-circle ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Navigation Info"
      >
        <FontAwesomeIcon icon={open ? faXmarkCircle : faInfoCircle} size="22px" />
      </button>

      {/* Backdrop (not blurring NavBar itself) */}
      {open && (
        <div
          className="manpage-backdrop"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Anchored Info Bubble */}
      <div className={`manpage-bubble ${open ? "show" : ""}`}>
        <h3>Navigation Guide</h3>
        <ul>
          <li><strong>Scroll</strong> — Explore sections smoothly.</li>
          <li><strong>Hover</strong> — Reveal animations & effects.</li>
          <li><strong>Info Circles</strong> — Show hints or fun facts.</li>
          <li><strong>Theme Toggle</strong> — Switch between modes.</li>
          <li><strong>Scroll Behaviour</strong> — Will be disabled on activation of Man Page or Navigation Bar Menu . </li>
          <li><strong>Man Page</strong> — Will always be on top. </li>
        </ul>
        <button className="close-btn" onClick={() => setOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
