document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link");
  const tabContent = document.querySelectorAll(".tab-pane");

  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      tabContent.forEach(content => {
        content.classList.remove("show", "active");
      });

      link.classList.add("active");
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      target.classList.add("show", "active");
    });
  });

  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  });
});
