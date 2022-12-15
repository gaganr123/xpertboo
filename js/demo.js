let nav = document.getElementById("navbar");
let services = document.getElementById("services");
let about = document.getElementById("about");
let pricing = document.getElementById("pricing");
let blog = document.getElementById("blog");
let contact = document.getElementById("contact");

// back-to-top
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    nav.style.backgroundColor = "#E4812F";
    document.getElementById("navImg").src = "imgs/changeimg.webp";
    services.style.color = "white";
    about.style.color = "white";
    pricing.style.color = "white";
    blog.style.color = "white";
    contact.style.color = "white";
    contact.style.transition = "all ease 1s";
    services.style.transition = "all ease 1s";
    about.style.transition = "all ease 1s";
    blog.style.transition = "all ease 1s";
    pricing.style.transition = "all ease 1s";
  } else {
    mybutton.style.display = "none";
    nav.style.backgroundColor = "rgb(248, 244, 244)";
    document.getElementById("navImg").src = "imgs/logo.webp";
    services.style.color = "black";
    about.style.color = "black";
    pricing.style.color = "black";
    blog.style.color = "black";
    contact.style.color = "black";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

(function (d, w, c) {
  w.ChatraID = "RPhuNjBtNppM7oKHT";
  var s = d.createElement("script");
  w[c] =
    w[c] ||
    function () {
      (w[c].q = w[c].q || []).push(arguments);
    };
  s.async = true;
  s.src = "https://call.chatra.io/chatra.js";
  if (d.head) d.head.appendChild(s);
})(document, window, "Chatra");
