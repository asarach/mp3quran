const { Howl, Howler } = require('howler');
var Player = function () {

  //Get old playlist
  // localStorage.removeItem('mp3quran_playlist_2');
  // localStorage.removeItem('mp3quran_player_2');
  const playlist = JSON.parse(localStorage.getItem("mp3quran_playlist_2") || "[]");
  this.playerData = JSON.parse(localStorage.getItem("mp3quran_player_2") || "{}");
  this.setPlaylist(playlist);

  //Get old current item
  this.sound = null;
  this.current_item = null;
  this.current_index = 0;

  this.playing_state = null;
  this.playing_item = null;
  this.playing_type = null;
  this.dragStartIndex = null;

  if (this.playerData.current_index != undefined && this.playlist.length > 0) {
    this.setCurrentItem(this.playerData.current_index);
    this.current_index = this.playerData.current_index;
  }
  if (this.playerData.volume != undefined) {
    this.volume(parseFloat(this.playerData.volume));
  } else {
    this.volume(0.7);
  }
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

  removeItemFromPlaylist: function (item) {
    let index = this.getItemIndex(item)
    this.playlist.splice(index, 1);
    this.updatePlaylist();
  },
  swapItemsPlaylist: function (startIndex, EndIndex) {
    if (startIndex > EndIndex) {
      this.playlist.splice(EndIndex, 0, this.playlist[startIndex]);
      this.playlist.splice(startIndex + 1, 1);
    } else {
      this.playlist.splice(EndIndex + 1, 0, this.playlist[startIndex]);
      this.playlist.splice(startIndex, 1);
    }
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
      clone.querySelectorAll(".btn-delete-plitem")[0].onclick = function () {
        player.removeItemFromPlaylist(item);
      };
      clone.querySelectorAll(".drag-handle")[0].closest('li').addEventListener('dragstart', function () {
        self.dragStartIndex = self.playlist.indexOf(item);
      });
      clone.querySelectorAll(".drag-handle")[0].closest('li').addEventListener('dragover', function (event) {
        event.preventDefault();
      });
      clone.querySelectorAll(".drag-handle")[0].closest('li').addEventListener('drop', function () {
        let dragEndIndex = self.playlist.indexOf(item);
        player.swapItemsPlaylist(self.dragStartIndex, dragEndIndex);
      });

      playerList.appendChild(clone);
      fullPlayerList.appendChild(fullclone);

      //update storage playlist
      const storageItem = Object.assign({}, item);
      delete storageItem.howl
      storagePlaylist.push(storageItem);
    });
    localStorage.setItem('mp3quran_playlist_2', JSON.stringify(storagePlaylist));
  },

  setCurrentItem: function (index) {
    var self = this;
    self.current_item = self.playlist[index];
    self.playing_item = self.current_item.id;
    self.playing_type = self.current_item.type;
    self.setState();
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
      // }
      self.sound = data.howl = new Howl({
        src: [self.current_item.file],
        html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
        onplay: function () {
          requestAnimationFrame(self.step.bind(self));
          self.playing_state = 'playing';
          self.setState();
        },
        onplayerror: function () {
        },
        onloaderror: function () {
        },
        onload: function () {
          playerDuration.innerHTML = self.formatTime(Math.round(self.sound.duration()));
          playerTimer.innerHTML = self.formatTime(0);
        },
        onend: function () {
          self.skip('next');
        },
        onpause: function () {
          self.playing_state = 'paused';
          self.setState();
        },
        onstop: function () {
          self.setState();
        },
        onseek: function () {
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
      localStorage.setItem('mp3quran_player_2', JSON.stringify(this.playerData));
    }
  },

  addAndPlayItem: function (item) {
    this.playing_state = 'loading';
    this.addItemToPlaylist(item);
    this.setCurrentItem(this.getItemIndex(item));
    this.play();
  },
  loadPalylist: function (items, id, name) {
    this.setPlaylist([]);
    this.playing_state = 'loading';
    for (let index = 0; index < items.length; index++) {
      this.addItemToPlaylist(items[index]);
    }
    playlistId.value = id;
    playlistName.value = name;
    this.setCurrentItem(this.getItemIndex(items[0]));
    this.play();
  },
  addItem: function (item) {
    this.addItemToPlaylist(item);
    if (this.playlist.length == 1) {
      this.setCurrentItem(this.getItemIndex(item));
    }
  },
  setState: function () {
    let self = this;
    const changeStateEvent = new CustomEvent("changeState", {
      'detail': {
        playing_state: self.playing_state,
        playing_item: self.playing_item,
        playing_type: self.playing_type
      }
    });
    window.dispatchEvent(changeStateEvent);

    this.setStyles();
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
  },

  pause: function () {
    this.sound.pause();
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
    this.playing_state = 'loading';
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

    this.playerData.volume = val;
    localStorage.setItem('mp3quran_player_2', JSON.stringify(this.playerData));
    playerVolumeInner.style.height = (val * 100) + 'px';
    playerVolumePiont.style.bottom = 'calc(' + (val * 100) + 'px - 6px)';

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

  setStyles: function () {
    const index = this.current_index;
    $('#playerList .btn-play').show();
    $('#playerList .btn-pause').hide();
    $('#playerList .btn-loading').hide();
    $('#fullPlayerList .btn-play').show();
    $('#fullPlayerList .btn-pause').hide();
    $('#fullPlayerList .btn-loading').hide();

    if (this.playing_state == 'loading') {
      playerLoading.style.display = 'block';
      playerPlayBtn.style.display = 'none';
      playerPauseBtn.style.display = 'none';

      fullPlayerLoading.style.display = 'block';
      fullPlayerPlayBtn.style.display = 'none';
      fullPlayerPauseBtn.style.display = 'none';

      $('#playerListItem-' + index + ' .btn-loading').show();
      $('#playerListItem-' + index + ' .btn-play').hide();
      $('#playerListItem-' + index + ' .btn-pause').hide();

      $('#fullPlayerListItem-' + index + ' .btn-loading').show();
      $('#fullPlayerListItem-' + index + ' .btn-play').hide();
      $('#fullPlayerListItem-' + index + ' .btn-pause').hide();
    } else if (this.playing_state == 'playing') {
      playerLoading.style.display = 'none';
      playerPlayBtn.style.display = 'none';
      playerPauseBtn.style.display = 'block';

      fullPlayerLoading.style.display = 'none';
      fullPlayerPlayBtn.style.display = 'none';
      fullPlayerPauseBtn.style.display = 'block';

      $('#playerListItem-' + index + ' .btn-loading').hide();
      $('#playerListItem-' + index + ' .btn-play').hide();
      $('#playerListItem-' + index + ' .btn-pause').show();

      $('#fullPlayerListItem-' + index + ' .btn-loading').hide();
      $('#fullPlayerListItem-' + index + ' .btn-play').hide();
      $('#fullPlayerListItem-' + index + ' .btn-pause').show();
    } else {
      playerLoading.style.display = 'none';
      playerPlayBtn.style.display = 'block';
      playerPauseBtn.style.display = 'none';

      fullPlayerLoading.style.display = 'none';
      fullPlayerPlayBtn.style.display = 'block';
      fullPlayerPauseBtn.style.display = 'none';

      $('#playerListItem-' + index + ' .btn-loading').hide();
      $('#playerListItem-' + index + ' .btn-play').show();
      $('#playerListItem-' + index + ' .btn-pause').hide();

      $('#fullPlayerListItem-' + index + ' .btn-loading').hide();
      $('#fullPlayerListItem-' + index + ' .btn-play').show();
      $('#fullPlayerListItem-' + index + ' .btn-pause').hide();
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

  forward: function (sec) {
    var seek = this.sound.seek() || 0;
    seek = Math.min(seek + sec, this.sound.duration() - 1)
    this.sound.seek(seek);
  },

  backward: function (sec) {
    var seek = this.sound.seek() || 0;
    seek = Math.max(seek - sec, 0)
    this.sound.seek(seek);
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



