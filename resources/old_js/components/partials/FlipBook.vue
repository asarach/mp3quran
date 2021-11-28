<template>
  <div class="flip-book mobile-fliping-book ">
    <div class="fb-controle top">
      <span class="previous-btn" @click="previous()">
        <arrow-forward-icon fillColor="#0D3A4D" />
        {{ trans("text.previous") }}
      </span>
      <span class="next-btn" @click="next()">
        {{ trans("text.next") }}
        <arrow-back-icon fillColor="#0D3A4D" />
      </span>
    </div>
    <div class="fb-controle-side">
      <span class="previous-btn" @click="previous()"> </span>
      <span class="next-btn" @click="next()"></span>
    </div>
    <div class="book">
      <div id="pages" class="pages">
        <div
          class="page"
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
        <arrow-forward-icon fillColor="#0D3A4D" />
        {{ trans("text.previous") }}
      </span>
      <span class="next-btn" @click="next()">
        {{ trans("text.next") }}
        <arrow-back-icon fillColor="#0D3A4D" />
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
      current_page: 0,
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
      let i = this.images[this.images.length - 1] - image + 1;
        return "z-index: " + i + ";";
    },

    changePage(page) {
      
      let self = this;
      if (page != self.current_page) {
        self.current_page = page ;

        if (page > 5) {
          let last_item = self.images[0];
          let first_add_page = last_item - 1;

          if (
            !self.images.includes(first_add_page) &&
            first_add_page > self.part.start &&
            page < first_add_page + 7
          ) {
            self.images.unshift(first_add_page);
          }

          if (self.images.length > 30) {
            self.images.splice(-1, 1);
          }
        }
      } else {
        self.current_page = page + 1;
        if (page > self.images[0] + 4) {
          let last_item = self.images[self.images.length - 1];
          let first_add_page = last_item + 1;

          if (
            !self.images.includes(first_add_page) &&
            first_add_page < self.part.count
          ) {
            self.images.push(first_add_page);
          }
          if (self.images.length > 30) {
            setTimeout(function () {
              self.images.splice(0, 1);
            }, 300);
          }
        }
      }
    },
  },
  
  created() {
    let first_page = Math.max(this.part.start, this.page - 5 );
    let last_page = Math.min(this.part.count, this.page + 29 );

    for (let i = first_page; i < last_page; i++) {
      this.images.push(i);
    }
    this.current_page = this.page;
    
    this.changePage(this.page);
  },

  watch: {
    page: function (val) {
      let odd = 1;
      this.images = [];

      let first_page = Math.max(this.part.start, this.page - 5 );
      let last_page = Math.min(this.part.count, this.page + 29 );

      for (let i = first_page; i < last_page; i++) {
        this.images.push(i);
      }
      this.changePage(val + odd);
    },
  },
};
</script>