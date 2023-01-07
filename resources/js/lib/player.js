const { Howl, Howler } = require('howler');
import { savePlaylist } from './playlist';
import quranSlider from './quran-slider';

export default class Player {
  constructor() {
    self = this;
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
    this.getLocalData();

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


    $("#playerPlayBtn").on("click", function (e) {
      e.preventDefault();
      self.play();
    });

    $("#fullPlayerPlayBtn").on("click", function (e) {
      e.preventDefault();
      self.play();
    });

    $("#playerPauseBtn").on("click", function (e) {
      e.preventDefault();
      self.pause();
    });

    $("#fullPlayerPauseBtn").on("click", function (e) {
      e.preventDefault();
      self.pause();
    });
    $("#playerPrevBtn").on("click", function (e) {
      e.preventDefault();
      self.skip('prev');
    });
    $("#fullPlayerPrevBtn").on("click", function (e) {
      e.preventDefault();
      self.skip('prev');
    });
    $("#playerNextBtn").on("click", function (e) {
      e.preventDefault();
      self.skip('next');
    });
    $("#fullPlayerNextBtn").on("click", function (e) {
      e.preventDefault();
      self.skip('next');
    });
    $("#playerBackwardBtn").on("click", function (e) {
      e.preventDefault();
      self.backward(5);
    });
    $("#playerForwardBtn").on("click", function (e) {
      e.preventDefault();
      self.forward(5);
    });
    $("#playerPlaylistBtn").on("click", function (e) {
      e.preventDefault();
      self.togglePlaylist();
    });
    $("#closePlaylist").on("click", function (e) {
      e.preventDefault();
      self.togglePlaylist();
    });
    $("#fullPlayerToggle").on("click", function (e) {
      e.preventDefault();
      self.toggleFullPlayer();
    });
    $("#closeFullplayer").on("click", function (e) {
      e.preventDefault();
      self.toggleFullPlayer();
    });
    $("#playerVolumeBtn").on("click", function (e) {
      self.toggleVolume();
    });
    $("#playerVolumeBtnMbl").on("click", function (e) {
      self.toggleVolumeMbl();
    });
    $("#clearPlaylist").on("click", function (e) {
      e.preventDefault();
      self.setPlaylist([]);
      $("#playlistId").val("");
      $("#playlistName").val("");
    });
    if ($('#savePlaylist').length) {
      $("#savePlaylist").on("click", function (e) {
        e.preventDefault();
        savePlaylist();
      });
    }
    $(".quran-slider").each(function (e) {
      let control = $(this).data("control");
      new quranSlider(this, control);
    });
  }

  /************************************
  * Playlist Controles
  ************************************/
  getLocalData() {
    const playlist = JSON.parse(localStorage.getItem("mp3quran_playlist_2") || "[]");
    for (let index = 0; index < playlist.length; index++) {
      const element = playlist[index];
      delete element.howl;
      if (!Object.hasOwn(element, 'id') || !Object.hasOwn(element, 'file') || !Object.hasOwn(element, 'name') || !Object.hasOwn(element, 'type')) {
        playlist.splice(index, 1);
      }
    }
    this.playerData = JSON.parse(localStorage.getItem("mp3quran_player_2") || "{}");
    this.setPlaylist(playlist);
  }
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
    $("#fullPlayerList").html('');
    console.log('updatePlaylist');

    if (this.playlist.length > 0) {
      $('.audio-player').show();
    } else {
      $('.audio-player').hide();
      if (self.sound != null) {
        self.sound.stop();
      }
    }

    for (let index = 0; index < this.playlist.length; index++) {
      const item = this.playlist[index];
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
      clone.querySelectorAll("li")[0].id = "playerListItem-" + index;
      clone.querySelectorAll("li")[0].classList.add('spib-' + item.type + '-' + item.id);
      fullclone.querySelectorAll("li")[0].id = "fullPlayerListItem-" + index;
      fullclone.querySelectorAll("li")[0].classList.add('spib-' + item.type + '-' + item.id);

      //add event and append
      clone.querySelectorAll(".btn-play")[0].onclick = function () {
        player.skipTo(index);
      };
      fullclone.querySelectorAll(".btn-play")[0].onclick = function () {
        player.skipTo(index);
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
        self.dragStartIndex = index;
      });
      clone.querySelectorAll(".drag-handle")[0].closest('li').addEventListener('dragover', function (event) {
        event.preventDefault();
      });
      clone.querySelectorAll(".drag-handle")[0].closest('li').addEventListener('drop', function () {
        let dragEndIndex = index;
        player.swapItemsPlaylist(self.dragStartIndex, dragEndIndex);
      });

      document.getElementById('playerList').appendChild(clone);
      document.getElementById('fullPlayerList').appendChild(fullclone);

      //update storage playlist
      const storageItem = Object.assign({}, item);
      delete storageItem.howl
      storagePlaylist.push(storageItem);
    }


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
      if (self.sound == null || self.sound.src !== self.current_item.file) {
        if (self.sound != null) {
          self.sound.unload();
        }
      }
      self.sound = data.howl = new Howl({
        src: [self.current_item.file],
        html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
        preload: true,
        pool: 1,
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

    if (self.current_item.type == "tsora") {
      $("#bookmarkBtn").addClass('show');
    } else {
      $("#bookmarkBtn").removeClass('show');
    }

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
    this.stateChange({
      index: this.current_index,
      playing_state: this.state.playing_state,
      playing_item: this.state.playing_item,
      playing_type: this.state.playing_type
    });
  }
  stateChange(state) {
    $('.spib-loading').hide();
    $('.spib-pause').hide();
    $('.spib-play').show();
    $('.btn-bookmark-tafsir').removeClass('show');

    switch (state.playing_state) {
      case "loading":
        $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-loading').show();
        $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-pause').hide();
        $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-play').hide();

        $('.spib-controls .spib-loading').show();
        $('.spib-controls .spib-pause').hide();
        $('.spib-controls .spib-play').hide();
        break;
      case "playing":
        $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-loading').hide();
        $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-pause').show();
        $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-play').hide();
        $(".spib-" + state.playing_type + '-' + state.playing_item + ' .btn-bookmark-tafsir').addClass('show');

        $('.spib-controls .spib-loading').hide();
        $('.spib-controls .spib-pause').show();
        $('.spib-controls .spib-play').hide();
        $('.ply-body .btn-bookmark-tafsir').addClass('show');

        break;
      default:
        $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-loading').hide();
        $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-pause').hide();
        $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-play').show();

        $('.spib-controls .spib-loading').hide();
        $('.spib-controls .spib-pause').hide();
        $('.spib-controls .spib-play').show();
        break;
    }
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
    if (!this.sound.playing()) {
      this.sound.play();
    }
  }

  pause() {
    if (this.sound.playing()) {
      this.sound.pause();
    }

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

    $(".sply-progress-mobile").css("width", '0%');


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
      $('#playerVolumeBtnMbl .uni-icon').hide();
      $('#playerVolumeBtnMbl .icon-volume_off').show();
    } else if (val > 0 && val <= 0.15) {
      $('#playerVolumeBtn .uni-icon').hide();
      $('#playerVolumeBtn .icon-volume_mute').show();
      $('#playerVolumeBtnMbl .uni-icon').hide();
      $('#playerVolumeBtnMbl .icon-volume_mute').show();
    } else if (val > 0.15 && val <= 0.65) {
      $('#playerVolumeBtn .uni-icon').hide();
      $('#playerVolumeBtn .icon-volume_down').show();
      $('#playerVolumeBtnMbl .uni-icon').hide();
      $('#playerVolumeBtnMbl .icon-volume_down').show();
    } else {
      $('#playerVolumeBtn .uni-icon').hide();
      $('#playerVolumeBtn .icon-volume_up').show();
      $('#playerVolumeBtnMbl .uni-icon').hide();
      $('#playerVolumeBtnMbl .icon-volume_up').show();
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
    if (Howler.volume() > 0) {
      Howler.volume(0);
      $('#playerVolumeBtn .uni-icon').hide();
      $('#playerVolumeBtn .icon-volume_off').show();
      $(".quran-slider.volume .qs-progress").css("height",  '0px');
      $(".quran-slider.volume .qs-point").css("bottom", 'calc(0px - 6px)');
    } else {
      this.volume(this.playerData.volume)
    }
    $("#playerVolume").toggleClass('show');
  }
  toggleVolumeMbl() {
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
      
      $(".sply-progress-mobile").css("width", (((seek / this.sound.duration()) * 100) || 0) + '%');

      if (this.sound.playing() && $(".quran-slider.seek .qs-point").data('down', 'false')) {
        requestAnimationFrame(this.step.bind(this));
      }
    }

  }

}



