<div class="sora-item" :class="{ showoptions: showoptions, show: sora.show }" v-click-outside="closeOptions">
    <div class="ply-btn" v-if="isLoading">
        <div class="la-line-scale la-sm">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="ply-btn" v-else-if="isPlaying" @click="pauseItem()">
        <span class="uni-icon icon-pause" style="color: #fff"></span>
    </div>
    <div v-else class="ply-btn" @click="
    getItemAndPlay(
      ajax_prefix + '/soar/item?r=' + read_id + '&s=' + sora.sora_id,
      sora.id
    )
  ">
        <span class="uni-icon icon-play_arrow1" style="color: #fff"></span>
    </div>

    <div class="sora-info">
        <div class="sora-num">{{ sora.sora_num }}</div>
        <div v-if="sora.reciter_name" class="sora-num">
            {{ sora.reciter_name }}
        </div>
        <div class="sora-name">
            <a :href="prefix + sora.read_slug + '/' + sora.sora_id" rel="alternate" :hreflang="$store.state.current_language" class="card-reciter-name">
                {{ sora.sora_name }}
            </a>
        </div>
    </div>
    <div class="sora-btn more-btn" @click="showoptions = !showoptions">
        <span class="uni-icon icon-more-horizontal"></span>
    </div>
    <div class="sora-options">
        <div class="sora-btn share-btn" v-tooltip="trans('text.share')" @click="
      shareItem(sora.share_title, sora.share_url, sora.share_description)
    ">
            <span class="uni-icon icon-share"></span>
        </div>
        <div class="sora-btn link-btn" v-tooltip="trans('text.copy-link')" v-clipboard:copy="sora.sora_audio" v-clipboard:error="clipboardErrorHandler" v-clipboard:success="clipboardSuccessHandler">
            <span class="uni-icon icon-link"></span>
        </div>
        <div v-if="downloading" class="sora-btn downloading" v-tooltip="trans('text.downloading')">
            <img :src="'/img/icons/downloading.svg'" width="60" alt="" />
        </div>
        <a v-else class="sora-btn download-btn" v-tooltip="trans('text.download')" :href="sora.sora_audio | downloadUrl"><span class="uni-icon icon-cloud_download"></span></a>

        <div class="sora-btn playlist-add" v-tooltip="trans('text.add-to-playlist')" @click="
      addItem(
        ajax_prefix + '/soar/item?r=' + read_id + '&s=' + sora.sora_id
      )
    ">
            <span class="uni-icon icon-playlist_add"></span>
        </div>
        <div class="sora-btn ike-btn" v-if="inFavorites" v-tooltip="trans('text.remove-from-favorite')" @click="removeSoraFavorite(sora.id)">
            <span class="uni-icon icon-favorite" style="color: #f2a01b"></span>
        </div>
        <div class="sora-btn deslike-btn" v-tooltip="trans('text.add-to-favorite')" v-else @click="addSoraFavorite(sora.id)">
            <span class="uni-icon icon-favorite_outline"></span>
        </div>
        <div class="sora-btn report-btn" v-if="sora.sora_report != '-1'" v-tooltip="trans('text.report-sora')" @click="
      reportSora({
        read: sora.read_slug,
        sora: sora.id,
        prefix: ajax_prefix,
      })
    ">
            <span class="uni-icon icon-warning"></span>
        </div>
    </div>
</div>