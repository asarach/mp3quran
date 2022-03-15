<div class="audio-player">
  <div class="mobile-player">
    <div class="sply-progress" id="playerProgressLine"></div>
    <div class="ply-controls">
      <div class="ply-btn btn-previous">
        <span class="uni-icon icon-skip_previous" id="playerPrevBtn"></span>
      </div>
      <div class="ply-btn btn-play-pause">
        <div id="playerLoading" style="color: #0e3a4d; display: none;" class="la-line-scale la-sm">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span id="playerPauseBtn" style=" display: none;" class="uni-icon icon-pause"></span>
        <span id="playerPlayBtn" class="uni-icon icon-play_arrow1" style=" display: block;"></span>
      </div>
      <div class="ply-btn btn-next">
        <span class="uni-icon icon-skip_next" id="playerNextBtn"></span>
      </div>
    </div>
    <div class="ply-item-info" id="fullPlayerToggle">
      <div id="reciterName" class="ply-reader"></div>
      <div id="soraName" class="ply-sora"></div>
    </div>
    <div class="ply-options">
      <div class="ply-btn btn-volume" id="playerVolumeBtn">
        <span class="uni-icon icon-volume_off" style="display: none;"></span>
        <span class="uni-icon icon-volume_mute" style="display: none;"></span>
        <span class="uni-icon icon-volume_down"></span>
        <span class="uni-icon icon-volume_up" style="display: none;"></span>
        <div id="playerVolume" class="volume-selector">
          <div class="ply-volume" id="playerVolumeBar">
            <div id="playerVolumeInner"></div>
            <div id="playerVolumePiont" data-down="false"></div>
          </div>
        </div>
      </div>
      <div class="ply-btn btn-list" id="playerPlaylistBtn">
        <span class="uni-icon icon-playlist_play"></span>
      </div>
    </div>
    <div class="ply-fullplayer" id="fullPlayer">
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
          <div id="fullPlayerLoading" style="color: #fff; display: none;" class="la-line-scale la-sm">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
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
          <span class="uni-icon icon-clear"></span>
        </div>
        <div class="ply-btn btn-next" id="clearPlaylist">
          <span class="uni-icon icon-delete_sweep"></span>
        </div>
      </div>
      <ul id="playerList" class="list-unstyled"></ul>

      <template id="playlistItem">
        <li>
          <div class="drag-handle bg"></div>
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
            <div class="read-num"></div>
            <div class="read-sora"></div>
            <div class="read-reciter">
              <span class="reciter-name"></span>
              <span class="rewaya-name"></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  </div>
</div>