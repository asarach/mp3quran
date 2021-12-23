<template>
  <div class="main video-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="header-right">
              <h1>{{ trans("text.download-video-with-logo") }}</h1>
              <div class="header-options"></div>
            </div>
          </div>
          <div class="col-lg-19">
            <ads-header></ads-header>
          </div>
        </div>
      </div>
    </div>
    <div class="show-body">
      <div class="container">
        <div class="row">
          <div v-if="style_version == 'r'" class="col-md-5">
            <desktop-sidebar></desktop-sidebar>
          </div>
          <div class="col-lg-19" id="sticky-container">
            <div class="card-logo-video">
              <div class="video">
                <h3 class="mb-3">{{ trans("text.logo-video-title-1") }}</h3>
                <my-dplayer :url="video_url"></my-dplayer>
              </div>
              <div class="image">
                <h3>{{ trans("text.logo-video-select-logo") }}</h3>
                <upload-image
                  @uploaded="imageUploaded"
                  :image="false"
                  type="video-logo"
                  nbr="322"
                ></upload-image>
                <small class="form-text text-danger" v-if="errors.image">
                  {{ trans("text.logo-video-error-image") }}
                </small>
              </div>
              <h3 class="mb-0 mt-2">
                {{ trans("text.logo-video-select-place") }}
              </h3>
              <div class="select-place">
                <div class="top-right">
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      v-model="place"
                      value="tr"
                      class="custom-control-input"
                      id="customCheckTR"
                    />
                    <label
                      class="custom-control-label"
                      for="customCheckTR"
                    >{{ trans("text.top-right") }}</label>
                  </div>
                </div>
                <div class="top-center">
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      v-model="place"
                      value="tc"
                      class="custom-control-input"
                      id="customCheckTC"
                    />
                    <label
                      class="custom-control-label"
                      for="customCheckTC"
                    >{{ trans("text.top-center") }}</label>
                  </div>
                </div>
                <div class="top-left">
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      v-model="place"
                      value="tl"
                      class="custom-control-input"
                      id="customCheckTL"
                    />
                    <label
                      class="custom-control-label"
                      for="customCheckTL"
                    >
                    {{ trans("text.top-left") }}
                    </label>
                  </div>
                </div>
                <div class="bottom-right">
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      v-model="place"
                      value="br"
                      class="custom-control-input"
                      id="customCheckBR"
                    />
                    <label
                      class="custom-control-label"
                      for="customCheckBR"
                    >{{ trans("text.bottom-right") }}</label>
                  </div>
                </div>
                <div class="bottom-center">
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      v-model="place"
                      value="bc"
                      class="custom-control-input"
                      id="customCheckBC"
                    />
                    <label
                      class="custom-control-label"
                      for="customCheckBC"
                    >{{ trans("text.bottom-center") }}</label>
                  </div>
                </div>
                <div class="bottom-left">
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      v-model="place"
                      value="bl"
                      class="custom-control-input"
                      id="customCheckBL"
                    />
                    <label
                      class="custom-control-label"
                      for="customCheckBL"
                    >{{ trans("text.bottom-left") }}</label>
                  </div>
                </div>
              </div>
              <small class="form-text text-danger" v-if="errors.place">
                  {{ trans("text.logo-video-error-place") }}
                </small>
              
              <div class="video-state">
                <button
                  type="button"
                  v-if="progress == 0"
                  class="btn btn-primary"
                  @click="generateVideo(this)"
                >
                  {{ trans("text.logo-video-generate-video") }}
                </button>
                <a
                  type="button"
                  v-else-if="progress == 100"
                  target="_blank"
                  :href="video_generated_url + '?download=1'"
                  class="btn btn-success"
                >
                  {{ trans("text.logo-video-download-video") }}
                </a>
                <div v-else class="video-progress">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      :style="'width: ' + progress + '%'"
                      :ariaValuenow="progress"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {{ progress }}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      style_version: (state) => state.settings.style_version,
      video_generated_url: (state) => state.video.video_generated_url,
      video: (state) => state.video.video,
      current_language: (state) => state.current_language,
      errors: (state) => state.video.errors,
      progress: (state) => state.video.progress,
      initial: (state) => state.initial,
    }),
  },

  data() {
    return {
      url: this.ajax_prefix + "/video/download/" + this.$route.params.id,
      video_url: "",
      place: "tr",
      image: "",
    };
  },

  methods: {
    generateVideo() {
      var data ={
        url_base: '/' + this.current_language + this.url ,
        place: this.place ,
        video: this.video.url ,
        image: this.image ,
      }
      this.$store.dispatch("video/generateVideo", data);
    },
    imageUploaded(image) {
      this.image = image;
    },
  },
  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("video/setItem", this);
    this.video_url = this.video.url;
  },
  destroyed() {
    this.$store.dispatch("video/unsetItem");
  },
};
</script>
