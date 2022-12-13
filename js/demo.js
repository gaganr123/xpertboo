let body = document.getElementById("navbar");

// let Xpert = document.querySelector('.Xpert')
let services = document.getElementById("services");
let about = document.getElementById("about");
let pricing = document.getElementById("pricing");
let contact = document.getElementById("contact");
let blog = document.getElementById("blog");

window.onscroll = function () {
  changeColor();
  scrollFunction();
};

function changeColor() {
  document.getElementById("navbar").style.backgroundColor = "#E4812F";
  document.getElementById("navImg").src = "imgs/changeimg.webp";

  if (window.scrollY == 0) {
    changeColorto();
  } else {
    // Xpert.style.color = "#FFFFFF"
    services.addEventListener(
      "mouseenter",
      (check1 = () => {
        services.style.color = "#FFFFFF";
        services.style.borderBottom = "1px solid #FFFFFF";
      })
    );
    services.addEventListener(
      "mouseleave",
      (check2 = () => {
        services.style.color = "#000000";
        services.style.borderBottom = "none";
      })
    );
    about.addEventListener(
      "mouseenter",
      (check1 = () => {
        about.style.color = "#FFFFFF";
        about.style.borderBottom = "1px solid #FFFFFF";
      })
    );
    about.addEventListener(
      "mouseleave",
      (check2 = () => {
        about.style.color = "#000000";
        about.style.borderBottom = "none";
      })
    );
    pricing.addEventListener(
      "mouseenter",
      (check1 = () => {
        pricing.style.color = "#FFFFFF";
        pricing.style.borderBottom = "1px solid #FFFFFF";
      })
    );
    pricing.addEventListener(
      "mouseleave",
      (check2 = () => {
        pricing.style.color = "#000000";
        pricing.style.borderBottom = "none";
      })
    );
    contact.addEventListener(
      "mouseenter",
      (check1 = () => {
        contact.style.color = "#FFFFFF";
        contact.style.borderBottom = "1px solid #FFFFFF";
      })
    );
    contact.addEventListener(
      "mouseleave",
      (check2 = () => {
        contact.style.color = "#000000";
        contact.style.borderBottom = "none";
      })
    );
    blog.addEventListener(
      "mouseenter",
      (check1 = () => {
        blog.style.color = "#FFFFFF";
        blog.style.borderBottom = "1px solid #FFFFFF";
      })
    );
    blog.addEventListener(
      "mouseleave",
      (check2 = () => {
        blog.style.color = "#000000";
        blog.style.borderBottom = "none";
      })
    );
  }
}

function changeColorto() {
  // Xpert.style.color = "#EE6600"
  document.getElementById("navImg").src = "imgs/logo.webp";
  document.getElementById("navbar").style.cssText = "backgroundColor: none;";
  services.addEventListener(
    "mouseenter",
    (check1 = () => {
      services.style.color = "#F15A22";
    })
  );
  services.addEventListener(
    "mouseleave",
    (check2 = () => {
      services.style.color = "#000000";
    })
  );
  about.addEventListener(
    "mouseenter",
    (check1 = () => {
      about.style.color = "#F15A22";
    })
  );
  about.addEventListener(
    "mouseleave",
    (check2 = () => {
      about.style.color = "#000000";
    })
  );
  pricing.addEventListener(
    "mouseenter",
    (check1 = () => {
      pricing.style.color = "#F15A22";
    })
  );
  pricing.addEventListener(
    "mouseleave",
    (check2 = () => {
      pricing.style.color = "#000000";
    })
  );
  contact.addEventListener(
    "mouseenter",
    (check1 = () => {
      contact.style.color = "#F15A22";
    })
  );
  contact.addEventListener(
    "mouseleave",
    (check2 = () => {
      contact.style.color = "#000000";
    })
  );
  blog.addEventListener(
    "mouseenter",
    (check1 = () => {
      blog.style.color = "#F15A22";
    })
  );
  blog.addEventListener(
    "mouseleave",
    (check2 = () => {
      blog.style.color = "#000000";
    })
  );
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

// counter

$(document).ready(function () {
  $(".counterup").each(function () {
    $(this)
      .prop("Counter", 50)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

// counter end
// back-to-top
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
