window.addEventListener('load', init);
window.addEventListener('resize', controlarTamanoWindows);
function init() {
  window.onscroll = function () { scrollFunction() };
  document.querySelector('#toggle__btn').addEventListener('click',toggleEnlaces)
}
// When the user scrolls down 50px from the top of the document, resize the header's font size

function scrollFunction() {
  let nav = document.querySelector('#nav');
  let up = document.querySelector('#toTop');

  if (document.documentElement.scrollTop > 820) {
    nav.style.top = "0px";
    nav.classList.add("nav--oscura");

    up.style.display = "block";
  } else {
    nav.style.top = "30px";
    nav.classList.remove("nav--oscura");

    up.style.display = "none";
  }
}
function toggleEnlaces() {
  var x = document.getElementById("nav__enlaces");
  if (x.style.display === "flex") {
    x.style.display = "none";
    x.classList.remove("nav__enlaces--mostrar");
  } else {
    x.style.display = "flex";
    x.classList.add("nav__enlaces--mostrar");
  }
}

function controlarTamanoWindows() {
  var x = document.getElementById("nav__enlaces");
  if (window.innerWidth >= 768) {
    x.style.display = "flex";
    x.classList.add("nav__enlaces--mostrar");
  } else {
    x.style.display = "none";
    x.classList.remove("nav__enlaces--mostrar");
  }

}