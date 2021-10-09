<template>
  <div class="flip-book fliping-book">
    <div class="fb-controle top">
      <span class="previous-btn" @click="previous()">
        <arrow-forward-icon fillColor="#0D3A4D" />
        {{ trans("text.previous") }}
      </span>
      <span class="next-btn" @click="next()">
        {{ current_page }}
        <arrow-back-icon fillColor="#0D3A4D" />
      </span>
    </div>
    <div class="book">
      <div id="pages" class="pages">
        <div
          class="page"
          @click="changePage($event, image, index)"
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
      start_page: 0,
      end_page: 10,
      current_page: 1,
      b: false,
      images: [],
      manar: 1,
    };
  },
  computed: {
    range() {
      var array = Array.apply(this.start_page, Array(this.end_page)).map(
        (element, index) => index + this.current_page
      );
      return array;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    swiperOptions() {
      if (this.style_version == "m") {
        return {
          preloadImages: false,
          zoom: {
            maxRatio: 3,
          },
          zoom: false,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2,
          },
        };
      } else {
        return {
          preloadImages: false,
          slidesPerView: 2,
          zoom: {
            maxRatio: 3,
          },
          spaceBetween: 0,
          zoom: false,
          slidesPerGroup: 2,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2,
          },
        };
      }
    },
    ...mapState({
      style_version: (state) => state.settings.style_version,
    }),
  },
  methods: {
    next() {
      this.current_page++;
      console.log(this.manar);
      //this.swiper.slideNext();
    },
    previous() {
      this.swiper.slidePrev();
    },
    zIndex(index, image) {
      if (index % 2 === 0) {
        let i = this.images[this.images.length - 1] - image + 1;
        return "z-index: " + i + ";";
      } else {
        return "";
      }
    },
    changePage(event, image, index) {
      let self = this;
      let key = image;
      if (key % 2 === 0) {
        this.current_page = key - 1;
        //event.target.classList.remove("flipped");
        //event.target.previousElementSibling.classList.remove("flipped");
        if (key > 5) {
          console.log(key);
          let first_add_page = key - 6;
          let second_add_page = key - 7;
          if (first_add_page > 0) {
            this.images.unshift(first_add_page);
          }
          if (second_add_page > 0) {
            this.images.unshift(second_add_page);
            this.images.splice(-2, 2);
          }

          //$("#pages .page:lt(2)").remove();
          //let first_add_page = key - 3;
          //let second_add_page = key - 4;
          //console.log(first_add_page);
          //console.log(second_add_page);
          //this.images.push(first_add_page);
          //this.images.push(second_add_page);
          //this.images.splice(0, 2);
          //$("#pages .page:nth-last-child(2)").remove();
          //$("#pages .page:last-child").remove();
          //$("#pages .page:lt(2)").remove();
          //$("#pages .page:lt(2)").remove();
        }
      } else {
        this.current_page = key + 2;
        //event.target.classList.add("flipped");
        //event.target.nextElementSibling.classList.add("flipped");
        if (key > 5) {
          //$("#pages .page:lt(2)").remove();
          //console.log(key);
          let first_add_page = key + 23;
          let second_add_page = key + 24;
          self.images.push(first_add_page);
          self.images.push(second_add_page);

          self.setIndexs();

          setTimeout(function () {
            self.images.splice(0, 2);
            self.setIndexs();
          }, 1000);
        }
      }
    },
    setIndexs() {
      var pages = document.getElementsByClassName("page");
      for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        if (i % 2 === 0) {
          page.style.zIndex = pages.length - i;
        }
      }
    },

    slideChange() {
      if (!this.kahf) {
        let j = 20;
        let a = this.swiper.activeIndex;
        let i = this.swiper.activeIndex + this.start_page - 1;
        if (this.end_page - i <= 3 && this.end_page < 603) {
          this.end_page = Math.min(605, this.end_page + j);
          this.start_page = this.start_page + j;
          this.swiper.slideTo(a - j, 1, false);
        }
        if (i - this.start_page <= 3 && this.start_page > 2) {
          this.end_page = this.end_page - j;
          this.start_page = Math.max(1, this.start_page - j);
          this.swiper.slideTo(a + j, 1, false);
        }
      }
    },
  },
  created() {
    for (let i = 1; i < 30; i++) {
      this.images.push(i);
    }
  },
  mounted() {
    //this.setIndexs();
  },
  watch: {
    page: function (newVal, oldVal) {
      this.end_page = newVal + 25;
      var stp = newVal - 5;
      var stpto = 6;
      if (stp < 0) {
        this.start_page = 0;
        stpto = 2;
      } else {
        this.start_page = stp;
      }

      this.swiper.slideTo(stpto, 1000, false);
      setTimeout(
        function () {
          this.swiper.lazy.load();
        }.bind(this),
        100
      );
    },
    start_page: function (newVal, oldVal) {},
  },
};
</script>