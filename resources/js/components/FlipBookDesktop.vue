<template>
  <div class="flip-book fliping-book">
    <div class="fb-controle top">
      <span class="previous-btn" @click="previous()">
        <span class="uni-icon icon-arrow_forward"></span>
        {{ trans("text.previous") }}
      </span>
      <span class="next-btn" @click="next()">
        {{ trans("text.next") }}
        <span class="uni-icon icon-arrow_back"></span>
      </span>
    </div>
    <div class="book">
      <div id="pages" class="pages">
        <div
          class="page"
          @click="changePage(image)"
          :id="'page-' + image"
          :class="{ flipped: current_page > image }"
          :style="zIndex(index, image)"
          v-for="(image, index) in images"
          :key="image"
        >
          <img
            :src="
              'https://cdn.qurango.net/Sura2/files/mobile/' + image + '.jpg'
            "
          />
        </div>
      </div>
    </div>
    <div class="fb-controle">
      <span class="previous-btn" @click="previous()">
        <span class="uni-icon icon-arrow_forward"></span>
        {{ trans("text.previous") }}
      </span>
      <span class="next-btn" @click="next()">
        {{ trans("text.next") }}
        <span class="uni-icon icon-arrow_back"></span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["part", "page", "kahf"],
  data() {
    return {
      current_page: 1,
      images: [],
    };
  },
  computed: {
    ...mapState({
      style_version: (state) => state.settings.style_version,
    }),
  },
  methods: {
    next() {
      let next_page = this.current_page;
      this.changePage(next_page);
    },
    previous() {
      let previous_page = this.current_page - 1;
      this.changePage(previous_page);
    },
    zIndex(index, image) {
      if (index % 2 === 0) {
        let i = this.images[this.images.length - 1] - image + 1;
        return "z-index: " + i + ";";
      } else {
        return "";
      }
    },

    changePage(page) {
      let self = this;
      console.log('page' + page);
      console.log('current_page' + self.current_page);
      if (page % 2 === 0) {
        self.current_page = page - 1;

        if (page > 5) {
          let last_item = self.images[0];
          let first_add_page = last_item - 1;
          let second_add_page = last_item - 2;

          if (
            !self.images.includes(first_add_page) &&
            first_add_page > self.part.start - 1  &&
            page < first_add_page + 7
          ) {
            self.images.unshift(first_add_page);
          }
          if (
            !self.images.includes(second_add_page) &&
            second_add_page > self.part.start - 1 &&
            page < first_add_page + 7
          ) {
            self.images.unshift(second_add_page);
          }

          if (self.images.length > 30) {
            self.images.splice(-2, 2);
          }
        }
      } else {
        self.current_page = page + 2;
        if (page > self.images[0] + 4) {
          let last_item = self.images[self.images.length - 1];
          let first_add_page = last_item + 1;
          let second_add_page = last_item + 2;

          if (
            !self.images.includes(first_add_page) &&
            first_add_page < self.part.count
          ) {
            self.images.push(first_add_page);
          }
          if (
            !self.images.includes(second_add_page) &&
            second_add_page < self.part.count
          ) {
            self.images.push(second_add_page);
          }
          if (self.images.length > 30) {
            setTimeout(function () {
              self.images.splice(0, 2);
            }, 300);
          }
        }
      }
    },
  },
  created() {
    let odd = 0;
    let add = 1;
    
    if (this.page % 2 === 0) {
      odd = 1;
      add = 0;
    }
    console.log('odd' + odd);
    let first_page = Math.max(this.part.start - add , this.page - 5 - odd);
    let last_page = Math.min(this.part.count  + add, this.page + 29 - odd);

    for (let i = first_page; i < last_page; i++) {
      this.images.push(i);
    }

    this.current_page = this.page;

    this.changePage(this.page );
  },
  watch: {
    page: function (val) {
      let odd = 0;

      if (val % 2 === 0) {
        odd = 1;
      }

      this.images = [];

      let first_page = Math.max(1, val - 2 - odd);
      let last_page = Math.min(this.part.count, val + 29 - odd);

      for (let i = first_page; i < last_page; i++) {
        this.images.push(i);
      }
      this.changePage(val - odd);
    },
  },
};
</script>