document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-dark-mode");

  // Load preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  // Toggle dark mode
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  });
});
