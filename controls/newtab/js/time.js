$(document).ready(function() {
  startTime()

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
})

function startTime() {
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  m = checkTime(m);
  $('#clock').html(h+":"+m);
  var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
  if (i<10) {i = "0" + i};
  return i;
}
