

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

let options = {
  startAngle: -1.55,
  size: 100,
  value: 0.85,
  fill: "#42ACE1",
};
$(".circle .bar")
  .circleProgress(options)
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .parent()
      .find("span")
      .text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
$(".js .bar").circleProgress({
  value: 0.7,
});
$(".node .bar").circleProgress({
  value: 0.9,
});
$(".react .bar").circleProgress({
  value: 0.6,
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
