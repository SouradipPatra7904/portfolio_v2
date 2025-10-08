export function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-mode");

  const isLight = body.classList.contains("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

export function applySavedTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light-mode");
}
