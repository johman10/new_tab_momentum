$(document).ready(function() {
  $( ".main_container" ).fadeIn( "slow" )
  if ($.cookie("name")) {
    $('#name').html($.cookie("name"))
  } else {
    $('#clock').hide();
    $('.main_focus_container').hide();
    $('#day_wish').html("<span id='name_question'>Hello, what’s your name? </span><form name='name' action='' id='name_form' method='GET'><input type='text' name='name' id='name_field' value='' /></form>")
  }
  // localStorage.setItem("name", var_name);

  $('#name_form').submit(function() {
    if ($("#name_field").val().trim().length > 0) {
      $( ".main_container" ).fadeOut( "slow", function() {
        var date = new Date;
        date.setDate(date.getFullYear() + 10);
        document.cookie="name=" + $( "#name_field" ).val() + "; expires=" + date;
        $('#clock').show();
        $('#day_wish').html('Good <span id="segment"></span>, <span id="name"></span>.');
        $('#name').html($.cookie("name"));
        $('#segment').html(day_segment)
        $( ".main_container" ).fadeIn( "slow" )
        $('.main_focus_container').fadeIn( "slow" );
      });
      event.preventDefault()
    }
    else {
      $('#name_field').addClass('error');
      return false;
    }
  });

  $('#name').dblclick(function() {
    $('#name').attr('contentEditable', true);
    $('#name').focus();
    $('#name').addClass('editing')
    
    $('#name').keypress(function (e) {
      if (e.which == 13) {
        $('#name').focusout();
      }
    });
    $('#name').focusout(save_edit_name);
  });
});

function save_edit_name() {
  if ($("#name").html() != "") {
    $.removeCookie("name");
    var date = new Date;
    date.setDate(date.getFullYear() + 10);
    document.cookie="name=" + $( "#name" ).html() + "; expires=" + date;
    $('#name').removeAttr('contentEditable');
    $('#name').removeClass('editing')
  }
  else {
    $('#name').html($.cookie("name"))
    $('#name').removeAttr('contentEditable', false);
    $('#name').removeClass('editing')
  }
}

function day_segment() {
  var today=new Date();
  var h=today.getHours();

  if (h >= 6) {
    $('#segment').html('morning')
  }
  if (h >= 12) {
    $('#segment').html('afternoon')
  }
  if (h >= 18 || h < 6) {
    $('#segment').html('evening')
  }
}
