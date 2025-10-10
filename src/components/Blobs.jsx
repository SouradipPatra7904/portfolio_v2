import "../styles/Blobs.css"
import { getBlobColor } from "../utils/blobColor";
import React, { useEffect, useState } from "react";

const blobsData = [
  { id: 1, x: 22, y: 48, scale: 0.25, speed: 0.08, color: "#4aa3ff33" },   // slow
  { id: 2, x: 68, y: 79, scale: 0.25, speed: -0.22, color: "#ff4a8c33" }, // fast
  { id: 3, x: 12, y: 18, scale: 0.25, speed: 0.14, color: "#33ff8c33" },  // moderate
  { id: 4, x: 78, y: 12, scale: 0.25, speed: -0.1, color: "#ffdd3333" },  // slow
  { id: 5, x: 52, y: 63, scale: 0.25, speed: 0.25, color: "#aa33ff33" },  // extra fast
  { id: 6, x: 28, y: 28, scale: 0.25, speed: -0.18, color: "#33aaff33" }, // fast
  { id: 7, x: 62, y: 42, scale: 0.25, speed: 0.07, color: "#ff993333" },  // slow
  { id: 8, x: 18, y: 68, scale: 0.25, speed: -0.23, color: "#33ffaa33" }, // extra fast
  { id: 9, x: 82, y: 52, scale: 0.25, speed: 0.12, color: "#ff33cc33" },  // moderate
  { id: 10, x: 42, y: 88, scale: 0.25, speed: -0.15, color: "#ffaa3333" },// fast
  { id: 11, x: 26, y: 17, scale: 0.25, speed: 0.1, color: "#33ccff33" },  // slow
  { id: 12, x: 74, y: 23, scale: 0.25, speed: -0.2, color: "#ff66aa33" }, // fast
  { id: 13, x: 8, y: 83, scale: 0.25, speed: 0.16, color: "#66ff9933" },  // moderate
  { id: 14, x: 88, y: 58, scale: 0.25, speed: -0.05, color: "#ffaa6633" },// slow
  { id: 15, x: 57, y: 77, scale: 0.25, speed: 0.22, color: "#9933ff33" },  // extra fast
  { id: 16, x: 91, y: 36, scale: 0.25, speed: -0.08, color: "#ffaa3333" }, // slow
  { id: 17, x: 54, y: 24, scale: 0.25, speed: 0.18, color: "#33ccff33" },  // fast
  { id: 18, x: 79, y: 34, scale: 0.25, speed: -0.12, color: "#ff66aa33" }, // moderate
  { id: 19, x: 7, y: 44, scale: 0.25, speed: 0.1, color: "#66ff9933" },   // slow
  { id: 20, x: 100, y: 50, scale: 0.25, speed: -0.25, color: "#ffaa6633" },// extra fast
  { id: 21, x: 37, y: 70, scale: 0.25, speed: 0.15, color: "#ffaa6633" }  // moderate
];


export default function Blobs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {blobsData.map(blob => (
  <div
    key={blob.id}
    className="blob"
    style={{
      left: `${blob.x}%`,
      top: `${blob.y}%`,
      transform: `translate(-50%, -50%) scale(${blob.scale}) translateY(${scrollY * blob.speed}px)`,
      backgroundColor: getBlobColor(blob.color),
    }}
  ></div>
))}
    </>
  );
}