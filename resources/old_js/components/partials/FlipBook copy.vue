<template>
  <div class="flip-book">
    <div class="fb-controle top">
      <span class="previous-btn" @click="previous()">
        <arrow-forward-icon fillColor="#0D3A4D" />
        {{trans('text.previous')}}
      </span>

      <span class="next-btn" @click="next()">
        {{trans('text.next')}}
        <arrow-back-icon fillColor="#0D3A4D" />
      </span>
    </div>
    <div class="fb-controle-side">
      <span class="previous-btn" @click="previous()"> </span>
      <span class="next-btn" @click="next()"></span>
    </div>
    <swiper ref="mySwiper" :options="swiperOptions" @slideChange="slideChange()">
      <swiper-slide v-for="i in range" :key="i">
        
        <span
          v-if="i == 0"
          :data-src="'https://cdn.qurango.net/Sura2/files/mobile/'+ i +'.jpg'"
          class="swiper-lazy"
        > </span>
        <img
          v-else
          :data-src="'https://cdn.qurango.net/Sura2/files/mobile/'+ i +'.jpg'"
          class="swiper-lazy"
        />
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>
    </swiper>
    <div class="fb-controle">
      <span class="previous-btn" @click="previous()">
        <arrow-forward-icon fillColor="#0D3A4D" />
        {{trans('text.previous')}}
      </span>
      <span class="next-btn" @click="next()">
        {{trans('text.next')}}
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
      start_page: this.part.start,
      end_page: Math.max(this.part.start + 30, this.part.count)
    };
  },
  computed: {
    range() {
      if (this.kahf) {
        var array = Array.apply(
          0,
          Array(this.part.count - this.part.start)
        ).map((element, index) => index + this.part.start);
      } else {
        var array = Array.apply(0, Array(this.end_page - this.start_page)).map(
          (element, index) => index + this.start_page
        );
      }

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
            maxRatio: 3
          },
          zoom: false,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2
          }
        };
      } else {
        return {
          preloadImages: false,
          slidesPerView: 2,
          zoom: {
            maxRatio: 3
          },
          spaceBetween: 0,
          zoom: false,
          slidesPerGroup: 2,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2
          }
        };
      }
    },
    ...mapState({
      style_version: state => state.settings.style_version
    })
  },
  methods: {
    next() {
      this.swiper.slideNext();
    },
    previous() {
      this.swiper.slidePrev();
    },

    slideChange() {
      if (!this.kahf) {
        
        let j = 20;
        let a = this.swiper.activeIndex;
        let i = this.swiper.activeIndex + this.start_page - 1;
        console.log(this.end_page);
        console.log(i);
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
    }
  },
  mounted() {
    this.swiper.slideTo(this.page, 1000, false);
  },
  watch: {
    page: function(newVal, oldVal) {
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
        function() {
          this.swiper.lazy.load();
        }.bind(this),
        100
      );
    },
    start_page: function(newVal, oldVal) {}
  }
};
</script>