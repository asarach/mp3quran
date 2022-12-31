<template>
  <div class="card-logo-video">
    <div class="video">
      <h3 class="mb-3">{{ trans("text.logo-video-title-1") }}</h3>
      <div class="dplayer" :data-url="video.url"></div>
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
          <label class="custom-control-label" for="customCheckTR">{{
            trans("text.top-right")
          }}</label>
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
          <label class="custom-control-label" for="customCheckTC">{{
            trans("text.top-center")
          }}</label>
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
          <label class="custom-control-label" for="customCheckTL">
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
          <label class="custom-control-label" for="customCheckBR">{{
            trans("text.bottom-right")
          }}</label>
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
          <label class="custom-control-label" for="customCheckBC">{{
            trans("text.bottom-center")
          }}</label>
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
          <label class="custom-control-label" for="customCheckBL">{{
            trans("text.bottom-left")
          }}</label>
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
        @click="generateVideo()"
      >
        {{ trans("text.logo-video-generate-video") }}
      </button>
      <a
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
</template>
<script>
export default {
  props: ["video"],
  data() {
    return {
      video_generated_url: "",
      errors: {},
      progress: 0,
      place: "tr",
      image: "",
    };
  },

  methods: {
    generateVideo() {
      let self = this;

      let data = {
        place: this.place,
        video: this.video.url,
        image: this.image,
      };
      axios
        .post(
          this.ajax_prefix + "/video/download/" + this.video.id + "/generate",
          data
        )
        .then(function (response) {
          self.progressing = response.data.progressing;
          self.video_generated_url = response.data.generated_url;

          if (response.data.progressing) {
            var myInterval = setInterval(() => {
              if (self.progress == 100) {
                self.progressing = false;
                clearInterval(myInterval);
              } else {
                axios
                  .get(
                    self.ajax_prefix +
                      "/video/download/" +
                      self.video.id +
                      "/progress"
                  )
                  .then(function (response) {
                    self.progress = response.data.progress;
                  })
                  .catch(function (error) {});
              }
            }, 1000);
          }
        })
        .catch(function (error) {
          self.progressing = error.response.data.errors;
          self.progressing = false;
        });
    },
    imageUploaded(image) {
      this.image = image;
    },
  },
};
</script>
