$(document).ready(function() {
  if ($.cookie("focus")) {
    $(".focus_value").html($.cookie("focus"));
    $(".focus_value_container").fadeIn("slow");
  } else {
    $( ".focus_question, #focus_form" ).fadeIn( "slow" );
  }

  $('#focus_form').submit(function(e) {
    if ($(".focus_field").val().trim().length > 0) {
      event.preventDefault(e)
      $( ".focus_question, #focus_form" ).fadeOut( "slow", function() {
        var currentDate = new Date();
        date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+1, 0, 0, 0);
        document.cookie="focus=" + $( ".focus_field" ).val() + "; expires=" + date;
        $(".focus_value").html($.cookie("focus"))
        $(".focus_value_container").fadeIn("slow");
      });
    }
  });

  $('.delete').click(function(event) {
    $( ".focus_field" ).val("")
    $.removeCookie("focus");
    $(".focus_value_container").fadeOut("slow", function() {
      $( ".focus_question, #focus_form" ).fadeIn( "slow" )
    });
  });
});
