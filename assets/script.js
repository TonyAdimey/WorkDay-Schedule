$(function() {
  const currentHour = dayjs().hour();
  $("#currentDay").text(dayjs().format("MMM DD YYYY"));

  const hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
  for (const hour of hours) {
    const $hourBlock = $(`#hour-${hour}`);
    const hourValue = $hourBlock[0].dataset.hour;

    if (currentHour > hourValue) {
      $hourBlock.removeClass("present").addClass("past");
    } else if (currentHour < hourValue) {
      $hourBlock.removeClass("present").addClass("future");
    } else {
      $hourBlock.removeClass("past future").addClass("present");
    }

    $hourBlock.find("textarea").val(localStorage.getItem(hour));
  }

  $("button").click(function() {
    const textBox = $(this).siblings("textarea").val();
    const timeBlock = $(this).parent()[0].dataset.hour;
    localStorage.setItem(timeBlock, textBox);
  });
});