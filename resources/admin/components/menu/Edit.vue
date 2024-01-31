<template>
  <div class="content-wrapper">
    <vue-headful
      :title="trans('admin.dashboard_title') + ' | ' + trans('front.menus')"
    />
    <section class="content-header">
      <h1>{{ trans("front.menus") }}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans("admin.dashboard") }}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'menus'">
            <i class="fa fa-dashboard"></i>
            {{ trans("front.menus") }}
          </router-link>
        </li>
        <li class="breadcrumb-item active">
          {{ trans("admin.edit-menu") }}
        </li>
      </ol>
    </section>
    <div v-if="show_spinner" class="loading-spinner">
      <loading-spinner />
    </div>
    <div v-else-if="show_error" class="page-error">
      <loading-error :type="show_error" />
    </div>
    <section v-else class="content">
      <menu-form
        :action="'edit'"
        :menu="menu"
        :languages="languages"
        :places="places"
      ></menu-form>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show_spinner: true,
      show_error: false,
      languages: {},
      places: {},
      menu: {
        title: "",
        slug: "",
        icon: "",
        order_num: "",
        place: "",
        languages: [],
        status: "0",
      },
    };
  },

  methods: {
    editMenu() {
      var self = this;
      axios
        .get(this.ajax_prefix + "menu/edit/" + self.$route.params.id)
        .then(function (response) {
          self.menu = response.data.menu;
          self.languages = response.data.languages;
          self.places = response.data.places;

          self.show_spinner = false;
        })
        .catch(function (error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
  },
  mounted() {
    this.editMenu();
  },
};
</script>
