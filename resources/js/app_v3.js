import Favorites from './lib/favorites';
import Player from './lib/player';
import { initiateLib } from './main';

var Turbolinks = require("turbolinks")
Turbolinks.start();

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
window.ajax_prefix = window.App.urlBase + '/' + window.App.current_language + '/ajax';
window.prefix = window.App.urlBase + '/' + window.App.current_language;
window.player = new Player();
window.favorites = new Favorites();


$(document).ready(function () {
  initiateLib();
  favorites.favoritesChanged();
});

document.addEventListener("turbolinks:before-visit", function (event) {
  document.getElementById("MainLoading").style.display = "flex";
});

document.addEventListener("turbolinks:render", function (event) {
  $(document).ready(function () {
    initiateLib();
  });
  window.player.stateChanged();
  favorites.favoritesChanged();
});

document.addEventListener("DOMContentLoaded", () => {
  Livewire.hook('message.processed', (message, component) => {
    initiateLib();
    window.player.stateChanged();
    favorites.favoritesChanged();
  })
});