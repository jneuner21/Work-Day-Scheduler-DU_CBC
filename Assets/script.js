$(document).ready(function() {

//write all jquery inside this function

//variable declarations

//display the date to the user
  var currentDay = $("#currentDay");

  currentDay.text(moment().format("dddd, MMM Do"));

//functions
//this function is responsible for checking time and determining what class to add (past present future)
  function checkTime() {
  //grab the current hour using moment js
  var CurrentHour = moment().hours()
  //need to grab the current house for the time block
  //need to loop through entire block hours
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if(blockHour < CurrentHour) {
       $(this).addClass("past");
  } else if (blockHour > CurrentHour){
      $(this).addClass("future");
  } else if( blockHour === CurrentHour){
      $(this).addClass("present");
  };

  })
 }

 checkTime()

//event handlers
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  //display the items that are in local storage into the time blocks
  $('#hour-9 .description').val(localStorage.getItem("hour-9"));
  $('#hour-10 .description').val(localStorage.getItem("hour-10"));
  $('#hour-11 .description').val(localStorage.getItem("hour-11"));
  $('#hour-12 .description').val(localStorage.getItem("hour-12"));
  $('#hour-13 .description').val(localStorage.getItem("hour-13"));
  $('#hour-14 .description').val(localStorage.getItem("hour-14"));
  $('#hour-15 .description').val(localStorage.getItem("hour-15"));
  $('#hour-16 .description').val(localStorage.getItem("hour-16"));
  $('#hour-17 .description').val(localStorage.getItem("hour-17"));
  


















});