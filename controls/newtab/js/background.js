$(document).ready(function() {
  if (!$.cookie("background")) {
    var currentDate = new Date();
    var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+1, 0, 0, 0);
    var backgroundNumber = Math.floor(Math.random() * 53);
    document.cookie="background=" + backgroundNumber + "; expires=" + date;
  }

  $('#body').css('background-image', "url(img/backgrounds/" + $.cookie("background") + ".jpg)");
});
