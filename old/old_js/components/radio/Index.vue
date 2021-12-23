<template>
  <div class="main home-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{trans('text.radios')}}</h1>
            <div class="header-options" v-if="false">
              <router-link
               rel="alternate" :hreflang="$store.state.current_language"
                :to="'/' +  current_language +'/quran-download'"
                type="button"
                class="btn btn-primary"
              >
                <download-icon fillColor="#fff" />
                {{trans('text.quran-download')}}
              </router-link>
              <router-link
               rel="alternate" :hreflang="$store.state.current_language"
                :to="'/' +  current_language +'/mushaf'"
                type="button"
                class="btn btn-primary"
              >
                <mushaf-icon fillColor="#fff" />
                {{trans('text.quran')}}
              </router-link>
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
            <div class="show-filters">
              <div class="filter-name">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  v-model="search_query"
                  :placeholder="trans('text.search-for-name')"
                />
              </div>
              <div class="filter-rewaya mr-auto">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="triggerIdrewaya"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >{{selected_rewaya}}</button>
                  <div class="dropdown-menu" aria-labelledby="triggerIdrewaya">
                    <a
                      class="dropdown-item"
                      href="#"
                      v-for="(rewaya,index) in rewayat"
                      :key="rewaya.id"
                      @click="selectRewaya(index)"
                    >{{rewaya.name}}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="radios-list">
              <ul class="list-unstyled">
                <li v-for="radio in filtered_radios" :key="radio.id">
                  <card-radio
                    :radio="radio"
                    :share="{title : radio.share_title, url : radio.share_url, description : radio.share_description}"
                  ></card-radio>
                </li>
              </ul>
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
    selected_rewaya() {
      if (this.rewayat[this.rewaya]) {
        return this.rewayat[this.rewaya].name;
      } else {
        return this.trans("text.select-rewaya");
      }
    },
    filtered_radios() {
      let filtered = this.radios;
      let q = this.search_query;
      if (q) {
        filtered = [];
        let q1 = q.replace("ا", "أ");
        let q2 = q.replace("ا", "إ");
        let array = [q1, q2, q];

        for (let index = 0; index < array.length; index++) {
          let filtered1 = this.radios.filter(m => {
            return m.name.indexOf(array[index]) > -1;
          });
          filtered = new Set([...filtered, ...filtered1]);
        }
      }
      return filtered;
    },
    ...mapState({
      style_version: state => state.settings.style_version,
      radios: state => state.radio.radios,
      current_language: state => state.current_language,
      rewayat: state => state.radio.rewayat,
      initial: state => state.initial
    })
  },

  data() {
    return {
      url: this.ajax_prefix + "/radios",
      rewaya: 0,
      search_query: ""
    };
  },

  methods: {
    loadMore() {
      this.$store.dispatch("radio/moreRadios", this.url + "more");
    },
    selectRewaya(index) {
      let url = this.url + "?r=" + this.rewayat[index].id;
      this.rewaya = index;
      this.$store.dispatch("radio/setData", { vm: this, url: url });
    }
  },
  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("radio/setData", this);
  },
  destroyed() {
    this.$store.dispatch("radio/unsetData");
  }
};
</script>
