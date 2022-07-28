import ReportSora from './lib/report-sora';
import QuickAccess from './lib/quick-access';
import Share from './lib/share';
import Favorites from './lib/favorites';
import Clipboard from './lib/clipboard';
import quranSlider from './lib/quran-slider';
import Player from './lib/player';
import { getItemAndPlay, addItem } from './lib/utils';
import { savePlaylist } from './lib/playlist';

/************************* */
/***       EVENTS        ***/
/************************* */



/************************* */
/***        SETUP        ***/
/************************* */

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
window.ajax_prefix = window.App.urlBase + '/' + window.App.current_language + '/ajax';
window.player = new Player();
window.favorites = new Favorites();

/************************* */
/***       BUTTONS       ***/
/************************* */

function initiateLib() {
  $(".quick-access a").on("click", function (e) {
    e.preventDefault();
    window.quickAccess = new QuickAccess();
    quickAccess.showModal();
  });

  $(".report-btn").on("click", function (e) {
    e.preventDefault();
    const params = {
      read: $(this).data("read"),
      sora: $(this).data("sora"),
      prefix: $(this).data("prefix"),
    }
    window.reportSora = new ReportSora(params);
    reportSora.showModal();
  });
  $("#submitReport").on("click", function (e) {
    e.preventDefault();
    reportSora.submitReport();
  });
  $(".ply-btn.btn-pause").on("click", function (e) {
    player.pause();
  });
  $(".ply-btn.btn-play").on("click", function (e) {
    const url = $(this).data("url");
    const item = $(this).data("item");
    const type = $(this).data("type");
    const time = $(this).data("time");

    getItemAndPlay(url, item, type, time);
  });
  $(".share-btn").on("click", function (e) {
    const params = {
      url: $(this).data("url"),
      description: $(this).data("description"),
      title: $(this).data("title"),
    }
    window.share = new Share(params);
    share.showModal();
  });

  $(".share-on").on("click", function (e) {
    const network = $(this).data("network");
    share.shareOn(network);
  });

  $(".direct-share").on("click", function (e) {
    const network = $(this).data("network");
    const params = {
      url: $(this).closest('.show-share').data("url"),
      description: $(this).parents('.show-share').data("description"),
      title: $(this).parent().data("title"),
    }
    window.share = new Share(params);
    share.shareOn(network);
  });

  $(".clipboard-btn").on("click", function (e) {
    const text = $(this).data("text")
    window.clipboard = new Clipboard(text);
    clipboard.copy();
  });

  $(".sora-btn.playlist-add").on("click", function (e) {
    const url = $(this).data("url");
    addItem(url);
  });
  $('.like-btn').on("click", function (e) {
    const sora_id = $(this).data("id")
    const group = $(this).data("group")
    favorites.addItem(sora_id, group);
  });
  $('.deslike-btn').on("click", function (e) {
    const sora_id = $(this).data("id")
    const group = $(this).data("group")
    favorites.removeItem(sora_id, group);
  });
  $('.more-btn').on("click", function (e) {
    $('.more-btn').not(this).next('.item-options').removeClass('show');
    $(this).next('.item-options').toggleClass('show');
  });
}
$(document).ready(function () {
  initiateLib();
  favorites.favoritesChanged();
});


document.addEventListener("turbolinks:render", function (event) {
  $(document).ready(function () {
    initiateLib();
  });
  player.stateChanged();
  favorites.favoritesChanged();
});

$("#playerPlayBtn").on("click", function (e) {
  e.preventDefault();
  player.play();
});

$("#fullPlayerPlayBtn").on("click", function (e) {
  e.preventDefault();
  player.play();
});

$("#playerPauseBtn").on("click", function (e) {
  e.preventDefault();
  player.pause();
});

$("#fullPlayerPauseBtn").on("click", function (e) {
  e.preventDefault();
  player.pause();
});
$("#playerPrevBtn").on("click", function (e) {
  e.preventDefault();
  player.skip('prev');
});
$("#fullPlayerPrevBtn").on("click", function (e) {
  e.preventDefault();
  player.skip('prev');
});
$("#playerNextBtn").on("click", function (e) {
  e.preventDefault();
  player.skip('next');
});
$("#fullPlayerNextBtn").on("click", function (e) {
  e.preventDefault();
  player.skip('next');
});
$("#playerBackwardBtn").on("click", function (e) {
  e.preventDefault();
  player.backward(5);
});
$("#playerForwardBtn").on("click", function (e) {
  e.preventDefault();
  player.forward(5);
});
$("#playerPlaylistBtn").on("click", function (e) {
  e.preventDefault();
  player.togglePlaylist();
});
$("#closePlaylist").on("click", function (e) {
  e.preventDefault();
  player.togglePlaylist();
});
$("#fullPlayerToggle").on("click", function (e) {
  e.preventDefault();
  player.toggleFullPlayer();
});
$("#closeFullplayer").on("click", function (e) {
  e.preventDefault();
  player.toggleFullPlayer();
});
$("#playerVolumeBtn").on("click", function (e) {
  e.preventDefault();
  player.toggleVolume();
});
$("#playerVolume").on("click", function (e) {
  e.preventDefault();
  player.toggleVolume();
});
$("#clearPlaylist").on("click", function (e) {
  e.preventDefault();
  player.setPlaylist([]);
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






