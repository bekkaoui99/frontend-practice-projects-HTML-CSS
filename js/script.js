const dropDownList = document.getElementsByClassName("bar");

dropDownList[0].onclick = function () {
  const nav = document.getElementsByClassName("navBar");

  nav[0].classList.toggle("nav");
};
