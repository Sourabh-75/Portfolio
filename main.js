let hamburgerIcon = document.querySelector("#hamburger i");
let Links = document.querySelectorAll("#navLinks li a");

hamburgerIcon.addEventListener("click", () => {
  let navlinks = document.querySelector("#navLinks");

  if (hamburgerIcon.className === "ri-menu-3-line") {
    hamburgerIcon.classList.remove("ri-menu-3-line");
    hamburgerIcon.classList.add("ri-close-line");
    navlinks.classList.add("show");
  } else {
    hamburgerIcon.classList.add("ri-menu-3-line");
    hamburgerIcon.classList.remove("ri-close-line");
    navlinks.classList.remove("show");
  }
  // when click a nav link coresponding section will be open
  let linksArr = Array.from(Links);
  linksArr.forEach(function (i) {
    i.addEventListener("click", () => {
      navlinks.classList.remove("show");
      hamburgerIcon.classList.add("ri-menu-3-line");
      hamburgerIcon.classList.remove("ri-close-line");
    });
  });
});
// links smooth scroll
Links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});


