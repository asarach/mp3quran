<div class="audio-player">
  <div class="desktop-player">
    <div class="container d-flex">
      <div class="ply-controls">
        <div class="ply-btn btn-previous">
          <span class="uni-icon icon-skip_previous" id="playerPrevBtn"></span>
        </div>
        <div class="ply-btn btn-play-pause">
          <div id="playerLoading" style="color: #fff;" class="la-line-scale la-sm hiden-ply-btn">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span id="playerPauseBtn" style="color: #fff;" class="uni-icon icon-pause hiden-ply-btn"></span>
          <span id="playerPlayBtn" class="uni-icon icon-play_arrow1 shown-ply-btn" style="color: #fff;"></span>
        </div>
        <div class="ply-btn btn-next">
          <span class="uni-icon icon-skip_next" id="playerNextBtn"></span>
        </div>
        <div class="ply-btn btn-backward">
          <span class="uni-icon icon-backward" id="playerBackwardBtn"></span>
        </div>
        <div class="ply-btn btn-forward">
          <span class="uni-icon icon-forward" id="playerForwardBtn"></span>
        </div>
      </div>
      <div class="ply-body">
        <div id="playerLoading"></div>
        <div class="ply-timer" id="playerTimer"></div>
        <div class="qs-track quran-slider seek" data-control='progress'>
          <div class="qs-progress"></div>
          <div class="qs-point"></div>
        </div>
        <div class="ply-duration" id="playerDuration"></div>
      </div>

      <div class="ply-options">
        <div class="ply-btn btn-volume " id="playerVolumeBtn">
          <span class="uni-icon icon-volume_off" style="display: none;"></span> {{-- 0 --}}
          <span class="uni-icon icon-volume_mute" style="display: none;"></span> {{-- 15 --}}
          <span class="uni-icon icon-volume_down"></span> {{-- 65 --}}
          <span class="uni-icon icon-volume_up" style="display: none;"></span>
          <div id="playerVolume" class="volume-selector">
            <div class="qs-track quran-slider volume qs-vertical" data-control='volume'>
              <div class="qs-progress"></div>
              <div class="qs-point"></div>
            </div>
          </div>
        </div>


        <div class="btn ply-btn btn-list" id="playerPlaylistBtn">
          <span class="uni-icon icon-playlist_play"></span>
        </div>
        <div id="playerBar"></div>

      </div>

      <div class="ply-item-info">
        <a id="reciterName" href="#" rel="alternate" hreflang=""></a>
        <div class="ply-sora" id="soraName"></div>
      </div>

      <div class="ply-fullplayer" id="fullPlayer">
        <div id="fullPlayerToggle"></div>
        <div class="sply-progress player-progress-line"></div>
        <div class="fply-header">
          <div class="fply-reader">
            <span id="fplyReader"></span>
          </div>
          <div class="fply-sora" id="fplySora"></div>
        </div>
        <div class="fply-body">
          <div id="playerLoading"></div>
          <div id="fullPlayerLoading"></div>
          <div class="fply-timer" id="playerTimer"></div>
          <div class="fply-progress" id="playerProgressBar">
            <div id="playerProgress"></div>
            <div id="playerProgressPiont" data-down="false"></div>
          </div>
          <div class="fply-duration" id="playerDuration"></div>
          <div id="playerBar"></div>
        </div>
        <div class="fply-controls">
          <div class="ply-btn btn-previous">
            <span class="uni-icon icon-skip_previous" id="fullPlayerPrevBtn" style="color: #fff"></span>
          </div>
          <div class="ply-btn btn-play-pause">
            <span id="fullPlayerPauseBtn" class="uni-icon icon-pause" style=" display: none;"></span>
            <span id="fullPlayerPlayBtn" class="uni-icon icon-play_arrow1" style=" display: block; color: #fff"></span>
          </div>
          <div class="ply-btn btn-next">
            <span class="uni-icon icon-skip_next" id="fullPlayerNextBtn" style="color: #fff"></span>
          </div>
        </div>
        <div class="fply-footer">
          <ul id="fullPlayerList" class="list-unstyled"></ul>
          <template id="fullPlaylistItem">
            <li>
              <div class="playlist-avatar drag-handle">
                <div style="color: #fff; display: none;" class="la-line-scale btn-loading la-sm">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="ply-btn btn-pause" style="display: none;">
                  <span class="uni-icon icon-pause"></span>
                </div>
                <div class="ply-btn btn-play">
                  <span class="uni-icon icon-play_arrow1"></span>
                </div>
              </div>
              <div class="read-info">
                <div class="read-sora"></div>
                <div class="read-reciter"></div>
              </div>
            </li>
          </template>
        </div>
        <div class="fply-close" id="closeFullplayer">
          <span class="uni-icon icon-keyboard_arrow_down" style="color: #fff"></span>
        </div>
      </div>

      <div class="ply-playlist" id="playerPlaylist">
        <div class="ply-list-header">

          <div class="ply-btn btn-next" id="closePlaylist">
            <span class="uni-icon icon-minimize " style="font-size: 10px;"></span>
          </div>
          <div class="ply-btn btn-next" id="clearPlaylist">
            <span class="uni-icon icon-clear"></span>
          </div>
          @auth()
          <div class="ply-btn btn-save" id="savePlaylist">
            {{trans('text.save')}}
          </div>
          <div class="playlist-name">
            <input type="hidden" id="playlistId" name="playlistid">
            <input type="text" id="playlistName" name="playlistname">
          </div>
          @endauth
        </div>
        <ul id="playerList" class="list-unstyled asplst"></ul>

        <template id="playlistItem">
          <li draggable="true">
            <div class="drag-handle bg"></div>
            <div class="playlist-avatar drag-handle">
              <div style="color: #fff;" class="la-line-scale btn-loading la-sm hiden-ply-btn">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="ply-btn btn-pause hiden-ply-btn">
                <span class="uni-icon icon-pause"></span>
              </div>
              <div class="ply-btn btn-play shown-ply-btn">
                <span class="uni-icon icon-play_arrow1"></span>
              </div>
            </div>
            <div class="read-info">
              <div class="read-num"></div>
              <div class="read-sora"></div>
              <div class="read-reciter">
                <span class="reciter-name"></span>
                <span class="rewaya-name"></span>
              </div>
            </div>
            <div class="read-options">
              <div class="ply-btn btn-delete-plitem">
                <span class="uni-icon icon-clear"></span>
              </div>
            </div>
          </li>
        </template>
      </div>
    </div>


  </div>
</div>