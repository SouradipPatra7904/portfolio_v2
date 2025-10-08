// src/utils/blobColor.js
export function getBlobColor(color) {
  const isLight = document.body.classList.contains("light-mode");
  if (isLight) {
    // Increase opacity for light mode: #RRGGBBAA -> #RRGGBB66
    return color.replace(/33$/, "66");
  }
  return color; // Keep original for dark mode
}
