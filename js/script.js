document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__navigation");
  const body = document.body;

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("nav-active");
    body.classList.toggle("no-scroll");
  });

  nav.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("nav-active");
    body.classList.remove("no-scroll");
  });
});


function scrollToBlock() {
  document.getElementById("targetBlock").scrollIntoView({ behavior: "smooth" });
}