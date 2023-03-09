$(function () {
  var currentHour = dayjs().hour();

  $("#currentDay").text(dayjs().format("MMM DD YYYY"));

  var hourNine = $("#hour-9")[0].dataset.hour;
  
  if (currentHour > hourNine) {
    $("#hour-9").removeClass("present").addClass("past");
  } else if (currentHour < hourNine) {
    $("#hour-9").removeClass("present").addClass("future");
  } else {
    $("#hour-9").removeClass("present").addClass("present");
  }

  $("#hour-9 textarea").val(localStorage.getItem("9"));

  var hourTen = $("#hour-10")[0].dataset.hour;

  if (currentHour > hourTen) {
    $("#hour-10").removeClass("present").addClass("past");
  } else if (currentHour < hourTen) {
    $("#hour-10").removeClass("present").addClass("future");
  } else {
    $("#hour-10").removeClass("present").addClass("present");
  }

  $("#hour-10 textarea").val(localStorage.getItem("10"));

  var hourEleven = $("#hour-11")[0].dataset.hour;

  if (currentHour > hourEleven) {
    $("#hour-11").removeClass("present").addClass("past");
  } else if (currentHour < hourEleven) {
    $("#hour-11").removeClass("present").addClass("future");
  } else {
    $("#hour-11").removeClass("present").addClass("present");
  }

  $("#hour-11 textarea").val(localStorage.getItem("11"));

  var hourTwelve = $("#hour-12")[0].dataset.hour;

  if (currentHour > hourTwelve) {
    $("#hour-12").removeClass("present").addClass("past");
  } else if (currentHour < hourNine) {
    $("#hour-12").removeClass("present").addClass("future");
  } else {
    $("#hour-12").removeClass("present").addClass("present");
  }

  $("#hour-12 textarea").val(localStorage.getItem("12"));

  var hourOne = $("#hour-1")[0].dataset.hour;

  if (currentHour > hourOne) {
    $("#hour-1").removeClass("present").addClass("past");
  } else if (currentHour < hourOne) {
    $("#hour-1").removeClass("present").addClass("future");
  } else {
    $("#hour-1").removeClass("present").addClass("present");
  }

  $("#hour-1 textarea").val(localStorage.getItem("13"));

  var hourTwo = $("#hour-2")[0].dataset.hour;

  if (currentHour > hourTwo) {
    $("#hour-2").removeClass("present").addClass("past");
  } else if (currentHour < hourTwo) {
    $("#hour-2").removeClass("present").addClass("future");
  } else {
    $("#hour-2").removeClass("present").addClass("present");
  }

  $("#hour-2 textarea").val(localStorage.getItem("14"));

  var hourThree = $("#hour-3")[0].dataset.hour;

  if (currentHour > hourThree) {
    $("#hour-3").removeClass("present").addClass("past");
  } else if (currentHour < hourThree) {
    $("#hour-3").removeClass("present").addClass("future");
  } else {
    $("#hour-3").removeClass("present").addClass("present");
  }

  $("#hour-3 textarea").val(localStorage.getItem("15"));

  var hourFour = $("#hour-4")[0].dataset.hour;

  if (currentHour > hourFour) {
    $("#hour-4").removeClass("present").addClass("past");
  } else if (currentHour < hourFour) {
    $("#hour-4").removeClass("present").addClass("future");
  } else {
    $("#hour-4").removeClass("present").addClass("present");
  }

  $("#hour-4 textarea").val(localStorage.getItem("16"));

  var hourFive = $("#hour-5")[0].dataset.hour;

  if (currentHour > hourFive) {
    $("#hour-5").removeClass("present").addClass("past");
  } else if (currentHour < hourFive) {
    $("#hour-5").removeClass("present").addClass("future");
  } else {
    $("#hour-5").removeClass("present").addClass("present");
  }

  $("#hour-5 textarea").val(localStorage.getItem("17"));

  $("button").click(function () {
    var textBox = $(this).siblings("textarea").val();
    var timeBlock = $(this).parent()[0].dataset.hour;
    localStorage.setItem(timeBlock, textBox);
  })
 
});
