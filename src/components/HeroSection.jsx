import { useRef, useEffect } from "react";
import "../styles/HeroSection.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

export default function HeroSection() {
  const nameRef = useRef(null);
  const intervalRef = useRef(null);

  const animateName = () => {
    let iteration = 0;
    const span = nameRef.current;

    // Clear any previous interval
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
    // Initial animation
    animateName();

    // Loop animation every 5 seconds
    const loopInterval = setInterval(animateName, 5000);

    return () => {
      clearInterval(loopInterval);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="hero section">
      <div className="container hero-content">
        <h1 className="hero-title">
          Hi, I’m{" "}
          <span ref={nameRef} data-value="SOURADIP">
            SOURADIP
          </span>
        </h1>
        <p className="hero-subtitle">
          Java & Spring Boot Developer crafting scalable backends and distributed systems.
        </p>
        <a href="#projects" className="cta-btn">
          View My Work
        </a>
      </div>
    </section>
  );
}
