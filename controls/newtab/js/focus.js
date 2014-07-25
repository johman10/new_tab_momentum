$(document).ready(function() {
  if ($.cookie("focus")) {
    $(".focus_value .delete").before($.cookie("focus"));
    $(".focus_value").fadeIn("slow");
  } else {
    $( ".focus_question, #focus_form" ).fadeIn( "slow" )
  }

  $('#focus_form').submit(function() {
    if ($(".focus_field").val().trim().length > 0) {
      $( ".focus_question, #focus_form" ).fadeOut( "slow", function() {
        var currentDate = new Date();
        date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+1, 0, 0, 0);
        document.cookie="focus=" + $( ".focus_field" ).val() + "; expires=" + date;
        $(".focus_value").html($.cookie("focus"))
        $(".focus_value").fadeIn("slow");
      });
      event.preventDefault()
    }
  });

  $('.delete').click(function(event) {
    $.removeCookie("focus");
    $(".focus_value").fadeOut("slow", function() {
      $( ".focus_question, #focus_form" ).fadeIn( "slow" )
    });
  });
});
