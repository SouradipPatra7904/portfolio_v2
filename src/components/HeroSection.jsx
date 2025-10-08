import { useRef, useEffect } from "react";
import "../styles/HeroSection.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

export default function HeroSection() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const intervals = useRef([]);

  const animateName = (spanRef) => {
    let iteration = 0;
    const span = spanRef.current;

    // Clear previous interval for this span
    if (spanRef.current.interval) clearInterval(spanRef.current.interval);

    spanRef.current.interval = setInterval(() => {
      span.innerText = span.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < iteration) return span.dataset.value[index];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= span.dataset.value.length) {
        clearInterval(spanRef.current.interval);
      }

      iteration += 1 / 3;
    }, 30);

    intervals.current.push(spanRef.current.interval);
  };

  useEffect(() => {
    // Initial animation
    animateName(firstNameRef);
    animateName(lastNameRef);

    // Loop animation every 5 seconds
    const loopInterval = setInterval(() => {
      animateName(firstNameRef);
      animateName(lastNameRef);
    }, 5000);

    return () => {
      clearInterval(loopInterval);
      intervals.current.forEach((i) => clearInterval(i));
    };
  }, []);

  return (
    <section className="hero section">
      <div className="container hero-content">
        <h1 className="hero-title">
          Hi, I’m{" "}
          <span ref={firstNameRef} data-value="SOURADIP">
            SOURADIP
          </span>{" "}
          <span ref={lastNameRef} data-value="PATRA">
            PATRA
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
