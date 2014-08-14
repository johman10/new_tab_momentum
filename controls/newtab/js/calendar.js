var clientId = '893078385474-rrcscakbjoscjfd1dsm5vedua65aoqn3.apps.googleusercontent.com';
var apiKey = 'AIzaSyAJGi3v-MnbEQSaJJb-IrS0MNXfMxiUKlA';
var scopes = 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.profile';
var beginDay = new Date();
beginDay.setHours(0,0,0,0);
var endDay = new Date();
endDay.setHours(23,59,59,999);

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  checkAuth();
}

function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (!authResult.error) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
   }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: clientId, scope: scopes, immediate: false},
    handleAuthResult);
  return false;
}

function makeApiCall() {
  gapi.client.load('calendar', 'v3', function() {
    var request = gapi.client.calendar.calendarList.list({});
    calendars = [];

    request.execute(function(resp) {
      for (var i = 0; i < resp.items.length; i++) {
        calendars.push(resp.items[i].id);
      }

      for (var l = 0; l < calendars.length; l++) {
        var request = gapi.client.calendar.events.list({
          'calendarId': calendars[l],
          'timeMin': beginDay,
          'timeMax': endDay
        });

        eventList(request);
      }
    });
  });
}

function eventList(request) {
  request.execute(function(resp) {
    if (resp.items) {
      console.log(resp);
      for (var i = 0; i < resp.items.length; i++) {
        var li = document.createElement('li');
        if (resp.items[i].summaryOverride) {
          li.appendChild(document.createTextNode(resp.items[i].summaryOverride));
        } else {
          li.appendChild(document.createTextNode(resp.items[i].summary));
        }
        $('#events').append(li);
      }
    }
  });
}
