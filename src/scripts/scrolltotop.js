let topbutton = document.getElementById("scrollToTopBtn");
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        topbutton.style.opacity = "1";
        topbutton.style.visibility = "visible";
    } else {
        topbutton.style.opacity = "0";
        topbutton.style.visibility = "hidden";
    }
}

topbutton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};