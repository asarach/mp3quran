<template>
  <div class="main reciters-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{trans('text.reciters')}}</h1>
            <div class="header-options"></div>
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
                  name="sora"
                  v-model="search_query"
                  :placeholder="trans('text.search-for-reciter')"
                />
              </div>
              <div class="filter-letters">
                <ul class="list-inline">
                  <li class="list-inline-item" @click="setLetter('')">{{trans('text.all')}}</li>
                  <li
                    class="list-inline-item"
                    v-for="(letter, key) in letters"
                    :key="key"
                    :class="{disable : isDisable(letter)}"
                    @click="setLetter(letter)"
                  >{{letter}}</li>
                </ul>
              </div>
            </div>
            <div class="reciters-list">
              <card-reciter
                v-for="reciter  in reciters_filtered"
                :key="reciter.id"
                :reciter="reciter"
              ></card-reciter>
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
    reciters_filtered() {
      let filtered = this.reciters;
      let q = this.search_query;
      let l = this.search_letter;
      if (l) {
        filtered = [];
        let l1 = l.replace("أ", "ا");
        let l2 = l.replace("أ", "إ");
        let array = [l, l1, l2];

        for (let index = 0; index < array.length; index++) {
          let filtered1 = this.reciters.filter(m => {
            return m.name.substring(0, 1) == array[index];
          });
          filtered = new Set([...filtered, ...filtered1]);
        }
      } else if (q) {
        filtered = [];
        let q1 = q.replace("ا", "أ");
        let q2 = q.replace("ا", "إ");
        let array = [q1, q2, q];

        for (let index = 0; index < array.length; index++) {
          let filtered1 = this.reciters.filter(m => {
            return m.name.indexOf(array[index]) > -1;
          });
          filtered = new Set([...filtered, ...filtered1]);
        }
      }

      return filtered;
    },
    ...mapState({
      style_version: state => state.settings.style_version,
      reciters: state => state.reciter.reciters,
      letters: state => state.reciter.letters,
      initial: state => state.initial
    })
  },

  data() {
    return {
      url: this.ajax_prefix + "/reciters",
      search_query: "",
      search_letter: ""
    };
  },

  methods: {
    setLetter(letter) {
      this.search_letter = letter;
    },
    isDisable(l) {
      let result = false;
      let l1 = l.replace("أ", "ا");
      let l2 = l.replace("أ", "إ");
      let array = [l1, l2, l];

      for (let index = 0; index < array.length; index++) {
        let filtered1 = this.reciters.filter(m => {
          return m.name.substring(0, 1) == array[index];
        });
        if (filtered1.length > 0) {
          result = true;
        }
      }

      return !result;
    },
    loadMore() {
      this.$store.dispatch("reciter/moreReciters", this.url + "more");
    }
  },
  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("reciter/setData", this);
  },
  destroyed() {
    this.$store.dispatch("reciter/unsetData");
  }
};
</script>
