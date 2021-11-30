$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  $(".saveBtn").on("click", function () {
    console.log(this);
    var textcontent = $(this).siblings(".description").val();
    var timeid = $(this).parent().attr("id");

    localStorage.setItem(timeid, text);
  });
  $("#9am").val(localStorage.getItem("9am"));
  $("#10am").val(localStorage.getItem("10am"));
  $("#11am").val(localStorage.getItem("11am"));
  $("#12pm").val(localStorage.getItem("12pm"));
  $("#1pm").val(localStorage.getItem("1pm"));
  $("#2pm").val(localStorage.getItem("2pm"));
  $("#3pm").val(localStorage.getItem("3pm"));
  $("#4pm").val(localStorage.getItem("4pm"));
  $("#5pm").val(localStorage.getItem("5pm"));

  function beforeCurrentAfter() {
    var localHour = moment().hour();

    $(".timeid-block").each(function () {
      var plannerHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(plannerHour, localHour);

      if (plannerHour < localHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (plannerHour === localHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      } else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    });
  }
  beforeCurrentAfter();
});
