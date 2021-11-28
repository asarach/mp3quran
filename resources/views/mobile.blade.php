
<div class="mobile-ui">
    <div class="top-bar" :class="{ 'navbar--hidden': !showNavbar }">
      <div class="container">
        <div class="d-flex">
          <div class="tb-logo">
            <router-link-asa
            href="{{ route('index') }}"
              class="main-logo"
            >
              <img src="{{ asset('img/logo2.png')}}" class="user-image" alt />
            </router-link-asa>
          </div>
          <div class="tb-search">
            <search-form></search-form>
          </div>
          <div class="tb-languages">
            <a href="#" @click.prevent="toggelLanguages()">
              <span class="uni-icon icon-earth"></span>
            </a>
          </div>

          <div v-if="false" class="tb-back-button" @click="goBack()">
            <span class="uni-icon icon-arrow_back"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
        {{ $slot }}
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
                <span class="uni-icon icon-facebook" style="color: #4B69B0"></span>
              </a>
            </li>
            <li class="list-inline-item">
              <a :href="settings.twitter" class="twitter-icon" title="Twitter">
                <span class="uni-icon icon-twitter" style="color: #37B1E1"></span>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.instagram"
                class="instagram-icon"
                title="Instagram"
              >
                <span class="uni-icon icon-instagram" style="color: #C83466"></span>
              </a>
            </li>
            <li class="list-inline-item">
              <a :href="settings.youtube" class="youtube-icon" title="Youtube">
                <span class="uni-icon icon-youtube" style="color: #E83F3A"></span>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                :href="settings.soundcloud"
                class="soundcloud-icon"
                title="Soundcloud"
              >
                <span class="uni-icon icon-soundcloud" style="color: #FF5E00"></span>
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
              <span class="uni-icon icon-clear"></span>
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
        <span class="uni-icon icon-home"></span>
        {{ trans("text.home") }}
      </router-link-asa>
      <router-link-asa
        :to="'/' + current_language + '/radios'"
        class="menu-link"
      >
        <span class="uni-icon icon-radio"></span>
        {{ trans("text.radios") }}
      </router-link-asa>
      <router-link-asa
        :to="'/' + current_language + '/mushaf'"
        class="menu-link"
      >
        <span class="uni-icon icon-menu_book"></span>
        {{ trans("text.quran") }}
      </router-link-asa>
      <a href="#" class="menu-link" @click.prevent="toggelExpended">
        <span class="uni-icon icon-more-horizontal"></span>
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