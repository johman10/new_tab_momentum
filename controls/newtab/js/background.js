$(document).ready(function() {
  date = new Date();
  date.setDate(date.getDate() - 1);

  if ( localStorage.last_date ) {
    var last_date = new Date(localStorage.last_date)
  }
  else {
    var last_date = localStorage.last_date = new Date();
  }

  if ( !localStorage.background_info || ( last_date.getDate() <= date.getDate() ) ) {
    localStorage.background_info = new Trianglify().generate(screen.width, screen.height).dataUrl;
    localStorage.last_date = new Date();
  }

  $('#body').css('background-image', localStorage.background_info);

  BackgroundCheck.init({
    targets: '.main_focus_container, .main_container',
    images: '#body'
  });

  BackgroundCheck.refresh()
});
