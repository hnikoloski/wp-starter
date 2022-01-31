require("waypoints/lib/jquery.waypoints.js");

jQuery(document).ready(function ($) {
  function addClassDelay(v, className, delay) {
    $(v).removeClass(className);
    $(v).css("opacity", "0");
    setTimeout(function () {
      $(v).waypoint(
        function () {
          setTimeout(function () {
            $(v).css("opacity", "1");
            $(v).addClass(className);
          }, delay);
        },
        { offset: "100%" }
      );
    }, delay);
  }
  function setAnimateWithWaypoints() {
    $(".fadeInUp").each(function (k, v) {
      let delay = $(this).attr("data-delay");
      addClassDelay(v, "fadeInUp", delay);
    });

    $(".add-active").each(function (k, v) {
      let delay = $(this).attr("data-delay");
      addClassDelay(v, "active", delay);
    });

    $(".fadeInDown").each(function (k, v) {
      let delay = $(this).attr("data-delay");
      addClassDelay(v, "fadeInDown", delay);
    });

    $(".fadeIn").each(function (k, v) {
      let delay = $(this).attr("data-delay");
      addClassDelay(v, "fadeIn", delay);
    });

    $(".fadeInLeft").each(function (k, v) {
      let delay = $(this).attr("data-delay");
      addClassDelay(v, "fadeInLeft", delay);
    });

    $(".fadeInRight").each(function (k, v) {
      let delay = $(this).attr("data-delay");
      addClassDelay(v, "fadeInRight", delay);
    });
  }
  if ($("body").hasClass("home")) {
    setTimeout(function () {
      $("#preloader").fadeOut(600);
      $("body").removeClass("overflow-hidden");

      setAnimateWithWaypoints();
    }, 200);
  } else {
    setTimeout(function () {
      $("#preloader").fadeOut(600);
      $("body").removeClass("overflow-hidden");

      setAnimateWithWaypoints();
    }, 300);
  }
  $(".text-animation").each(function (k, v) {
    let elem = $(this);
    let characters = elem
      .html()
      .replaceAll("<br>", "|")
      .replaceAll("<br />", "|")
      .trim()
      .split("");
    // console.log(elem.html());
    // console.log(characters);
    elem.empty();

    $.each(characters, function (i, el) {
      let delay = i * 0.04;
      if (el === " ") {
        el = "&nbsp;";
      }
      if (el === "|") {
        elem.append("<br />");
      } else {
        elem.append(
          "<span style='transition-delay: " + delay + "s'>" + el + "</span>"
        );
      }
    });
  });
});
