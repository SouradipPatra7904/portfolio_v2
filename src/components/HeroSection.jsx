import { useState, useRef, useEffect } from "react";
import "../styles/HeroSection.css";
import profileImg from "../icons/best-pic-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faXmark, faRefresh } from "@fortawesome/free-solid-svg-icons";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

export default function HeroSection() {
  const nameRef = useRef(null);
  const intervalRef = useRef(null);

  const animateName = () => {
    let iteration = 0;
    const span = nameRef.current;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      span.innerText = span.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < iteration) return span.dataset.value[index];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      iteration += 1 / 3;

      if (iteration >= span.dataset.value.length) {
        clearInterval(intervalRef.current);
      }
    }, 30);
  };

  useEffect(() => {
    animateName();
    const loopInterval = setInterval(animateName, 5000);
    return () => {
      clearInterval(loopInterval);
      clearInterval(intervalRef.current);
    };
  }, []);

  const funFacts = [
    "This guy is doing Java from the age of 14, can you believe it?! 💀",
    "Do you know where's the source code for a happy love life? This dude desperately needs it 😭",
    "I may be a backend wizard, but I love pixel-perfect UIs 🧙🏻‍♂️",
    "I like my women how I like my config files: confusing & hard to read 🤪 😋 😏",
    "What's life without a little chaos? Embrace the bugs! 🐛 🐞",
    "Every problem has a solution, and every solution has a better one. 🔐",
  ];

  const [showFact, setShowFact] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  const nextFact = () => setCurrentFact((prev) => (prev + 1) % funFacts.length);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      const bubble = document.querySelector(".fun-fact-bubble");
      const btn = document.querySelector(".hero-info-btn");
      if (showFact && bubble && !bubble.contains(e.target) && !btn.contains(e.target)) {
        setShowFact(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFact]);

  return (
    <section className={`hero section ${showFact ? "blurred" : ""}`}>
      {/* === Hero Main Content === */}
      <div className="container hero-wrapper">
        <div className="hero-image">
          <div className="photo-frame">
            <img src={profileImg} alt="Souradip Patra" className="profile-pic" />
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="intro">Hi, my name is </span>
            <span ref={nameRef} data-value="SOURADIP" className="name">
              SOURADIP
            </span>
          </h1>

          <p className="hero-subtitle">
            Turning concurrency, Kafka, and curiosity into clean, scalable systems.
          </p>

          <a href="#projects" className="cta-btn">
            View My Work
          </a>
        </div>
      </div>

      {/* === Info Circle === */}
      <button
        className={`hero-info-btn ${showFact ? "active" : ""}`}
        onClick={() => setShowFact(!showFact)}
        aria-label="Fun Facts"
      >
        <FontAwesomeIcon icon={showFact ? faXmark : faInfoCircle} size="22px" />
      </button>

      {/* === Fun Fact Bubble === */}
      <div className={`fun-fact-bubble ${showFact ? "show" : ""}`}>
        <p>{funFacts[currentFact]}</p>
        <button className="cycle-btn" onClick={nextFact} aria-label="Next Fact">
          <FontAwesomeIcon icon={faRefresh} size="22px" rotation={180} />
        </button>
      </div>
    </section>
  );
}
