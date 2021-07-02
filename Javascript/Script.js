const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const overlay1 = doc.querySelector(".overlay1");
const overlay2 = doc.querySelector(".overlay2");
const Partners = doc.querySelector(".Partners");
const Overons = doc.querySelector(".Overons");
const Back1 = doc.querySelector(".Back1");
const Back2 = doc.querySelector(".Back2");
const nav = doc.querySelector(".nav");
const Praesidium = doc.querySelector(".Praesidium");



menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  nav.style.display = "none";

});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  nav.style.display = "";
});

Overons.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  overlay1.classList.add("overlay--active");
});

Partners.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  overlay2.classList.add("overlay--active");
});

Back1.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  overlay1.classList.remove("overlay--active");
});

Back2.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  overlay2.classList.remove("overlay--active");
});

Praesidium.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  overlay1.classList.remove("overlay--active");
  overlay2.classList.remove("overlay--active");
  nav.style.display = "";
});

/*______________MODAL______________*/

let modal
let number

function Modal(id){
    modal = document.getElementById(id);
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
function Close() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}