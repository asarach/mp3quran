const { Howl, Howler } = require('howler');

var Player = function () {

  //Get old playlist
  // localStorage.removeItem('mp3quran_playlist');
  // localStorage.removeItem('mp3quran_player');
  const playlist = JSON.parse(localStorage.getItem("mp3quran_playlist") || "[]");
  this.playerData = JSON.parse(localStorage.getItem("mp3quran_player") || "{}");

  this.setPlaylist(playlist);

  //Get old current item
  this.sound = null;
  this.current_item = null;
  this.current_index = 0;

  this.playing_state = null;
  this.playing_item = null;
  this.playing_type = null;

  if (this.playerData.current_index != undefined && this.playlist.length > 0) {
    this.setCurrentItem(this.playerData.current_index);
    this.current_index = this.playerData.current_index;
  }

  this.volume(0.5);
};

Player.prototype = {

  /************************************
  * Playlist Controles
  ************************************/
  setPlaylist: function (playlist) {
    this.playlist = playlist;
    this.updatePlaylist();
  },

  addItemToPlaylist: function (item) {

    let index = this.getItemIndex(item);
    if (index === -1) {
      this.playlist.push(item);
      this.updatePlaylist();
    }
  },

  removeItemToPlaylist: function (item) {
    let index = this.getItemIndex(item)
    this.playlist.splice(index, 1);
    this.updatePlaylist();
  },


  updatePlaylist: function () {
    var self = this;
    var storagePlaylist = [];
    playerList.innerHTML = '';

    if (this.playlist.length > 0) {
      $('.audio-player').show();
    } else {
      $('.audio-player').hide();
      if (self.sound != null) {
        self.sound.stop();
      }
    }

    this.playlist.forEach(function (item) {
      var clone = playlistItem.content.cloneNode(true);
      var fullclone = fullPlaylistItem.content.cloneNode(true);

      //set text elements
      if (typeof item.name !== "undefined" && item.name != null) {
        var sora = clone.querySelectorAll(".read-sora")[0];
        var fullsora = fullclone.querySelectorAll(".read-sora")[0];
        sora.innerHTML = item.name;
        fullsora.innerHTML = item.name;
      }

      if (typeof item.num !== "undefined" && item.num != null) {
        var num = clone.querySelectorAll(".read-num")[0];
        num.innerHTML = item.num;
      }

      if (typeof item.reciter !== "undefined" && item.reciter != null) {
        var reciter = clone.querySelectorAll(".reciter-name")[0];
        var fullreciter = fullclone.querySelectorAll(".read-reciter")[0];
        reciter.innerHTML = item.reciter;
        fullreciter.innerHTML = item.reciter;
      }

      if (typeof item.rewaya !== "undefined" && item.rewaya != null) {
        var rewaya = clone.querySelectorAll(".rewaya-name")[0];
        rewaya.innerHTML = item.rewaya;
      }
      clone.querySelectorAll("li")[0].id = "playerListItem-" + self.getItemIndex(item);
      fullclone.querySelectorAll("li")[0].id = "fullPlayerListItem-" + self.getItemIndex(item);

      //add event and append
      clone.querySelectorAll(".btn-play")[0].onclick = function () {
        player.skipTo(self.playlist.indexOf(item));
      };
      fullclone.querySelectorAll(".btn-play")[0].onclick = function () {
        player.skipTo(self.playlist.indexOf(item));
      };
      clone.querySelectorAll(".btn-pause")[0].onclick = function () {
        player.pause();
      };
      fullclone.querySelectorAll(".btn-pause")[0].onclick = function () {
        player.pause();
      };
      playerList.appendChild(clone);
      fullPlayerList.appendChild(fullclone);

      //update storage playlist
      const storageItem = Object.assign({}, item);
      delete storageItem.howl
      storagePlaylist.push(storageItem);


    });
    localStorage.setItem('mp3quran_playlist', JSON.stringify(storagePlaylist));
  },

  setCurrentItem: function (index) {
    var self = this;
    self.current_item = self.playlist[index];
    self.setCurrentIndex(index);

    var data = self.playlist[self.current_index];
    //stop current playing item
    for (let i = 0; i < self.playlist.length; i++) {
      if (self.playlist[i].howl) {
        self.playlist[i].howl.stop();
      }
    }

    //if is howler and current is same as clicked just play else create and load 
    if (data.howl) {
      self.sound = data.howl;
    } else {

      // if (self.sound == null || self.sound.src !== self.current_item.file) {
      //   if (self.sound != null) {
      //     self.sound.unload();
      //   }
      self.sound = data.howl = new Howl({
        src: [self.current_item.file],
        html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
        onplay: function () {
          // Display the playerDuration.

          // Start updating the playerProgress of the track.
          requestAnimationFrame(self.step.bind(self));

          self.setStyles('play', index);
        },
        onload: function () {
          // Start the wave animation.
          playerDuration.innerHTML = self.formatTime(Math.round(self.sound.duration()));
          playerTimer.innerHTML = self.formatTime(0);
          self.setStyles('load', index);
        },
        onend: function () {
          // Stop the wave animation.
          self.skip('next');
        },
        onpause: function () {
          // Stop the wave animation.
          self.setStyles('pause', index);
        },
        onstop: function () {
          // Stop the wave animation.
          self.setStyles('stop', index);

        },
        onseek: function () {
          // Start updating the playerProgress of the track.
          requestAnimationFrame(self.step.bind(self));
        }
      });
    }
    self.sound.load();

    reciterName.innerHTML = self.current_item.reciter;
    soraName.innerHTML = self.current_item.name;

    fplyReader.innerHTML = self.current_item.reciter;
    fplySora.innerHTML = self.current_item.name;
  },
  setCurrentIndex: function (index) {
    if (typeof index === 'number') {
      this.current_index = index;
      this.playerData.current_index = index;
      localStorage.setItem('mp3quran_player', JSON.stringify(this.playerData));
    }


  },

  addAndPlayItem: function (item) {
    this.addItemToPlaylist(item);
    this.setCurrentItem(this.getItemIndex(item));
    this.play();
  },
  addItem: function (item) {
    this.addItemToPlaylist(item);
  },
  setState: function (state) {
    this.playing_state = state.playing_state;
    this.playing_item = state.playing_item;
    this.playing_type = state.playing_type;
  },

  togglePlaylist: function () {
    playerPlaylist.classList.toggle("opened");
  },
  toggleFullPlayer: function () {
    fullPlayer.classList.toggle("opened");
  },

  /************************************
   * Player Controles
   ************************************/
  play: function () {
    this.sound.play();
    this.setStyles('init', this.current_index);
  },

  pause: function () {
    this.sound.pause();
    this.setStyles('pause', this.current_index);
  },

  skip: function (direction) {
    var self = this;
    // Get the next track based on the direction of the track.
    var index = 0;
    if (direction === 'prev') {
      index = self.current_index - 1;
      if (index < 0) {
        index = self.playlist.length - 1;
      }
    } else {
      index = self.current_index + 1;
      if (index >= self.playlist.length) {
        index = 0;
      }
    }

    self.skipTo(index);
  },

  skipTo: function (index) {
    var self = this;
    // Stop the current track.
    if (self.playlist[self.current_index].howl) {
      self.playlist[self.current_index].howl.stop();
    }

    // Reset playerProgress.
    playerProgress.style.width = '0%';
    playerProgressLine.style.width = '0%';
    playerProgressPiont.style.left = 'calc(0% - 6px)';

    // Play the new track.
    this.setCurrentItem(index);
    self.play(index);
  },

  /************************************
  * volume Controles
  ************************************/
  volume: function (val) {
    var self = this;

    // Update the global volume (affecting all Howls).
    Howler.volume(val);
    // Update the display on the slider.
    if (val <= 0) {
      $('#playerVolumeBtn .uni-icon').hide();
      $('#playerVolumeBtn .icon-volume_off').show();
    } else if (val > 0 && val <= 0.15) {
      $('#playerVolumeBtn .uni-icon').hide();
      $('#playerVolumeBtn .icon-volume_mute').show();
    } else if (val > 0.15 && val <= 0.65) {
      $('#playerVolumeBtn .uni-icon').hide();
      $('#playerVolumeBtn .icon-volume_down').show();
    } else {
      $('#playerVolumeBtn .uni-icon').hide();
      $('#playerVolumeBtn .icon-volume_up').show();
    }
    // var barWidth = (val * 90) / 100;
    // playerBarFull.style.width = (barWidth * 100) + '%';
    // playerSliderBtn.style.left = (window.innerWidth * barWidth + window.innerWidth * 0.05 - 25) + 'px';
  },

  toggleVolume: function () {
    playerVolume.classList.toggle("show");
  },

  /************************************
  * Helpers Functions
  ************************************/
  formatTime: function (secs) {
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  },

  getItemIndex: function (item) {
    var result = this.playlist.filter(obj => {
      return obj.id === item.id
    })
    return this.playlist.indexOf(result[0]);
  },

  setStyles: function (action, index) {
    var self = this;
    $('#playerList .btn-play').show();
    $('#playerList .btn-pause').hide();
    switch (action) {
      case 'pause':
        playerPlayBtn.style.display = 'block';
        playerPauseBtn.style.display = 'none';
        fullPlayerPlayBtn.style.display = 'block';
        fullPlayerPauseBtn.style.display = 'none';

        $('#playerListItem-' + index + ' .btn-play').show();
        $('#playerListItem-' + index + ' .btn-pause').hide();
        $('#fullPlayerListItem-' + index + ' .btn-play').show();
        $('#fullPlayerListItem-' + index + ' .btn-pause').hide();
        break;
      case 'load':
        playerBar.style.display = 'none';
        playerLoading.style.display = 'none';

        break;
      case 'play':
        playerBar.style.display = 'none';
        playerPauseBtn.style.display = 'block';
        fullPlayerPauseBtn.style.display = 'block';

        $('#playerListItem-' + index + ' .btn-play').hide();
        $('#playerListItem-' + index + ' .btn-pause').show();
        $('#fullPlayerListItem-' + index + ' .btn-play').hide();
        $('#fullPlayerListItem-' + index + ' .btn-pause').show();
        break;
      case 'stop':
        playerBar.style.display = 'block';
        break;
      default:
        if (self.sound.state() === 'loaded') {
          playerPlayBtn.style.display = 'none';
          playerPauseBtn.style.display = 'block';
          fullPlayerPlayBtn.style.display = 'none';
          fullPlayerPauseBtn.style.display = 'block';
        } else {
          playerLoading.style.display = 'block';
          playerPlayBtn.style.display = 'none';
          playerPauseBtn.style.display = 'none';

          fullPlayerLoading.style.display = 'block';
          fullPlayerPlayBtn.style.display = 'none';
          fullPlayerPauseBtn.style.display = 'none';
        }
        break;
    }
  },


  /************************************
  ************************************/


  seek: function (per) {
    // Convert the percent into a seek position.
    if (this.sound.playing()) {
      this.sound.seek(this.sound.duration() * per);
    }
  },

  /**
   * The step called within requestAnimationFrame to update the playback position.
   */
  step: function () {
    var seek = this.sound.seek() || 0;
    playerTimer.innerHTML = this.formatTime(Math.round(seek));
    playerProgress.style.width = (((seek / this.sound.duration()) * 100) || 0) + '%';
    playerProgressLine.style.width = (((seek / this.sound.duration()) * 100) || 0) + '%';
    playerProgressPiont.style.left = 'calc(' + (((seek / this.sound.duration()) * 100) || 0) + '% - 6px)';;
    if (this.sound.playing() && playerProgressPiont.dataset.down == 'false') {
      requestAnimationFrame(this.step.bind(this));
    }
  }


};

export default Player;



