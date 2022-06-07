import { getPageName } from "./functions/getPageName";
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
