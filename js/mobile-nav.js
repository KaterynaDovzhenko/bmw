document.addEventListener("DOMContentLoaded", function () {
  const threeLines = document.getElementById("threeLines");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuLinks = document.querySelectorAll("#mobileMenu nav a");

  threeLines.addEventListener("click", function () {
    this.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });

        threeLines.classList.remove("active");
        mobileMenu.classList.remove("active");
      }
    });
  });
});
