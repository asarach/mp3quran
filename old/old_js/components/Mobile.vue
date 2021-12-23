<template>
  <div class="mobile-ui">
    <div class="top-bar" :class="{ 'navbar--hidden': !showNavbar }">
      <div class="container">
        <div class="d-flex">
          <div class="tb-logo">
            <router-link-asa
              :to="'/' + $store.state.current_language + '/'"
              class="main-logo"
            >
              <img :src="'/img/logo2.png'" class="user-image" alt />
            </router-link-asa>
          </div>
          <div class="tb-search">
            <search-form></search-form>
          </div>
          <div class="tb-languages">
            <a href="#" @click.prevent="toggelLanguages()">
              <earth-icon fillColor="#0D3A4D" />
            </a>
          </div>

          <div v-if="false" class="tb-back-button" @click="goBack()">
            <arrow-back-icon fillColor="#0D3A4D" />
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>

    <footer>
      <div class="container">
        <div class="social-links">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a
                :href="settings.acebook"
                class="facebook-icon"
                title="Facebook"
              >
                <facebook-icon fillColor="#4B69B0" />
              </a>
            </li>
            <li class="list-inline-item">
              <a :href="settings.twitter" class="twitter-icon" title="Twitter">
                <twitter-icon fillColor="#37B1E1" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.instagram"
                class="instagram-icon"
                title="Instagram"
              >
                <instagram-icon fillColor="#C83466" />
              </a>
            </li>
            <li class="list-inline-item">
              <a :href="settings.youtube" class="youtube-icon" title="Youtube">
                <youtube-icon fillColor="#E83F3A" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.soundcloud"
                class="soundcloud-icon"
                title="Soundcloud"
              >
                <soundcloud-icon fillColor="#FF5E00" />
              </a>
            </li>
          </ul>
        </div>
        <div class="helpful-links">
          <ul class="list-inline">
            <li class="list-inline-item">
              <router-link-asa
                :to="'/' + current_language + '/'"
                class="helpful-link"
                >{{ trans("text.home") }}</router-link-asa
              >
            </li>
            <li class="list-inline-item">
              <router-link-asa
                :to="'/' + current_language + '/about'"
                class="helpful-link"
                >{{ trans("text.about") }}</router-link-asa
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
      </div>
    </footer>
    <audio-player type="mobile" class="audio-player"></audio-player>
    <div class="expend-menu" :class="{ expended: is_expended }">
      <div class="row">
        <template v-for="(menu, index) in main_menu">
          <a
            v-if="menu.slug.includes('http')"
            :key="index"
            :href="menu.slug"
            target="_blank"
            @click="toggelExpended"
            class="menu-link"
          >
            <component v-bind:is="menu.icon"></component>
            {{ trans("text." + menu.title) }}
          </a>

          <router-link-asa
            v-else
            :key="index"
            :to="'/' + current_language + menu.slug"
            @click.native="toggelExpended"
            class="menu-link"
          >
            <component v-bind:is="menu.icon"></component>
            {{ trans("text." + menu.title) }}
          </router-link-asa>
        </template>
        <div class="tb-languages">
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
    <nav class="main-menu">
      <router-link-asa :to="'/' + current_language + '/'" class="menu-link">
        <home-icon fillColor="#0D3A4D" />
        {{ trans("text.home") }}
      </router-link-asa>
      <router-link-asa
        :to="'/' + current_language + '/radios'"
        class="menu-link"
      >
        <radio-icon fillColor="#0D3A4D" />
        {{ trans("text.radios") }}
      </router-link-asa>
      <router-link-asa
        :to="'/' + current_language + '/mushaf'"
        class="menu-link"
      >
        <mushaf-icon fillColor="#0D3A4D" />
        {{ trans("text.quran") }}
      </router-link-asa>
      <a href="#" class="menu-link" @click.prevent="toggelExpended">
        <more-horiz-icon fillColor="#0D3A4D" />
        {{ trans("text.more") }}
      </a>
    </nav>
    <share></share>
    <notifications
      position="bottom left"
      group="app"
      classes="mobile-notifications"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      showNavbar: true,
      is_expended: false,
      show_languages: false,
      lastScrollPosition: 0,
    };
  },
  computed: {
    ...mapState({
      settings: (state) => state.settings,
      languages: (state) => state.languages,
      current_language: (state) => state.current_language,
       main_menu: state => state.main_menu,
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
      this.is_expended = false;
    },
    toggelExpended() {
      this.is_expended = !this.is_expended;
    },
    goBack() {
      this.$router.go(-1);
    },
    closeLanguages() {
      this.show_languages = false;
    },
  },
};
</script>
