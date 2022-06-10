import { getPageName } from "../functions/getPageName";
const pageName = getPageName();
const linkArray = document.querySelectorAll(".navigation__link");

export const addClassToCurrentLink = function () {
  linkArray.forEach((link) => {
    link.classList.remove("active");
    const linkAttribute = link.attributes.href.nodeValue;

    if (linkAttribute == pageName && pageName != "index.php")
      link.classList.add("active");
  });
};

export const toggleNav = function () {
  const navigationEl = document.querySelector(".navigation");
  const navToggleBtn = document.querySelector(".navigation__toggle");

  navToggleBtn.addEventListener("click", () => {
    navigationEl.classList.toggle("nav-open");
  });
};
