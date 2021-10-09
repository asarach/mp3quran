<template>
  <nav aria-label="Page navigation" v-if="pagination.last_page > 1">
    <ul class="pagination justify-content-end p-0 m-0">
      <li class="page-item" :class="{'disabled': pagination.current_page == 1}">
        <a
          class="page-link"
          href="javascript:void(0)"
          :aria-disabled="pagination.current_page == 1? true : false"
          tabindex="-1"
          aria-label="Previous"
          v-on:click.prevent="changePage(pagination.current_page - 1)"
        >
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li
        v-for="page in pagesNumber"
        class="page-item"
        :class="{'active': page == pagination.current_page}"
      >
        <a
          class="page-link"
          href="javascript:void(0)"
          v-on:click.prevent="changePage(page)"
        >{{ page }}</a>
      </li>
      <li class="page-item" :class="{'disabled': pagination.current_page >= pagination.last_page}">
        <a
          class="page-link"
          href="javascript:void(0)"
          :aria-disabled="pagination.current_page >= pagination.last_page? true : false"
          aria-label="Next"
          v-on:click.prevent="changePage(pagination.current_page + 1)"
        >
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pagination: "",
    offset: ""
  },
  computed: {
    pagesNumber() {
      if (!this.pagination.to) {
        return [];
      }
      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset * 2;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      let pagesArray = [];
      for (let page = from; page <= to; page++) {
        pagesArray.push(page);
      }
      return pagesArray;
    }
  },
  methods: {
    changePage(page) {
      this.pagination.current_page = page;
      this.$emit("paginate");
    }
  }
};
</script>
