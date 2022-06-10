import Player from './mp3player'

var elms = [
  'reciterName', 'playerTimer', 'playerDuration', 'playerPlayBtn',
  'playerPauseBtn', 'playerPrevBtn', 'playerNextBtn', 'playerPlaylistBtn',
  'playerVolumeBtn', 'playerProgress', 'playerBar', 'playerLoading', 'playerPlaylist',
  'playerList', 'playerVolume', 'playerBarFull', 'playerVolume', 'playerVolumeBar', 'playerVolumePiont',
  'playlistItem', 'playerProgressBar', 'playerProgressPiont', 'closePlaylist', 'playerProgressLine',
  'fullPlayerToggle', 'fullPlayer', 'closeFullplayer', 'fullPlayerNextBtn', 'fullPlayerPrevBtn', 'playerLoading',
  'fullPlayerPauseBtn', 'fullPlayerPlayBtn', 'fplyReader', 'fplySora', 'fullPlaylistItem', 'fullPlayerList', 'fullPlayerLoading',
  'playerVolumeInner', 'playerVolumePiont', 'playerBackwardBtn', 'playerForwardBtn', 'clearPlaylist', 'savePlaylist', 'playlistName', 'playlistId'
];

elms.forEach(function (elm) {
  window[elm] = document.getElementById(elm);
});

// Setup our new audio player class and pass it the playerPlayplayerList.
window.player = new Player();

playerPlayBtn.addEventListener('click', function () {
  player.play();
});

fullPlayerPlayBtn.addEventListener('click', function () {
  player.play();
});

playerPauseBtn.addEventListener('click', function () {
  player.pause();
});
fullPlayerPauseBtn.addEventListener('click', function () {
  player.pause();
});
playerPrevBtn.addEventListener('click', function () {
  player.skip('prev');
});
fullPlayerPrevBtn.addEventListener('click', function () {
  player.skip('prev');
});
playerNextBtn.addEventListener('click', function () {
  player.skip('next');
});

fullPlayerNextBtn.addEventListener('click', function () {
  player.skip('next');
});

playerBackwardBtn.addEventListener('click', function () {
  player.backward(5);
});
playerForwardBtn.addEventListener('click', function () {
  player.forward(5);
});

clearPlaylist.addEventListener('click', function () {
  player.setPlaylist([]);
  playlistId.value = '';
  playlistName.value = '';

});
if (savePlaylist) {
  savePlaylist.addEventListener('click', function () {
    playlistName.classList.remove("error");
    let savePlaylist = [];
    for (let index = 0; index < player.playlist.length; index++) {
      const item = player.playlist[index];
      var saveItem = {};
      switch (item.type) {
        case 'tadabor':
           saveItem = {
            'type': item.type,
            'tadabor_id': item.id.replace('tb', ''),
          };
          break;
        case 'radio':
           saveItem = {
            'type': item.type,
            'radio_id': item.id.replace('100002-', ''),
          };
          break;
        default:
           saveItem = {
            'type': item.type,
            'sora_id': item.sora_id,
            'read_id': item.read_id,
          };
          break;
      }
      
      savePlaylist.push(saveItem);
    }
    const name = playlistName.value
    const id = playlistId.value
    const data  = {
      "_token": window.App.csrfToken, 
      name: name, 
      id: id, 
      playlist: JSON.stringify(savePlaylist) 
    }
    $.post(window.App.urlBase + '/' + window.App.current_language + '/ajax/playlist',data,
      function (data, textStatus, jqXHR) {
        var loc = window.location.pathname;
        if (loc.includes('playlists')) {
          Turbolinks.visit(window.location.toString(), { action: 'replace' })
        }
      }).fail(function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.responseJSON && jqXHR.responseJSON.errors && jqXHR.responseJSON.errors.name) {
          playlistName.classList.add("error");
        }
      });
  });
}



playerPlaylistBtn.addEventListener('click', function () {
  player.togglePlaylist();
});
closePlaylist.addEventListener('click', function () {
  player.togglePlaylist();
});
fullPlayerToggle.addEventListener('click', function () {
  player.toggleFullPlayer();
});
closeFullplayer.addEventListener('click', function () {
  player.toggleFullPlayer();
});
playerVolumeBtn.addEventListener('click', function () {
  player.toggleVolume();
});
playerVolume.addEventListener('click', function () {
  player.toggleVolume();
});



var move = function (event) {

};
function startSlide(event) {
  var set_perc = ((((event.clientX - playerProgress.getBoundingClientRect().left) / playerProgressBar.offsetHeight)).toFixed(6));
  set_perc = Math.max(set_perc, 0);
  set_perc = Math.min(set_perc, 1);

  window.addEventListener('mousemove', moveSlide);
  playerProgress.style.width = (set_perc * 100) + '%';
  playerProgressLine.style.width = (set_perc * 100) + '%';
  playerProgressPiont.style.left = 'calc(' + (set_perc * 100) + '% - 6px)';
  playerProgressPiont.setAttribute('data-down', 'true');

}

function moveSlide(event) {
  var set_perc = ((((event.clientX - playerProgress.getBoundingClientRect().left) / playerProgressBar.offsetWidth)).toFixed(6));
  set_perc = Math.max(set_perc, 0);
  set_perc = Math.min(set_perc, 1);
  playerProgress.style.width = (set_perc * 100) + '%';
  playerProgressLine.style.width = (set_perc * 100) + '%';
  playerProgressPiont.style.left = 'calc(' + (set_perc * 100) + '% - 6px)';

}

function stopSlide(event) {
  var set_perc = ((((event.clientX - playerProgress.getBoundingClientRect().left) / playerProgressBar.offsetWidth)).toFixed(6));
  set_perc = Math.max(set_perc, 0);
  set_perc = Math.min(set_perc, 1);

  window.removeEventListener('mousemove', moveSlide);
  playerProgress.style.width = (set_perc * 100) + '%';
  playerProgressLine.style.width = (set_perc * 100) + '%';
  playerProgressPiont.style.left = 'calc(' + (set_perc * 100) + '% - 6px)';
  playerProgressPiont.setAttribute('data-down', 'false');

  player.seek(set_perc);
}







function startVolumeSlide(event) {
  var set_perc = ((((- event.clientY + playerVolume.getBoundingClientRect().bottom) / playerVolumeBar.offsetHeight)).toFixed(6));
  set_perc = Math.max(set_perc, 0);
  set_perc = Math.min(set_perc, 1);

  window.addEventListener('mousemove', moveVolumeSlide);
  playerVolumeInner.style.height = (set_perc * 100) + 'px';
  playerVolumePiont.style.bottom = 'calc(' + (set_perc * 100) + 'px - 6px)';
  playerVolumePiont.setAttribute('data-down', 'true');
}
function moveVolumeSlide(event) {
  var set_perc = ((((- event.clientY + playerVolume.getBoundingClientRect().bottom) / playerVolumeBar.offsetHeight)).toFixed(6));
  set_perc = Math.max(set_perc, 0);
  set_perc = Math.min(set_perc, 1);
  player.volume(set_perc);

  playerVolumeInner.style.height = (set_perc * 100) + 'px';
  playerVolumePiont.style.bottom = 'calc(' + (set_perc * 100) + 'px - 6px)';

}
function stopVolumeSlide(event) {
  var set_perc = ((((- event.clientY + playerVolume.getBoundingClientRect().bottom) / playerVolumeBar.offsetHeight)).toFixed(6));
  set_perc = Math.max(set_perc, 0);
  set_perc = Math.min(set_perc, 1);
  player.volume(set_perc);

  window.removeEventListener('mousemove', moveVolumeSlide);
  playerVolumeInner.style.height = (set_perc * 100) + 'px';
  playerVolumePiont.style.bottom = 'calc(' + (set_perc * 100) + 'px - 6px)';
  playerVolumePiont.setAttribute('data-down', 'false');

}

playerVolume.addEventListener('mousemove', move);
playerVolume.addEventListener('touchmove', move);


playerProgressBar.addEventListener('mousedown', startSlide);
playerProgressBar.addEventListener('mouseup', stopSlide);

playerVolumeBar.addEventListener('mousedown', startVolumeSlide);
playerVolume.addEventListener('mouseup', stopVolumeSlide);
// document.body.addEventListener('mouseup', stopSlide);
