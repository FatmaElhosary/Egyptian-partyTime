var navBoxWidth = $("nav").innerWidth();
$(".open-nav span").click(function () {
  $("nav").animate({ left: "0px" }, 1000); //open nav
});
//close nav
$(".nav-links ul li i").click(function () {
  $("nav").animate({ left: `-${navBoxWidth}` }, 1000);
});
////Details Section
$(document).ready(function () {
  $(".caption .detail-txt").slideUp(); //close all at the begining
});
//h3 clicked
$(".caption .head").click(function () {
  $(this).next().slideToggle(1000); //open or close the clicked one
  $(".detail-txt").not($(this).next()).slideUp(1000); //close all excet the clicked one
});
 const homeHeight = $("#home").outerHeight();
$(window).scroll(function () {
  if ($(window).scrollTop() > homeHeight) {
    $(".open-nav").hide();
  } else {
    $(".open-nav").show();
  }
} );

 
///////////////end Details Section ///////////////////
//contact Section////////////////////
//var reg = /^[\w@-]{0,100}$/; //// \w any char or number capital or small or _
$("#contact textarea").keyup(function () {
  if ($(this).val().length <= 100) {
    //alert(100-$(this).val().length)
    $("#char").text(100 - $(this).val().length);
  } else {
    $("#char").text("your available character finished");
  }
});
/////////////end Contact Section////////////////
////COUNT DOWN ////////
//get current time - deadline
function updateTimer(deadline) {
  var time = deadline - new Date();
  return {
    seconds: Math.floor((time / 1000) % 60),
    minutes: Math.floor((time / (1000 * 60)) % 60),
    hours: Math.floor((time / (1000 * 60 * 60)) % 24),
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
    totaltimeleft: time,
  };
}
//add time to html
function startCountDown(deadline) {
  var timeInterval = setInterval(function () {
    var timer = updateTimer(deadline);
    $("#days").html(`<h3>${timer.days} D</h3>`);
    $("#hours").html(`<h3>${timer.hours} H</h3>`);
    $("#minutes").html(`<h3>${timer.minutes} M</h3>`);
    $("#seconds").html(`<h3>${timer.seconds} S</h3>`);
    // $('#clock').html(`<h3>${timer.totaltimeleft}</h3>`)
    //stop interval when reach Deadline
     if (timer.totaltimeleft < 0) {
      clearInterval(timeInterval);
      $("#days").html("0 D");
      $("#hours").html("0 H");
      $("#minutes").html("0 M");
      $("#seconds").html("0 S");
    } 
    /////////////////////////////////////
  }, 1000);
}
//start function////
window.onload = function () {
  var deadline = new Date("October 20,2020 10:00:00");
  startCountDown(deadline);
};
