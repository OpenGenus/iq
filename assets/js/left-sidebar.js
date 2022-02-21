var leftSideBar = document.querySelector(".left-side-bar-inner");

const changePosition = () => {
  this.scrollY > 400
    ? leftSideBar.setAttribute("class", "left-side-bar-inner-scroll")
    : leftSideBar.setAttribute("class", "left-side-bar-inner");
};

window.addEventListener("scroll", changePosition, false);

console.log(document.height);
