(() => {
  // <stdin>
  console.log("This site was generated by Hugo.");
  document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuBtn");
    const menu = document.getElementById("hamburgerMenu");
    const menuIconBars = document.getElementById("menuIcon");
    const menuIconX = document.getElementById("menuIconX");
    menuButton.addEventListener("click", () => {
      menu.classList.toggle("translate-y-0");
      menu.classList.toggle("-translate-y-full");
      menuIconBars.classList.toggle("hidden");
      menuIconX.classList.toggle("hidden");
    });
  });
})();
