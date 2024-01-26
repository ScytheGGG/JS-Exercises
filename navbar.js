window.onscroll = function() {
        Sticky();
}

var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

function Sticky() {
        if (window.pageYOffset >= Sticky) {
                navbar.classList.add("sticky")
        } else {
                navbar.classList.remove("sticky")
        }
}