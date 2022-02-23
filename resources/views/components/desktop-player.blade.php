<div class="audio-player-2">
  <div class="desktop-player-2">
    <div class="container d-flex">
      <div class="ply-controls">
        <div class="ply-btn btn-previous">
          <span class="uni-icon icon-skip_previous" id="playerPrevBtn"></span>
        </div>
        <div class="ply-btn btn-play-pause">
          <span id="playerPauseBtn" style="color: #fff; display: none;" class="uni-icon icon-pause"></span>
          <span id="playerPlayBtn" class="uni-icon icon-play_arrow1" style="color: #fff; display: block;"></span>
        </div>
        <div class="ply-btn btn-next">
          <span class="uni-icon icon-skip_next" id="playerNextBtn"></span>
        </div>
      </div>
      <div class="ply-body">
        <div id="playerLoading"></div>
        <div class="ply-timer" id="playerTimer"></div>
        <div class="ply-progress" id="playerProgressBar">
          <div id="playerProgress"></div>
          <div id="playerProgressPiont" data-down="false"></div>
        </div>
        <div class="ply-duration" id="playerDuration"></div>
      </div>

      <div class="ply-options">
        <div class="ply-btn btn-volume" id="playerVolumeBtn">
          <span class="uni-icon icon-volume_off" style="display: none;"></span> {{-- 0 --}}
          <span class="uni-icon icon-volume_mute" style="display: none;"></span> {{-- 15 --}}
          <span class="uni-icon icon-volume_down" ></span> {{-- 65 --}}
          <span class="uni-icon icon-volume_up"style="display: none;"></span>
          <div id="playerVolume" class="volume-selector">

            <div class="ply-volume" id="playerVolumeBar">
              <div id="playerVolumeInner"></div>
              <div id="playerVolumePiont" data-down="false"></div>
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
</div>