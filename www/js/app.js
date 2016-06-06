$(document).ready(function () {
    document.addEventListener('deviceready', onDeviceReady, false);
});

function onDeviceReady () {
  var channel = 'TechGuyWeb';
  getPlaylist(channel);
}

function getPlaylist (channel) {
  $('#vid-list').html('');
  $.get(
    'https://www.googleapis.com/youtube/v3/channels',
  {
    part: 'contentDetails',
    forUserName: channel,
    key: 'AIzaSyC---MBCoA3UKFartfXoQnPIv2YfKQmNSM'
  },
    function (data) {
      console.log(data);
    }
  );
}