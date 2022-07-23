<template>
  <form class="search-form" role="form" @submit.prevent="search()">
    <input
      v-model="query"
      name="s"
      class="form-control mr-sm-2"
      type="search"
      :placeholder="trans('text.search')"
      aria-label="Search"
    />
    <button type="submit" class="btn btn-search">
      <span class="uni-icon icon-search" style="color: #b5bbbf"></span>
    </button>
  </form>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      this.$router.push(
        "/" +
          this.$store.state.current_language +
          "/" +
          "search?s=" +
          this.query
      );
    },
  },
};
</script>
