const navLinkArray = document.querySelectorAll(".navigation__link");
const removeActiveState = function () {
  navLinkArray.forEach((e) => e.classList.remove("active"));
};

export const addActiveLink = function () {
  navLinkArray.forEach((e) =>
    e.addEventListener("click", (event) => {
      removeActiveState();
      event.target.classList.add("active");
    })
  );
};
