$(document).ready(function() {
  if ($.cookie("focus")) {
    $(".focus_value").html($.cookie("focus"));
    $(".focus_value").fadeIn("slow");
  } else {
    $( ".focus_question, #focus_form" ).fadeIn( "slow" )
  }

  $('#focus_form').submit(function() {
    console.log("hallo");
    if ($(".focus_field").val().trim().length > 0) {
      $( ".focus_question, #focus_form" ).fadeOut( "slow", function() {
        var date = new Date;
        date.setDate(date.getDay() + 1);
        document.cookie="focus=" + $( ".focus_field" ).val() + "; expires=" + date;
        $(".focus_value").html($.cookie("focus"))
        $(".focus_value").fadeIn("slow");
      });
      event.preventDefault()
    }
    else {
      $('.focus_field').addClass('error');
      return false;
    }
  });
});
