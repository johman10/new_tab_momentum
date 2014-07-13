$(document).ready(function() {
  if (get_cookie("name")) {
    $('#name').html(get_cookie("name"))
  } else {
    $('#name').html(
      "<form name='name' action='' id='name_form' method='GET'><input type='text' name='name' value='' /><input type='submit' value='submit' /></form>")
  }
  // localStorage.setItem("name", var_name);

  $('#name_form').submit(function() {
    if ($("input[name=name]").val() != "") {
      var date = new Date;
      date.setDate(date.getFullYear() + 10);
      document.cookie="name=" + $( "input[name=name]" ).val() + "; expires=" + date;
      $('#name').html(get_cookie("name"))
      return true;
    }
    else {
      $('.error').remove();
      $('#name_form').before('<div class="error">Vul een naam in!</div>');
      return false;
    }
  })
});

function get_cookie ( cookie_name )
{
    // http://www.thesitewizard.com/javascripts/cookies.shtml
    var cookie_string = document.cookie ;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match (
                        '(^|;)[\s]*' +
                        cookie_name +
                        '=([^;]*)' );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}
