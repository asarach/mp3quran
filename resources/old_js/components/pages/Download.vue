<template>
  <div class="main downloads-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{ trans("text.quran-download") }}</h1>
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
              <form @submit.prevent="searchDownloads()">
                <div class="filter-search">
                  <input
                    type="text"
                    class="form-control"
                    v-model="search"
                    :placeholder="trans('text.search')"
                  />
                </div>
              </form>
              <div class="filter-category mr-auto">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="triggerIdcategory"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {{ selected_category.name }}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="triggerIdcategory"
                  >
                    <a
                      class="dropdown-item"
                      href="#"
                      v-for="category in categories"
                      :key="category.id"
                      @click="selectCategory(category)"
                      >{{ category.name }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="download-card">
              <table class="table table-striped table-sm table-responsive">
                <thead>
                  <tr>
                    <th scope="col" class="th-index">
                      #
                    </th>
                    <th scope="col" class="th-file">
                      <span class="sortable-col"
                        >{{ trans("text.file") }}
                        
                        <a
                          href="#"
                          v-if="
                            downloads_order == 'name' &&
                            downloads_dir == 'asc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'desc',
                              order: 'name',
                              url: url,
                            })
                          "
                        >
                          <menu-down-icon fillColor="#0D3A4D" />
                        </a>

                        <a
                          href="#"
                          v-else-if="
                            downloads_order == 'name' && downloads_dir == 'desc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'asc',
                              order: 'name',
                              url: url,
                            })
                          "
                        >
                          <menu-up-icon fillColor="#0D3A4D" />
                        </a>
                        <a
                          href="#"
                          v-else
                          @click="
                            orderDownloads({
                              dir: 'asc',
                              order: 'name',
                              url: url,
                            })
                          "
                        >
                          <menu-swapvertical-icon fillColor="#0D3A4D" />
                        </a>
                      </span>
                    </th>
                    <th scope="col" class="th-download">
                      {{ trans("text.download") }}
                    </th>
                    <th scope="col" class="th-added">
                      <span class="sortable-col"
                        >{{ trans("text.added") }}
                        <a
                          href="#"
                          v-if="
                            downloads_order == 'date' && downloads_dir == 'asc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'desc',
                              order: 'date',
                              url: url,
                            })
                          "
                        >
                          <menu-up-icon fillColor="#0D3A4D" />
                        </a>
                        <a
                          href="#"
                          v-else-if="
                            downloads_order == 'date' &&
                            downloads_dir == 'desc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'asc',
                              order: 'date',
                              url: url,
                            })
                          "
                        >
                          <menu-down-icon fillColor="#0D3A4D" />
                        </a>
                        <a
                          href="#"
                          v-else
                          @click="
                            orderDownloads({
                              dir: 'desc',
                              order: 'date',
                              url: url,
                            })
                          "
                        >
                          <menu-swapvertical-icon fillColor="#0D3A4D" />
                        </a>
                      </span>
                    </th>
                    <th scope="col" class="th-size">
                      <span class="sortable-col"
                        >{{ trans("text.size") }}
                        <a
                          href="#"
                          v-if="
                            downloads_order == 'sizeb' && downloads_dir == 'asc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'desc',
                              order: 'sizeb',
                              url: url,
                            })
                          "
                        >
                          <menu-up-icon fillColor="#0D3A4D" />
                        </a>
                        <a
                          href="#"
                          v-else-if="
                            downloads_order == 'sizeb' &&
                            downloads_dir == 'desc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'asc',
                              order: 'sizeb',
                              url: url,
                            })
                          "
                        >
                          <menu-down-icon fillColor="#0D3A4D" />
                        </a>
                        <a
                          href="#"
                          v-else
                          @click="
                            orderDownloads({
                              dir: 'desc',
                              order: 'sizeb',
                              url: url,
                            })
                          "
                        >
                          <menu-swapvertical-icon fillColor="#0D3A4D" />
                        </a>
                      </span>
                    </th>
                    <th scope="col" class="th-seeders">
                      <span class="sortable-col"
                        >{{ trans("text.seeders") }}
                        <a
                          href="#"
                          v-if="
                            downloads_order == 'seeders' && downloads_dir == 'asc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'desc',
                              order: 'seeders',
                              url: url,
                            })
                          "
                        >
                          <menu-up-icon fillColor="#0D3A4D" />
                        </a>
                        <a
                          href="#"
                          v-else-if="
                            downloads_order == 'seeders' &&
                            downloads_dir == 'desc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'asc',
                              order: 'seeders',
                              url: url,
                            })
                          "
                        >
                          <menu-down-icon fillColor="#0D3A4D" />
                        </a>
                        <a
                          href="#"
                          v-else
                          @click="
                            orderDownloads({
                              dir: 'desc',
                              order: 'seeders',
                              url: url,
                            })
                          "
                        >
                          <menu-swapvertical-icon fillColor="#0D3A4D" />
                        </a>
                      </span>
                    </th>
                    <th scope="col" class="th-leechers">
                      <span class="sortable-col"
                        >{{ trans("text.leechers") }}
                        <a
                          href="#"
                          v-if="
                            downloads_order == 'leechers' && downloads_dir == 'asc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'desc',
                              order: 'leechers',
                              url: url,
                            })
                          "
                        >
                          <menu-up-icon fillColor="#0D3A4D" />
                        </a>
                        <a
                          href="#"
                          v-else-if="
                            downloads_order == 'leechers' &&
                            downloads_dir == 'desc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'asc',
                              order: 'leechers',
                              url: url,
                            })
                          "
                        >
                          <menu-down-icon fillColor="#0D3A4D" />
                        </a>
                        <a
                          href="#"
                          v-else
                          @click="
                            orderDownloads({
                              dir: 'desc',
                              order: 'leechers',
                              url: url,
                            })
                          "
                        >
                          <menu-swapvertical-icon fillColor="#0D3A4D" />
                        </a>
                      </span>
                    </th>
                    <th scope="col" class="th-completed">
                      <span class="sortable-col"
                        >{{ trans("text.completed") }}
                        <a
                          href="#"
                          v-if="
                            downloads_order == 'completed' && downloads_dir == 'asc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'desc',
                              order: 'completed',
                              url: url,
                            })
                          "
                        >
                          <menu-up-icon fillColor="#0D3A4D" />
                        </a>
                        <a
                          href="#"
                          v-else-if="
                            downloads_order == 'completed' &&
                            downloads_dir == 'desc'
                          "
                          @click="
                            orderDownloads({
                              dir: 'asc',
                              order: 'completed',
                              url: url,
                            })
                          "
                        >
                          <menu-down-icon fillColor="#0D3A4D" />
                        </a>
                        <a
                          href="#"
                          v-else
                          @click="
                            orderDownloads({
                              dir: 'desc',
                              order: 'completed',
                              url: url,
                            })
                          "
                        >
                          <menu-swapvertical-icon fillColor="#0D3A4D" />
                        </a>
                      </span>

                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(download, index) in downloads" :key="index">
                    <td class="th-index">{{ index +1 }}</td>
                    <td scope="row" class="th-file">{{ download.name }}</td>
                    <td class="th-download">
                      <a :href="download.url" class="btn btn-sm btn-info">{{
                        trans("text.download")
                      }}</a>
                    </td>
                    <td class="th-added">{{ download.added }}</td>
                    <td class="th-size">{{ download.size }}</td>
                    <td class="th-seeders green">{{ download.seeders }}</td>
                    <td
                      class="th-leechers"
                      :class="{
                        red: download.leechers < 1,
                        green: download.leechers >= 2,
                        orangered: download.leechers == 1,
                      }"
                    >
                      {{ download.leechers }}
                    </td>
                    <td class="th-completed">{{ download.completed }}</td>
                  </tr>
                </tbody>
              </table>
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
      downloads: (state) => state.quran.downloads,
      downloads_order: (state) => state.quran.downloads_order,
      downloads_dir: (state) => state.quran.downloads_dir,
      initial: (state) => state.initial,
    }),
  },

  data() {
    return {
      url: this.ajax_prefix + "/quran-download",
      search: "",
      selected_category: {
        id: "",
        name: "----",
      },
      categories: [
        {
          id: "",
          name: "----",
        },
        {
          id: "13",
          name: "Complete Quran - المصاحف الكاملة",
        },
        {
          id: "15",
          name: "Translation Languages - ترجمة معاني القرآن",
        },
        {
          id: "16",
          name: "PDF - ملفات بصيغة بي دي أف",
        },
        {
          id: "17",
          name: "Flash - ملفات بصيغة الفلاش",
        },
      ],
    };
  },

  methods: {
    preparUrl() {
      var base = this.ajax_prefix + "/quran-download?";

      if (this.selected_category.id.length > 0) {
        base += "category=" + this.selected_category.id + "&";
      }
      if (this.search.length > 0) {
        base += "search=" + this.search + "&";
      }

      return base.slice(0, -1);
    },

    searchDownloads(category) {
      this.url = this.preparUrl();
      this.$store.dispatch("quran/setDownloadsData", this);
    },
    selectCategory(category) {
      this.selected_category = category;
      this.url = this.preparUrl();

      this.$store.dispatch("quran/setDownloadsData", this);
    },
    ...mapActions("quran", {
      orderDownloads: "orderDownloads",
    }),
  },

  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("quran/setDownloadsData", this);
  },

  destroyed() {
    this.$store.dispatch("quran/unsetDownloadsData");
  },
};
</script>
