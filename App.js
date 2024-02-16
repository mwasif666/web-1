$(".navigation-list").clone().appendTo(".mobile-menu-body");

$(".hamburger").on("click", function () {
  if (!$(".mobile-menu").hasClass("mobile-view")) {
    $(".mobile-menu").addClass("mobile-view");
  } else {
    $(".mobile-menu").removeClass("mobile-view");
  }
});

AOS.init({
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
});
$("#menu-close").on("click", function () {
  $(".mobile-menu").removeClass("mobile-view");
  $(".dropdown-li").removeClass("open");
  $(".dropdown-li").find(">.dropdown-list").hide(200);
});

// progress bar
$(document).ready(function () {
  $(window).on("scroll", function () {
    progress_bar();
  });
});

function progress_bar() {
  var items = $(".progress_bar").find(".progress_bar_item");
  items.each(function () {
    var item = $(this).find(".progress");
    var itemValue = item.data("progress");
    var i = 0;
    var value = $(this);

    if (isElementInViewport(value) && !value.hasClass("animated")) {
      value.addClass("animated");
      var count = setInterval(function () {
        if (i <= itemValue) {
          var iStr = i.toString();
          item.css({
            width: iStr + "%",
          });
          value.find(".item_value").html(iStr + "%");
        } else {
          clearInterval(count);
        }
        i++;
      }, 20);
    }
  });
}

function isElementInViewport(elem) {
  var elementTop = elem.offset().top;
  var elementBottom = elementTop + elem.outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
}

$(".button_su_inner-2").mouseenter(function (e) {
  var parentOffset_2 = $(this).offset();

  var relX = e.pageX - parentOffset_2.left;
  var relY = e.pageY - parentOffset_2.top;
  $(this).prev(".su_button_circle-2").css({ left: relX, top: relY });
  $(this).prev(".su_button_circle-2").removeClass("desplode-circle-2");
  $(this).prev(".su_button_circle-2").addClass("explode-circle-2");
});

$(".button_su_inner-2").mouseleave(function (e) {
  var parentOffset_2 = $(this).offset();

  var relX = e.pageX - parentOffset_2.left;
  var relY = e.pageY - parentOffset_2.top;
  $(this).prev(".su_button_circle-2").css({ left: relX, top: relY });
  $(this).prev(".su_button_circle-2").removeClass("explode-circle-2");
  $(this).prev(".su_button_circle-2").addClass("desplode-circle-2");
});
// Counter
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function () {
  function startCountersOnScroll() {
    $(".count").each(function () {
      const isVisible = isInViewport($(this));
      if (isVisible && !$(this).hasClass("counting")) {
        const textValue = $(this)
          .text()
          .replace(/,/g, "")
          .replace(/[^\d.-]/g, ""); // Remove non-numeric characters
        $(this)
          .addClass("counting")
          .prop("Counter", 0)
          .animate(
            {
              Counter: textValue,
            },
            {
              duration: 2000,
              easing: "swing",
              step: function (now) {
                const newValue = numberWithCommas(Math.ceil(now));
                $(this).text(newValue);
              },
            }
          );
      }
    });
  }

  function isInViewport(element) {
    const rect = element[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Trigger counters when elements are in the viewport on initial load
  startCountersOnScroll();

  // Trigger counters when scrolling
  $(window).on("scroll", startCountersOnScroll);
});

// Tab image
$(document).ready(function () {
  // Define image paths for each tab
  var imagePaths = {
    "Website Design": "./Images/arrow-3.gif",
    "Website Development": "./Images/arrow-3.gif",
    "Application Design": "./Images/arrow-3.gif",
    "Application Development": "./Images/arrow-3.gif",
  };

  // Function to display the arrow on the default tab
  function displayDefaultArrow() {
    // Get the default active tab
    var defaultTab = $(".nav-link.active");

    // Check if defaultTab exists and doesn't already have an image
    if (defaultTab.length && !defaultTab.find("img").length) {
      var tabText = defaultTab.text().trim();
      var imgSrc = imagePaths[tabText];

      // Create image element
      var imgElement = $("<img>")
        .attr("src", imgSrc)
        .width(180)
        .addClass("mt-2 active img-position");

      // Append image to the default tab
      defaultTab.append(imgElement);
    }
  }

  // Display arrow on the default active tab
  displayDefaultArrow();

  // Handle click event for tabs
  $(".nav-link").on("click", function () {
    // Check if the clicked tab already has an image
    if (!$(this).find("img").length) {
      // Remove existing images from all nav-links except the clicked one
      $(".nav-link img").not($(this).find("img")).remove();

      // Remove 'active' class from all images
      $(".nav-link img").removeClass("active");

      // Get text of the clicked tab
      var tabText = $(this).text().trim();

      // Get image path based on the clicked tab text
      var imgSrc = imagePaths[tabText];

      // Create image element
      var imgElement = $("<img>")
        .attr("src", imgSrc)
        .width(180)
        .addClass("mt-2 active img-position");

      // Append image to the clicked tab
      $(this).append(imgElement);
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // When window width is >= 576px
    576: {
      slidesPerView: 1,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 1,
    },
    // When window width is >= 992px
    992: {
      slidesPerView: 2,
    },
    // When window width is >= 1200px
    1200: {
      slidesPerView: 2,
    },
    // Add more breakpoints as needed
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // When window width is >= 576px
    360: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    // When window width is >= 992px
    992: {
      slidesPerView: 2,
    },
    // Add more breakpoints as needed
  },
});
// Define options for all circular progress bars
let options = [
  { fill: "#42ACE1", value: 0.89 },
  { fill: "#0C2646", value: 0.5 },
  { fill: "#0C2646", value: 0.9 },
  { fill: "#42ACE1", value: 0.6 },
];

// Loop through each circular progress bar and set its value dynamically
$(".circular-bar").each(function (index) {
  let $bar = $(this).find(".bar");
  let $span = $(this).find(".box span");
  let currentOptions = { ...options[index], startAngle: -1.55, size: 100 };

  $bar
    .circleProgress(currentOptions)
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $span.text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
});

var swiper = new Swiper(".web-sec", {
  // autoplay: true,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // When window width is >= 576px
    360: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    // When window width is >= 992px
    992: {
      slidesPerView: 3,
    },
    // Add more breakpoints as needed
  },
});
jQuery(document).ready(function () {
  var floatinglabel = function () {
    jQuery(".floating-label .form-control").each(function (index, el) {
      var text_val = jQuery(this).val();
      if (text_val === "") {
        jQuery(this).parent().removeClass("has-value");
      } else {
        jQuery(this).parent().addClass("has-value");
      }
      jQuery(this)
        .focus(function () {
          jQuery(this).parent().addClass("has-value");
        })
        .blur(function () {
          if (
            jQuery(this).val() === "" ||
            jQuery(this).val() === " " ||
            jQuery(this).val() === null
          ) {
            jQuery(this).parent().removeClass("has-value");
          }
        });
    });
  };
  floatinglabel();
});

// login form
const toggleForm = () => {
  const container = document.querySelector(".form-login-container");
  container.classList.toggle("active");
};
// Marketing
function showSection(sectionId, clickedCard) {
  // Hide all sections
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  // Show the selected section
  document.getElementById(sectionId).style.display = "block";

  // Toggle 'active' class on cards
  var cards = document.querySelectorAll(".Our-Services-marketing .card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active");
    cards[i].querySelector(".overlay").style.background = "rgba(0, 0, 0, 0.5)"; // Reset overlay color
  }
  clickedCard.classList.add("active");
  clickedCard.querySelector(".overlay").style.background =
    "linear-gradient(to top, rgba(66, 172, 225, 0.5), transparent)"; // Change overlay color for active card
}
// Counter

$(document).ready(function () {
  // Attach click event listener to section 3

  startCounter();
});

function startCounter() {
  // Function to animate the counter
  function animateCounter($element, targetCount) {
    $({ count: 0 }).animate(
      { count: targetCount },
      {
        duration: 2000, // Animation duration in milliseconds
        easing: "linear", // Animation easing function
        step: function () {
          $element.text(Math.floor(this.count));
        },
        complete: function () {
          $element.text(targetCount);
        },
      }
    );
  }

  // Function to handle the counter animation for each element
  function handleCounterAnimation() {
    $(".counting").each(function () {
      var targetCount = parseInt($(this).text(), 10);
      animateCounter($(this), targetCount);
    });
  }

  // Call the function to start counter animations
  handleCounterAnimation();
}

// Button
$(document).ready(function () {
  // Hide all content sections except the default one
  $(".content-section").not("#content1").hide();

  $(".content-btn").click(function () {
    var target = $(this).data("target");
    // Hide all content sections
    $(".content-section").hide();
    // Show the content section corresponding to the clicked button
    $("#" + target).show();
  });
});

// Arrow
const buttons = document.querySelectorAll(".content-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Hide arrow on all buttons
    const arrows = document.querySelectorAll(".img-arrow-hide");
    arrows.forEach((arrow) => {
      arrow.classList.add("d-none");
    });

    // Show arrow on currently clicked button
    const arrow = this.querySelector(".img-arrow-hide");
    arrow.classList.remove("d-none");

    // Reset text color of all buttons to black
    buttons.forEach((btn) => {
      const buttonText = btn.querySelector("h5.heading-color");
      if (btn !== button) {
        buttonText.style.color = "black";
      } else {
        // Change text color of the clicked button's text to blue
        buttonText.style.color = "#42ACE1";
      }
    });
  });
});

// BPO SWeiper

// Initialize Slick Slider
$(document).ready(function () {
  $(".slick-BPO").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 768, // Adjust as needed
        settings: {
          slidesToShow: 1,
        },
        breakpoint: 992, // Adjust as needed
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
