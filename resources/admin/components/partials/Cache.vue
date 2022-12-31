<template>
  <button @click="clearCache()" class="btn btn-clearcache">إفراغ الكاش</button>
</template>

<script>
export default {
  methods: {
    clearCache() {
      var self = this;
      axios
        .get(this.ajax_prefix + "cache_clear")
        .then(function (response) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.cache-cleared"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.cache-not-cleared"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
  },
};
</script>
