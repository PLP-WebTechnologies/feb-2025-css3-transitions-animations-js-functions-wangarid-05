const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const welcome = document.getElementById("welcome");

// Function to set theme
function setTheme(theme) {
  body.className = theme;
  localStorage.setItem("preferredTheme", theme);
  welcome.classList.add("fade-in");
  setTimeout(() => welcome.classList.remove("fade-in"), 1000);
}

// Toggle and store preference
themeBtn.addEventListener("click", () => {
  const currentTheme = body.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

// Load saved theme
window.onload = () => {
  const savedTheme = localStorage.getItem("preferredTheme") || "light";
  setTheme(savedTheme);
};
