<div class="card-radio">
    <div class="ply-btn" @click.prevent="
        getItemAndPlay(
          ajax_prefix + '/radio/item?id={{ $radio['id'] }}',
          '100002-{{ $radio['id'] }}'
        )
      ">
        <scale-loader v-if="isLoading({ type: 'radio', id: '100002-{{ $radio['id'] }}'  })" color="#0D3A4D" height="10px" width="2px"></scale-loader>
        <span v-else-if="isPlaying({ type: 'radio', id: '100002-{{ $radio['id'] }}' })" class="uni-icon icon-pause" style="color: #f5b44b"></span>
        <span v-else class="uni-icon icon-play_arrow" style="color: #f5b44b"></span>
        {{ $radio['id'] }}
    </div>
    <div class="radio-info" @click.prevent="
    getItemAndPlay(
      ajax_prefix + '/radio/item?id={{ $radio['id'] }}',
      '100002-{{ $radio['id'] }}'
    )
  ">
        <div class="radio-name">
            {{ $radio['name'] }}<span>- {{ $radio['rewaya_name'] }}</span>
        </div>
    </div>
    <div class="radio-btn more-btn">
        <span class="uni-icon icon-more-horizontal"></span>
    </div>
</div>