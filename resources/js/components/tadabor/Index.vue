<template>
  <div class="main tadabor-index">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{ trans("text.tadabor") }}</h1>
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
              <div class="form-group">
                <multiselect
                  v-model="sora"
                  selected-label
                  select-label
                  deselect-label
                  :options="allsoar"
                  :placeholder="trans('text.sora')"
                  label="name"
                  track-by="id"
                  :multiple="false"
                >
                  <span slot="noResult">{{ trans("text.no-item-found") }}</span>
                </multiselect>
              </div>
            </div>
            <div class="tadabor-list">
              <div class="row">
                <div class="col-md-24">
                  <tadabor-item
                    v-for="(item, index) in items.data"
                    :key="index"
                    :item="item"
                    :islink="true"
                  ></tadabor-item>
                </div>
              </div>
            </div>
            <div class="tadabor-pagination">
              <nav aria-label="Page navigation example">
              <paginate
                :page-count="items.last_page"
                :click-handler="paginate"
                :prev-text="'<'"
                :next-text="'>'"
                :container-class="'pagination'"
                :page-link-class="'page-link'"
                :break-view-class="'d-none'"
                :prev-link-class="'page-link'"
                :next-link-class="'page-link'"
                :page-class="'page-item'"
                :prev-class="'page-item'"
                :next-class="'page-item'"
              >
              </paginate>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    allsoar() {
      let allsoar = this.soar;
      if (allsoar[0] && allsoar[0].id != "all") {
        allsoar.unshift({ id: "all", name: this.trans("text.all") });
      }
      return allsoar;
    },
    ...mapState({
      style_version: (state) => state.settings.style_version,
      soar: (state) => state.list.soar,
      items: (state) => state.tadabor.items,
      initial: (state) => state.initial,
    }),
  },
  data() {
    return {
      url: this.ajax_prefix + "/tadabor",
      pageNum: 1,
      sora: {},
    };
  },

  methods: {
    paginate(pageNum) {
      this.pageNum = pageNum;
      this.setUrl();
      this.$store.dispatch("tadabor/setData", this);
    },
    setUrl() {
      let url = this.ajax_prefix + "/tadabor?";
      if (this.sora.id) {
        url += "s=" + this.sora.id + "&";
      }
      if (this.pageNum > 1) {
        url += "page=" + this.pageNum + "&";
      }
      this.url = url.slice(0, -1);
    },
  },

  mounted() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("tadabor/setData", this);
    // this.$store.dispatch("list/setSoar", "/ajax/soar/list");
  },

  destroyed() {
    this.$store.dispatch("tadabor/unsetData");
  },
  watch: {
    sora: function (val) {
      this.pageNum = 1;
      this.setUrl();
      this.$store.dispatch("tadabor/setData", this);
    },
  },
};
</script>
