const { Howl, Howler } = require('howler');
import { stateChange } from './utils';

export default class Player {
  constructor() {
    //Get old current item
    this.sound = null;
    this.current_item = null;
    this.current_index = 0;

    this.state = {
      playing_state: null,
      playing_item: null,
      playing_type: null,
    };
    this.dragStartIndex = null;

    //Get old playlist
    // localStorage.removeItem('mp3quran_playlist_2');
    // localStorage.removeItem('mp3quran_player_2');
    const playlist = JSON.parse(localStorage.getItem("mp3quran_playlist_2") || "[]");
    this.playerData = JSON.parse(localStorage.getItem("mp3quran_player_2") || "{}");
    this.setPlaylist(playlist);



    if (this.playerData.current_index != undefined && this.playlist.length > 0) {
      this.setCurrentItem(this.playerData.current_index);
      this.current_index = this.playerData.current_index;
    }
    if (this.playerData.volume != undefined) {
      this.volume(parseFloat(this.playerData.volume));
    } else {
      this.volume(0.7);
    }
    this.stateChanged();
  }

  /************************************
  * Playlist Controles
  ************************************/
  setPlaylist(playlist) {
    this.playlist = playlist;
    this.updatePlaylist();
  }

  addItemToPlaylist(item) {
    let index = this.getItemIndex(item);
    if (index === -1) {
      this.playlist.push(item);
      this.updatePlaylist();
    }
  }

  removeItemFromPlaylist(item) {
    let index = this.getItemIndex(item)
    this.playlist.splice(index, 1);
    this.updatePlaylist();
    if (index == this.current_index) {
      this.skip('next');
    }

  }

  swapItemsPlaylist(startIndex, EndIndex) {
    if (startIndex > EndIndex) {
      this.playlist.splice(EndIndex, 0, this.playlist[startIndex]);
      this.playlist.splice(startIndex + 1, 1);
    } else {
      this.playlist.splice(EndIndex + 1, 0, this.playlist[startIndex]);
      this.playlist.splice(startIndex, 1);
    }
    this.updatePlaylist();
  }

  updatePlaylist() {
    var self = this;
    var storagePlaylist = [];
    $("#playerList").html('');

    if (this.playlist.length > 0) {
      $('.audio-player').show();
    } else {
      $('.audio-player').hide();
      if (self.sound != null) {
        self.sound.stop();
      }
    }

    this.playlist.forEach(function (item) {
      var clone = document.getElementById('playlistItem').content.cloneNode(true);
      var fullclone = document.getElementById('fullPlaylistItem').content.cloneNode(true);

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

      document.getElementById('playerList').appendChild(clone);
      document.getElementById('fullPlayerList').appendChild(fullclone);

      //update storage playlist
      const storageItem = Object.assign({}, item);
      delete storageItem.howl
      storagePlaylist.push(storageItem);
    });
    localStorage.setItem('mp3quran_playlist_2', JSON.stringify(storagePlaylist));
    self.stateChanged();
  }

  setCurrentItem(index) {
    var self = this;
    if (typeof self.playlist[index] == 'undefined') {
      index = 0;
    }
    self.current_item = self.playlist[index];
    self.state.playing_item = self.current_item.id;
    self.state.playing_type = self.current_item.type;
    self.stateChanged();
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
        preload: true, 
        onplay: function () {
          requestAnimationFrame(self.step.bind(self));
          self.state.playing_state = 'playing';
          self.stateChanged();
        },
        onplayerror: function () {
        },
        onloaderror: function () {
        },
        onload: function () {
          $("#playerDuration").html(self.formatTime(Math.round(self.sound.duration())));
          $("#playerTimer").html(self.formatTime(0));
        },
        onend: function () {
          self.skip('next');
        },
        onpause: function () {
          self.state.playing_state = 'paused';
          self.stateChanged();
        },
        onstop: function () {
          self.stateChanged();
        },
        onseek: function () {
          requestAnimationFrame(self.step.bind(self));
        }
      });
    }
    // self.sound.load();

    $("#reciterName").html(self.current_item.reciter);
    $("#soraName").html(self.current_item.name);

    $("#fplyReader").html(self.current_item.reciter);
    $("#fplySora").html(self.current_item.name);
  }
  setCurrentIndex(index) {
    if (typeof index === 'number') {
      this.current_index = index;
      this.playerData.current_index = index;
      localStorage.setItem('mp3quran_player_2', JSON.stringify(this.playerData));
    }
  }

  addAndPlayItem(item) {
    this.state.playing_state = 'loading';
    this.addItemToPlaylist(item);
    this.setCurrentItem(this.getItemIndex(item));
    this.play();
  }
  loadPalylist(items, id, name) {
    this.setPlaylist([]);
    this.state.playing_state = 'loading';
    for (let index = 0; index < items.length; index++) {
      this.addItemToPlaylist(items[index]);
    }
    $("#playlistId").val(id);
    $("#playlistName").val(name);
    this.setCurrentItem(this.getItemIndex(items[0]));
    this.play();
  }
  addItem(item) {
    this.addItemToPlaylist(item);
    if (this.playlist.length == 1) {
      this.setCurrentItem(this.getItemIndex(item));
    }
  }

  stateChanged() {
    stateChange({
      index: this.current_index,
      playing_state: this.state.playing_state,
      playing_item: this.state.playing_item,
      playing_type: this.state.playing_type
    });
  }

  togglePlaylist() {
    $("#playerPlaylist").toggleClass('opened');
  }
  toggleFullPlayer() {
    $("#fullPlayer").toggleClass("opened");
  }

  /************************************
   * Player Controles
   ************************************/
  play() {
    this.sound.play();
  }

  pause() {
    this.sound.pause();
  }

  skip(direction) {
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
  }

  skipTo(index) {
    var self = this;
    // Stop the current track.
    if (self.playlist[self.current_index].howl) {
      self.playlist[self.current_index].howl.stop();
    }

    // Reset playerProgress.
    $(".quran-slider.seek .qs-progress").css("width", "0%");
    $(".player-progress-line").css("width", "0%");
    $(".quran-slider.seek .qs-point").css("left", "calc(0% - 6px)");

    // Play the new track.
    this.state.playing_state = 'loading';
    this.setCurrentItem(index);
    self.play(index);
  }

  /************************************
  * volume Controles
  ************************************/
  volume(val) {
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
    $(".quran-slider.volume .qs-progress").css("height", (val * 100) + 'px');
    $(".quran-slider.volume .qs-point").css("bottom", 'calc(' + (val * 100) + 'px - 6px)');

    // var barWidth = (val * 90) / 100;
    // $("#playerBarFull").css("width", (barWidth * 100) + '%');
    // $("#playerSliderBtn").css("left", (window.innerWidth * barWidth + window.innerWidth * 0.05 - 25) + 'px');
  }

  toggleVolume() {
    $("#playerVolume").toggleClass('show');
  }

  /************************************
  * Helpers Functions
  ************************************/
  formatTime(secs) {
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  getItemIndex(item) {
    var result = this.playlist.filter(obj => {
      return obj.id === item.id
    })
    return this.playlist.indexOf(result[0]);
  }


  /************************************
  ************************************/


  seek(per) {
    // Convert the percent into a seek position.
    // if (this.sound.playing()) {
    this.sound.seek(this.sound.duration() * per);
    // }
  }

  forward(sec) {
    var seek = this.sound.seek() || 0;
    seek = Math.min(seek + sec, this.sound.duration() - 1)
    this.sound.seek(seek);
  }

  backward(sec) {
    var seek = this.sound.seek() || 0;
    seek = Math.max(seek - sec, 0)
    this.sound.seek(seek);
  }

  /**
   * The step called within requestAnimationFrame to update the playback position.
   */
  step() {
    if ($(".quran-slider.seek").hasClass("qs-active")) {
    } else {
      var seek = this.sound.seek() || 0;
      $("#playerTimer").html(this.formatTime(Math.round(seek)));
      $(".quran-slider.seek .qs-progress").css("width", (((seek / this.sound.duration()) * 100) || 0) + '%');
      $(".quran-slider.seek .qs-point").css("left", 'calc(' + (((seek / this.sound.duration()) * 100) || 0) + '% - 6px)');
      $(".player-progress-line").css("width", (((seek / this.sound.duration()) * 100) || 0) + '%');

      if (this.sound.playing() && $(".quran-slider.seek .qs-point").data('down', 'false')) {
        requestAnimationFrame(this.step.bind(this));
      }
    }

  }

}



