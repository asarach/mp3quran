<template>
  <div class="desktop-ui">
    <div class="top-bar">
      <div class="container d-flex">
        <div class="tb-logo">
          <router-link-asa :to="'/' + current_language + '/'" class="main-logo">
            <img :src="'/img/logo2.png'" class="user-image" alt />
          </router-link-asa>
        </div>
        <div class="tb-search">
          <search-form></search-form>
        </div>
        <div class="tb-radio">
          <button
            type="button"
            class="btn btn-success"
            @click="toggelMainRadio()"
          >
            <radio-icon fillColor="#fff" />
            {{ trans("text.live-radio") }}
          </button>
          {{ trans("text.listen-to-radio") }}
        </div>
        <div v-if="true" class="header-newsletters mr-auto">
          <newsletter-subscribe></newsletter-subscribe>
        </div>
        <div v-else class="tb-social">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a
                :href="settings.facebook"
                class="facebook-icon"
                target="_blank"
                title="Facebook"
              >
                <facebook-icon fillColor="#4B69B0" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.twitter"
                class="twitter-icon"
                target="_blank"
                title="Twitter"
              >
                <twitter-icon fillColor="#37B1E1" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.instagram"
                class="instagram-icon"
                target="_blank"
                title="Instagram"
              >
                <instagram-icon fillColor="#C83466" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.youtube"
                class="youtube-icon"
                target="_blank"
                title="Youtube"
              >
                <youtube-icon fillColor="#E83F3A" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.soundcloud"
                class="soundcloud-icon"
                target="_blank"
                title="Soundcloud"
              >
                <soundcloud-icon fillColor="#FF5E00" />
              </a>
            </li>
          </ul>
        </div>
        <div class="tb-languages">
          <div class="tbl-btn" @click="toggelLanguages()">
            <earth-icon fillColor="#b5bbbf"></earth-icon>
            English
          </div>
          <div class="tbl-dropdown" :class="{ opened: show_languages }">
            <div class="close-lan" @click="closeLanguages">
              <close-icon fillColor="#0D3A4D" />
            </div>
            <div class="row">
              <div
                class="col-8"
                v-for="(language, key) in languages"
                :key="key"
              >
                <a :href="'/' + key" class="tbl-item">{{ language.native }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading" class="loading-page">
      <circle-spin></circle-spin>
    </div>
    <router-view></router-view>

    <footer>
      <div class="container d-flex">
        
        <div class="helpful-links">
          <ul class="list-inline">
            <li class="list-inline-item">
              <router-link-asa
                :to="'/' + current_language + '/about'"
                class="helpful-link"
                >{{ trans("text.about") }}</router-link-asa
              >
            </li>
            <li class="list-inline-item">
              <router-link-asa
                :to="'/' + current_language + '/privacy'"
                class="helpful-link"
                >{{ trans("text.privacy") }}</router-link-asa
              >
            </li>
            <li class="list-inline-item">
              <router-link-asa
                :to="'/' + current_language + '/api'"
                class="helpful-link"
                >{{ trans("text.api") }}</router-link-asa
              >
            </li>
            <li class="list-inline-item">
              <router-link-asa
                :to="'/' + current_language + '/contact-us'"
                class="helpful-link"
                >{{ trans("text.contact") }}</router-link-asa
              >
            </li>
            <li class="list-inline-item">
              <router-link-asa
                :to="'/' + current_language + '/sitemap'"
                class="helpful-link"
                >{{ trans("text.sitemap") }}</router-link-asa
              >
            </li>
          </ul>
        </div>
        <div v-if='false' class="footer-newsletters mr-auto">
          <newsletter-subscribe></newsletter-subscribe>
        </div>
         <div v-else class="footer-social">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a
                :href="settings.facebook"
                class="facebook-icon"
                target="_blank"
                title="Facebook"
              >
                <facebook-icon fillColor="#4B69B0" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.twitter"
                class="twitter-icon"
                target="_blank"
                title="Twitter"
              >
                <twitter-icon fillColor="#37B1E1" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.instagram"
                class="instagram-icon"
                target="_blank"
                title="Instagram"
              >
                <instagram-icon fillColor="#C83466" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.youtube"
                class="youtube-icon"
                target="_blank"
                title="Youtube"
              >
                <youtube-icon fillColor="#E83F3A" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.soundcloud"
                class="soundcloud-icon"
                target="_blank"
                title="Soundcloud"
              >
                <soundcloud-icon fillColor="#FF5E00" />
              </a>
            </li>
          </ul>
        </div>
        <div v-if="false" class="row">
          <div class="col-12">
            <div class="social-links">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a
                    :href="settings.facebook"
                    class="facebook-icon"
                    target="_blank"
                    title="Facebook"
                  >
                    <facebook-icon fillColor="#4B69B0" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    :href="settings.twitter"
                    class="twitter-icon"
                    target="_blank"
                    title="Twitter"
                  >
                    <twitter-icon fillColor="#37B1E1" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    :href="settings.instagram"
                    class="instagram-icon"
                    target="_blank"
                    title="Instagram"
                  >
                    <instagram-icon fillColor="#C83466" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    :href="settings.youtube"
                    class="youtube-icon"
                    target="_blank"
                    title="Youtube"
                  >
                    <youtube-icon fillColor="#E83F3A" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    :href="settings.soundcloud"
                    class="soundcloud-icon"
                    target="_blank"
                    title="Soundcloud"
                  >
                    <soundcloud-icon fillColor="#FF5E00" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div v-if="false" class="col-12">
            <div class="footer-apps">
              <h3>{{ trans("text.our-apps") }}</h3>
              <p>{{ trans("text.our-apps-text") }}</p>

              <a
                href="https://play.google.com/store/apps/details?id=my.smartech.mp3quran"
                target="_blank"
                class="foo_app_btn"
              >
                <img
                  :src="'/img/google_play.jpg'"
                  alt="google_play"
                  class="img-fluid"
                />
              </a>
              <a
                href="https://itunes.apple.com/sa/app/mp3quran/id533029431?mt=8"
                target="_blank"
                class="foo_app_btn"
              >
                <img
                  :src="'/img/app_store.jpg'"
                  alt="app_store"
                  class="img-fluid"
                />
              </a>
              <a
                href="https://www.microsoft.com/en-us/p/mp3-quran/9nblggh5k24h"
                target="_blank"
                class="foo_app_btn"
              >
                <img
                  :src="'/img/windows.jpg'"
                  alt="windows"
                  class="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <notifications
      position="bottom left"
      group="app"
      animation-type="velocity"
      :animation="animation"
      classes="desktop-notifications"
    />
    <share></share>
    <audio-player type="desktop" class="audio-player"></audio-player>
  </div>
</template>
<script>
import { mapState } from "vuex";
const Errors = require("../errors.js");

export default {
  data() {
    return {
      errors: new Errors(),
      show_languages: false,
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2],
        },
        leave: {
          opacity: 0,
          height: 0,
        },
      },
    };
  },
  computed: {
    ...mapState({
      settings: (state) => state.settings,
      loading: (state) => state.loading,
      languages: (state) => state.languages,
      current_language: (state) => state.current_language,
      page_title: (state) => state.page_title,
    }),
  },
  metaInfo() {
    return {
      title: this.page_title,
    };
  },

  methods: {
    toggelLanguages() {
      this.show_languages = !this.show_languages;
    },
    handleAbort() {},
    toggelMainRadio() {
      var source = {
        id: "100001-100001",
        read_id: "100001",
        sora_id: "100001",
        num: "000",
        name: this.trans("text.live-radio"),
        share_title: this.trans("text.live-radio"),
        reciter: "mp3quran.net",
        url: "https://www.mp3quran.net/",
        share_url: "https://www.mp3quran.net/",
        description: this.trans("text.live-radio"),
        share_description: this.trans("text.live-radio"),
        file: this.settings.main_radio,
      };
      this.$store.dispatch("player/playItem", source);
      if (typeof window !== "undefined") {
        Event.$emit("player_play");
      }
    },
    closeLanguages() {
      this.show_languages = false;
    },
  },
};
</script>
