export const getPageName = function () {
  const currentPath = window.location.pathname;
  const currentPageArr = currentPath.split("/");
  const currentPageName = currentPageArr[currentPageArr.length - 1];
  return currentPageName;
};
