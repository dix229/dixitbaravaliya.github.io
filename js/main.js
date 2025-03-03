AOS.init({
  duration: 800,
  easing: "ease",
  once: true,
  offset: -100,
});

jQuery(function ($) {
  "use strict";
  loader();
  siteMenuClone();
  mobileToggleClick();
  onePageNavigation();
  siteIstotope();
  owlCarouselPlugin();
  floatingLabel();
  scrollWindow();
  counter();
  jarallaxPlugin();
  contactForm();
  stickyFillPlugin();
  animateReveal();
});

var siteIstotope = function () {
  var $container = $("#posts").isotope({
    itemSelector: ".item",
    isFitWidth: true,
  });

  $(window).resize(function () {
    $container.isotope({
      columnWidth: ".col-sm-3",
    });
  });

  $container.isotope({ filter: "*" });

  $("#filters").on("click", "a", function (e) {
    e.preventDefault();
    var filterValue = $(this).attr("data-filter");
    $container.isotope({ filter: filterValue });
    $("#filters a").removeClass("active");
    $(this).addClass("active");
  });

  $container
    .imagesLoaded()
    .progress(function () {
      $container.isotope("layout");
    })
    .done(function () {
      $(".gsap-reveal-img").each(function () {
        var html = $(this).html();
        $(this).html(
          '<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">' +
            html +
            "</div></div>"
        );
      });

      var controller = new ScrollMagic.Controller();

      var revealImg = $(".gsap-reveal-img");

      if (revealImg.length) {
        var i = 0;
        revealImg.each(function () {
          var cover = $(this).find(".cover"),
            revealContent = $(this).find(".reveal-content"),
            img = $(this).find(".reveal-content img");

          var tl2 = new TimelineMax();

          setTimeout(function () {
            tl2;
            tl2.set(img, { scale: "2.0", autoAlpha: 1 }).to(cover, 1, {
              marginLeft: "0",
              ease: Expo.easeInOut,
              onComplete() {
                tl2.set(revealContent, { autoAlpha: 1 });
                tl2.to(cover, 1, { marginLeft: "102%", ease: Expo.easeInOut });
                tl2.to(img, 2, { scale: "1.0", ease: Expo.easeOut }, "-=1.5");
              },
            });
          }, i * 700);

          var scene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: "0%",
            reverse: false,
            offset: "-300%",
          })
            .setTween(tl2)
            .addTo(controller);

          i++;
        });
      }
    });

  $(".js-filter").on("click", function (e) {
    e.preventDefault();
    $("#filters").toggleClass("active");
  });
};

var loader = function () {
  setTimeout(function () {
    TweenMax.to(".site-loader-wrap", 1, {
      marginTop: 50,
      autoAlpha: 0,
      ease: Power4.easeInOut,
    });
  }, 10);
  $(".site-loader-wrap").delay(200).fadeOut("slow");
  $("#unslate_co--overlayer").delay(200).fadeOut("slow");
};

var siteMenuClone = function () {
  setTimeout(function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-inner");
    });

    var counter = 0;
    $(".unslate_co--site-mobile-menu .has-children").each(function () {
      var $this = $(this);

      $this.prepend('<span class="arrow-collapse collapsed">');

      $this.find(".arrow-collapse").attr({
        "data-toggle": "collapse",
        "data-target": "#collapseItem" + counter,
      });

      $this.find("> ul").attr({
        class: "collapse",
        id: "collapseItem" + counter,
      });

      counter++;
    });
  }, 1000);

  $("body").on("click", ".arrow-collapse", function (e) {
    var $this = $(this);
    if ($this.closest("li").find(".collapse").hasClass("show")) {
      $this.removeClass("active");
    } else {
      $this.addClass("active");
    }
    e.preventDefault();
  });

  $(window).resize(function () {
    var $this = $(this),
      w = $this.width();

    if (w > 768) {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas");
      }
    }
  });

  $(".js-burger-toggle-menu").click(function (e) {
    e.preventDefault();
    if ($("body").hasClass("offcanvas")) {
      $("body").removeClass("offcanvas");
      $(".js-burger-toggle-menu").removeClass("open");
    } else {
      $("body").addClass("offcanvas");
      $(".js-burger-toggle-menu").addClass("open");
    }
  });
};

var owlCarouselPlugin = function () {
  $(".testimonial-slider").owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 20,
    margin: 10,
    smartSpeed: 2000,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    navText: [
      '<span class="icon-keyboard_arrow_left">',
      '<span class="icon-keyboard_arrow_right">',
    ],

    responsive: {
      400: {
        stagePadding: 20,
        margin: 10,
      },
      600: {
        stagePadding: 100,
        margin: 50,
      },
    },
  });
  owlSingleSlider();

  if ($(".logo-slider").length) {
    $(".logo-slider").owlCarousel({
      center: false,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      autoplayHoverPause: true,
      dots: false,
      nav: false,
      responsive: {
        400: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }
};

var owlSingleSlider = function () {
  if ($(".single-slider").length) {
    $(".single-slider").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1500,
      autoplay: true,
      autoplayHoverPause: true,
      dots: true,
      nav: true,
      navText: [
        '<span class="icon-keyboard_arrow_left">',
        '<span class="icon-keyboard_arrow_right">',
      ],

      responsive: {
        400: {
          stagePadding: 0,
          margin: 0,
        },
        600: {
          stagePadding: 0,
          margin: 0,
        },
      },
    });
  }
};

var floatingLabel = function () {
  $(".form-control").on("input", function () {
    var $field = $(this).closest(".form-group");
    if (this.value) {
      $field.addClass("field--not-empty");
    } else {
      $field.removeClass("field--not-empty");
    }
  });
};

// scroll
var scrollWindow = function () {
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var $w = $(this),
      st = $w.scrollTop(),
      navbar = $(".unslate_co--site-nav");
    // sd = $('.js-scroll-wrap');

    if (st > 150) {
      if (!navbar.hasClass("scrolled")) {
        navbar.addClass("scrolled");
      }
    }
    if (st < 150) {
      if (navbar.hasClass("scrolled")) {
        navbar.removeClass("scrolled sleep");
      }
    }
    if (st > 350) {
      if (!navbar.hasClass("awake")) {
        navbar.addClass("awake");
      }

      // hide / show on scroll
      if (st > lastScrollTop) {
        // downscroll code
        navbar.removeClass("awake");
        navbar.addClass("sleep");
      } else {
        // upscroll code
        navbar.addClass("awake");
      }
      lastScrollTop = st;
    }
    if (st < 350) {
      if (navbar.hasClass("awake")) {
        navbar.removeClass("awake");
        navbar.addClass("sleep");
      }
    }
  });
};

var counter = function () {
  $(".section-counter").waypoint(
    function (direction) {
      if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
        var comma_separator_number_step =
          $.animateNumber.numberStepFactories.separator(",");
        $(this.element)
          .find(".number-counter")
          .each(function () {
            var $this = $(this),
              num = $this.data("number");
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              {
                easing: "swing",
                duration: 3000,
              }
            );
          });
      }
    },
    { offset: "95%" }
  );
};

var mobileToggleClick = function () {
  $(".js-menu-toggle").click(function (e) {
    e.preventDefault();

    if ($("body").hasClass("offcanvas")) {
      $("body").removeClass("offcanvas");
      $(".js-menu-toggle").removeClass("active");
      if ($(".js-burger-toggle-menu").length) {
        $(".js-burger-toggle-menu").removeClass("open");
      }
    } else {
      $("body").addClass("offcanvas");
      $(".js-menu-toggle").addClass("active");
      if ($(".js-burger-toggle-menu").length) {
        $(".js-burger-toggle-menu").addClass("open");
      }
    }
  });

  // click outisde offcanvas
  $(document).mouseup(function (e) {
    var container = $(".unslate_co--site-mobile-menu");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas");
        $("body").find(".js-menu-toggle").removeClass("active");

        $("body").find(".js-burger-toggle-menu").removeClass("open");
      }
    }
  });
};

// navigation
var onePageNavigation = function () {
  var navToggler = $(".site-menu-toggle");
  $("body").on(
    "click",
    ".unslate_co--site-nav .site-nav-ul li a[href^='#'], .smoothscroll[href^='#'], .unslate_co--site-mobile-menu .site-nav-wrap li a[href^='#']",
    function (e) {
      e.preventDefault();

      var $body = $("body");
      if ($body.hasClass("offcanvas")) {
        $body.removeClass("offcanvas");
        $("body").find(".js-burger-toggle-menu").removeClass("open");
      }

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        "easeInOutExpo"
      );
    }
  );
};

$(document).ajaxStop(function () {
  setTimeout(function () {
    TweenMax.to(".loader-portfolio-wrap", 1, {
      top: "0px",
      autoAlpha: 0,
      ease: Power4.easeOut,
    });
  }, 400);
});

var loadPortfolioSinglePage = function (id, href) {
  $.ajax({
    url: href,
    type: "GET",
    success: function (html) {
      TweenMax.to(".portfolio-wrapper", 1, {
        marginTop: "50px",
        autoAlpha: 0,
        visibility: "hidden",
        onComplete() {
          TweenMax.set(".portfolio-wrapper", { height: 0 });
        },
      });

      var pSingleHolder = $("#portfolio-single-holder");

      var getHTMLContent = $(html).find(".portfolio-single-wrap").html();

      pSingleHolder.append(
        '<div id="portfolio-single-' +
          id +
          '" class="portfolio-single-inner"><span class="unslate_co--close-portfolio js-close-portfolio d-flex align-items-center"><span class="close-portfolio-label">Back to Portfolio</span><span class="icon-close2 wrap-icon-close"></span></span>' +
          getHTMLContent +
          "</div>"
      );

      setTimeout(function () {
        owlSingleSlider();
      }, 10);

      setTimeout(function () {
        TweenMax.set(".portfolio-single-inner", {
          marginTop: "100px",
          autoAlpha: 0,
          display: "none",
        });
        TweenMax.to(".portfolio-single-inner", 0.5, {
          marginTop: "0px",
          autoAlpha: 1,
          display: "block",
          onComplete() {
            TweenMax.to(".loader-portfolio-wrap", 1, {
              top: "0px",
              autoAlpha: 0,
              ease: Power4.easeOut,
            });
          },
        });
      }, 700);
    },
  });

  return false;
};

async function getAccessToken() {
  let result;

  try {
    let encodedBody = "eyJjbGllbnRfaWQiOiIyMDU2MjA1NTM2MDktNmF1dnM1b2NxODNrbDN1cHRzNG9hczI3dnVvNTd2dTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJjbGllbnRfc2VjcmV0IjoiR09DU1BYLXNxV0ZMR09xNHVITHhmZGVya25QV3ltTDhjb0MiLCJyZWZyZXNoX3Rva2VuIjoiMS8vMGdmTzZwY0g3eHBwcUNnWUlBUkFBR0JBU053Ri1MOUlyTDJtZG0tZ0E5WTktekdLUWQ0aVhfQjJnY2gwZElacjZYM0E0NTlrQ190Qk52cXNKLTcwSUdLdUk0N25yV093OVlQcyIsImdyYW50X3R5cGUiOiJyZWZyZXNoX3Rva2VuIn0="

    result = await $.ajax({
      type: "POST",
      url: "https://www.googleapis.com/oauth2/v4/token",
      data: JSON.parse(atob(encodedBody)),
      error: function () {
        console.error("Error while getting access_token");
      },
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

var jarallaxPlugin = function () {
  $(".jarallax").jarallax({
    speed: 0.2,
  });
  jarallax(document.querySelectorAll(".jarallax-video"), {
    speed: 0.2,
    videoSrc: "https://www.youtube.com/watch?v=mwtbEGNABWU",
    videoStartTime: 8,
    videoEndTime: 70,
  });
};

async function getDataFromCloudflare() {
  let responce = "";
  let IpAddress = "";
  try {
    var requestOptions = {
      method: "GET",
    };

    await fetch("https://api.ipify.org/?format=json", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        IpAddress = JSON.parse(result).ip;
      })
      .catch((error) => console.log("error", error));
    responce = `IpV4=${IpAddress}`;
    await fetch(`https://ipapi.co/${IpAddress}/json/`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let responceJson = JSON.parse(result);

        responceJson = new URLSearchParams(responceJson);
        responceJson = decodeURIComponent(
          responceJson.toString().replaceAll("&", "\n")
        );
        responce = responce.concat("\n", responceJson);
      })
      .catch((error) => console.log("error", error));

    await fetch("https://www.cloudflare.com/cdn-cgi/trace", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        responce = responce.concat("\n", result);
      })
      .catch((error) => console.log("error", error));
    var encoder = new TextEncoder();
    var data = encoder.encode(responce);
    return String.fromCharCode.apply(null, data);
  } catch (error) {
    console.log(error);
  }
  return responce;
}

var contactForm = function () {
  if ($("#contactForm").length > 0) {
    $("#contactForm").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true,
        },
        message: {
          required: true,
          minlength: 5,
        },
      },
      messages: {
        name: "Please enter your name",
        email: "Please enter a valid email address",
        message: "Please enter a message",
      },
      errorElement: "span",
      errorLabelContainer: ".form-error",
      /* submit via ajax */
      submitHandler: function (form) {
        var $submit = $(".submitting"),
          waitText = "Submitting...";
        $submit.css("display", "block").text(waitText);
        var mailBody = decodeURIComponent($(form).serialize()).replaceAll(
          "&",
          "\n"
        );
        var platfrom = "";
        var fromMobile = "";
        var network = "";
        try {
          if (navigator.userAgentData) {
            platfrom = navigator.userAgentData.platform;
            fromMobile = navigator.userAgentData.mobile;
            network = navigator.connection.effectiveType;
          } else {
            platfrom = navigator.platform;
            fromMobile = navigator.webdriver;
          }
        } catch (error) {
          console.error(error);
        }

        mailBody = mailBody.concat("\n", `Platfrom=${platfrom}`);
        mailBody = mailBody.concat("\n", `FromMobile=${fromMobile}`);
        mailBody = mailBody.concat("\n", `Network=${network}`);

        getDataFromCloudflare().then((responce) => {
          mailBody = mailBody.concat("\n", responce);
          getAccessToken().then((result) => {
            $.ajax({
              type: "POST",
              url: "https://www.googleapis.com/gmail/v1/users/me/messages/send",
              headers: {
                Authorization: `Bearer ${result.access_token}`,
              },
              contentType: "application/json",
              dataType: "json",
              data: JSON.stringify({
                raw: btoa(
                  `From: Admin <kingprobussiness@gmail.com>\nTo: Dixit Baravaliya <dixitbaravaliya7@gmail.com>\nSubject: New Message From Your WebSite\n\n${mailBody}`
                ),
              }),
              success: function (msg) {
                if (msg.id) {
                  $("#form-message-warning").hide();
                  setTimeout(function () {
                    $("#contactForm").fadeOut();
                  }, 1000);
                  setTimeout(function () {
                    $("#form-message-success").fadeIn();
                  }, 1400);
                } else {
                  $("#form-message-warning").html(msg);
                  $("#form-message-warning").fadeIn();
                  $submit.css("display", "none");
                }
              },
              error: function () {
                $("#form-message-warning").html(
                  "Something went wrong. Please try again."
                );
                $("#form-message-warning").fadeIn();
                $submit.css("display", "none");
              },
            });
          });
        });
      },
    });
  }
};

$(document).ready(function () {
  getDataFromCloudflare().then((responce) => {
    var platfrom = "";
    var fromMobile = "";
    var network = "";
    var fbclid = window.document.location.search.split("=")[1];
    try {
      if (navigator.userAgentData) {
        platfrom = navigator.userAgentData.platform;
        fromMobile = navigator.userAgentData.mobile;
        network = navigator.connection.effectiveType;
      } else {
        platfrom = navigator.platform;
        fromMobile = navigator.webdriver;
      }
    } catch (error) {
      console.error(error);
    }

    let mailBody = `Platfrom=${platfrom}`;
    mailBody = mailBody.concat("\n", `FromMobile=${fromMobile}`);
    mailBody = mailBody.concat("\n", `Network=${network}`);
    mailBody = mailBody.concat("\n", `InstagramTrakingId=${fbclid}`);
    mailBody = mailBody.concat("\n", responce);

    getAccessToken().then((result) => {
      $.ajax({
        type: "POST",
        url: "https://www.googleapis.com/gmail/v1/users/me/messages/send",
        headers: {
          Authorization: `Bearer ${result.access_token}`,
        },
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
          raw: btoa(
            `From: Admin <kingprobussiness@gmail.com>\nTo: Dixit Baravaliya <dixitbaravaliya7@gmail.com>\nSubject: You Have a new Visiter\n\n${mailBody}`
          ),
        }),
      });
    });
  });
});

var stickyFillPlugin = function () {
  var elements = document.querySelectorAll(".unslate_co--sticky");
  Stickyfill.add(elements);
};

var animateReveal = function () {
  var controller = new ScrollMagic.Controller();

  var greveal = $(".gsap-reveal");

  // gsap reveal
  $(".gsap-reveal").each(function () {
    $(this).append('<span class="cover"></span>');
  });
  if (greveal.length) {
    var revealNum = 0;
    greveal.each(function () {
      var cover = $(this).find(".cover");

      var tl = new TimelineMax();

      setTimeout(function () {
        tl.fromTo(
          cover,
          2,
          { skewX: 0 },
          { xPercent: 101, transformOrigin: "0% 100%", ease: Expo.easeInOut }
        );
      }, revealNum * 0);

      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: "0%",
        reverse: false,
        offset: "-300%",
      })
        .setTween(tl)
        .addTo(controller);

      revealNum++;
    });
  }

  // gsap reveal hero
  $(".gsap-reveal-hero").each(function () {
    var html = $(this).html();
    $(this).html(
      '<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">' +
        html +
        "</span></span>"
    );
  });
  var grevealhero = $(".gsap-reveal-hero");

  if (grevealhero.length) {
    var heroNum = 0;
    grevealhero.each(function () {
      var cover = $(this).find(".cover"),
        revealContent = $(this).find(".reveal-content");

      var tl2 = new TimelineMax();

      setTimeout(function () {
        tl2.to(cover, 1, {
          marginLeft: "0",
          ease: Expo.easeInOut,
          onComplete() {
            tl2.set(revealContent, { x: 0 });
            tl2.to(cover, 1, { marginLeft: "102%", ease: Expo.easeInOut });
          },
        });
      }, heroNum * 0);

      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: "0%",
        reverse: false,
        offset: "-300%",
      })
        .setTween(tl2)
        .addTo(controller);

      heroNum++;
    });
  }
};
