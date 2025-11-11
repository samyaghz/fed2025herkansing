// JavaScript Document
console.log("hi");

/******************************/
/* menu openen de MENU button */
/******************************/

let menuOpenButton = document.querySelector("header > button");

menuOpenButton.addEventListener("click", openMenu);

function openMenu() {
  
  let deNav = document.querySelector("nav");
  deNav.classList.add("is-open");
  
}



/************************************/
/* menu sluiten met de sluit button */
/************************************/

let menuSluitButton = document.querySelector("header nav button");

menuSluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
  let deNav = document.querySelector("nav");
  deNav.classList.remove("is-open");
}