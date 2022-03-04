<div class="ply-fullplayer" :class="{ opened: show_fullplayer }">
  <div class="fply-header">
    <div class="fply-reader">
      <span>{{ source.reciter }}</span>
    </div>
    <div class="fply-sora">{{ source.name }}</div>
  </div>
  <div class="fply-body">
    <div class="fply-timer">{{ displayedTime }}</div>
    <div class="fply-progress">
      <vue-slider :lazy="true" v-model="percentComplete" tooltip="none" />
    </div>
    <div class="fply-duration">{{ displayedDuration }}</div>
  </div>
  <div class="fply-controls">
    <div class="ply-btn btn-previous" :class="{ disabled: currentPosition() < 1 }">
      <span class="uni-icon icon-skip_previous" @click="prevItem" style="color: #fff"></span>
    </div>
    <div class="ply-btn btn-play-pause" v-on:click.prevent="toggeleItem" :title="playing ? 'Pause' : 'Play'">
      <span class="uni-icon icon-pause" v-if="playing"></span>
      <span class="uni-icon icon-play_arrow1" v-else style="color: #fff"></span>
    </div>
    <div class="ply-btn btn-next" :class="{ disabled: currentPosition() >= playlist.length - 1 }">
      <span class="uni-icon icon-skip_next" @click="nextItem" style="color: #fff"></span>
    </div>
  </div>
  <div class="fply-footer">
    <ul class="list-unstyled">
      <li v-for="(audio, index) in playlist" :key="audio.id" :class="{ playing: playing && currentPosition() == index }" @click="loadAndPlayItem(audio)">
        <div class="read-info">
          <div class="read-sora">{{ audio.name }}</div>
          <div class="read-reciter">{{ audio.reciter }}</div>
        </div>
        <div class="read-options">
          <div class="ply-btn read-like-btn" v-if="favoriteIncludes(audio.id, audio.type)" @click="
              removeItemFavorite({ item: audio.id, type: audio.type })
            ">
            <span class="uni-icon icon-favorite" style="color: #f5b44b"></span>
          </div>
          <div class="ply-btn read-like-btn" v-else @click="addItemFavorite({ item: audio.id, type: audio.type })">
            <span class="uni-icon icon-favorite_outline" style="color: #fff"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="fply-close" @click="closeFullplayer">
    <span class="uni-icon icon-keyboard_arrow_down" style="color: #fff"></span>
  </div>
</div>