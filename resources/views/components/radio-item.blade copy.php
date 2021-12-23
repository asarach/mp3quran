<div class="card-radio">
    <div class="ply-btn" @click.prevent="
        getItemAndPlay(
          ajax_prefix + '/radio/item?id=' + $radio['id'],
          '100002-' + $radio['id']
        )
      ">
        <scale-loader v-if="isLoading({ type: 'radio', id: '100002-' + $radio['id'] })" color="#0D3A4D" height="10px" width="2px"></scale-loader>
        <span v-else-if="isPlaying({ type: 'radio', id: '100002-' + $radio['id'] })" class="uni-icon icon-pause" style="color: #f5b44b"></span>
        <span v-else class="uni-icon icon-play_arrow" style="color: #f5b44b"></span>
    </div>
    <div class="radio-info" @click.prevent="
        getItemAndPlay(
          ajax_prefix + '/radio/item?id=' + $radio['id'],
          '100002-' + $radio['id']
        )
      ">
        <div class="radio-name">
            {{ $radio['name'] }}<span>- {{ $radio['rewaya_name'] }}</span>
        </div>
    </div>
    <div class="radio-btn more-btn">
        <span class="uni-icon icon-more-horizontal"></span>
    </div>
    <div class="radio-options">
        <div class="radio-btn share-btn" v-tooltip="trans('text.share')" @click="
          shareItem($radio['share_title'], $radio['share_url'], $radio['share_description'])
        ">
            <span class="uni-icon icon-share"></span>
        </div>
        <div class="radio-btn link-btn" v-tooltip="trans('text.copy-link')" v-clipboard:copy="$radio['url']" v-clipboard:error="clipboardErrorHandler" v-clipboard:success="clipboardSuccessHandler">
            <span class="uni-icon icon-link"></span>
        </div>
        <div class="radio-btn ike-btn" v-if="radiosIncludes" v-tooltip="trans('text.remove-from-favorite')" @click="removeRadioFavorite($radio['id'])">
            <span class="uni-icon icon-favorite" style="color: #f5b44b"></span>
        </div>
        <div class="radio-btn deslike-btn" v-tooltip="trans('text.add-to-favorite')" v-else @click="addRadioFavorite($radio['id'])">
            <span class="uni-icon icon-favorite_outline"></span>
        </div>
    </div>
</div>