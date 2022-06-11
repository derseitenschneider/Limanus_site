import "../sass/pages/index.scss";
import { runHeader } from "./templates/header";
runHeader();

const removePreloadClass = function () {
  document.querySelector("body").classList.remove("preload");
};

// window.addEventListener("load", function () {
//   this.setTimeout(removePreloadClass, 150);
// });
window.addEventListener("load", removePreloadClass);
