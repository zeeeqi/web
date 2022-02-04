window.addEventListener('load', init);

function init() {
    window.onscroll = function () { scrollFunction() };
    scrollFunction();
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
