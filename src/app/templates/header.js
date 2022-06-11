import { getPageName } from "../functions/getPageName";
const pageName = getPageName();
const linkArray = document.querySelectorAll(".navigation__link");

export const runHeader = () => {
  //Add current nav link
  linkArray.forEach((link) => {
    link.classList.remove("active");
    const linkAttribute = link.attributes.href.nodeValue;

    if (linkAttribute == pageName && pageName != "index.php")
      link.classList.add("active");
  });

  // Nav toggle function
  const navigationEl = document.querySelector(".navigation");
  const navToggleBtn = document.querySelector(".navigation__toggle");

  navToggleBtn.addEventListener("click", () => {
    navigationEl.classList.toggle("nav-open");
  });
};
