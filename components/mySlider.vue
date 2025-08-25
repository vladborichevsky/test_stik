<template>
  <section class="product-slider" aria-label="Фотогалерея товара">
    <!-- превью (thumbs) -->
    <swiper
      ref="swiperThumbs"
      class="product-slider__thumbs swiper-thumbs"
      :options="swiperOptionsThumbs"
    >
      <swiper-slide v-for="(slide, index) in dressesArrImg" :key="index">
        <figure class="product-slider__thumb">
          <img :src="slide" alt="Превью товара" />
        </figure>
      </swiper-slide>
    </swiper>

    <!-- главный слайдер -->
    <swiper ref="swiperTop" class="product-slider__main swiper-main" :options="swiperOptionsTop">
      <swiper-slide v-for="(slide, index) in dressesArrImg" :key="index">
        <figure class="product-slider__image">
          <img :src="slide" alt="Фото товара" />
        </figure>
      </swiper-slide>

      <!-- пагинация -->
      <div
        v-show="dressesArrImg?.length > 1"
        class="product-slider__pagination swiper-pagination"
        slot="pagination"
      ></div>

      <!-- стрелки -->
      <button
        v-show="dressesArrImg?.length > 1"
        slot="button-prev"
        class="product-slider__btn product-slider__btn--prev swiper-btn-prev"
        aria-label="Предыдущий слайд"
      >
        <img v-if="activeIndex === 0" src="/UI/arrow_left_des.svg" alt="" />
        <img v-else src="/UI/arrow_left.svg" alt="" />
      </button>

      <button
        v-show="dressesArrImg?.length > 1"
        slot="button-next"
        class="product-slider__btn product-slider__btn--next swiper-btn-next"
        aria-label="Следующий слайд"
      >
        <img
          v-if="activeIndex === dressesArrImg?.length - 1"
          src="/UI/arrow_right_des.svg"
          alt=""
        />
        <img v-else src="/UI/arrow_right.svg" alt="" />
      </button>
    </swiper>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        activeIndex: 0,
        swiperOptionsTop: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev'
          }
        },
        swiperOptionsThumbs: {
          direction: 'vertical',
          spaceBetween: 4,
          slidesPerView: 'auto',
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: true,
          centeredSlides: false,
          mousewheel: true
        }
      }
    },
    computed: {
      ...mapState({
        dressesArr: state => state.dressesArr,
        activeDress: state => state.activeDress
      }),
      dressesArrImg() {
        return this.dressesArr[this.activeDress]?.photos || []
      }
    },
    mounted() {
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      const swiperTop = this.$refs.swiperTop.$swiper

      swiperTop.thumbs.swiper = swiperThumbs
      swiperTop.thumbs.init()
      swiperTop.thumbs.update()

      swiperTop.on('slideChange', () => {
        this.activeIndex = swiperTop.activeIndex
      })
    }
  }
</script>

<style lang="scss" scoped>
  .product-slider {
    display: flex;
    align-items: flex-start;
    width: 50%;
    gap: 30px;

    &__main {
      position: relative;
      flex: 1;
      width: 100%;
      height: 100%;

      .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__thumbs {
      width: 70px;
      margin-bottom: 4px;

      img {
        width: 100%;
        height: 87px;
        object-fit: cover;
      }

      .swiper-slide {
        height: 100%;
        opacity: 1;
        cursor: pointer;
      }

      .swiper-slide-thumb-active {
        opacity: 0.5;
      }
    }

    .product-slider__pagination ::v-deep(.swiper-pagination-bullet) {
      background-color: rgba(255, 255, 255, 1);
      opacity: 0.4;
      margin: 0 3px;
      width: 7px;
      height: 7px;
    }

    .product-slider__pagination ::v-deep(.swiper-pagination-bullet-active) {
      opacity: 1;
    }

    &__pagination,
    .swiper-pagination {
      display: none;
    }

    &__btn,
    .swiper-btn-prev,
    .swiper-btn-next {
      position: absolute;
      width: 32px;
      height: 32px;
      z-index: 10;
      cursor: pointer;
      border: 0;
      background: transparent;
      padding: 0;
      line-height: 0;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    &__btn--prev,
    .swiper-btn-prev {
      top: 50%;
      transform: translateY(-100%);
      left: 16px;
    }

    &__btn--next,
    .swiper-btn-next {
      top: 50%;
      transform: translateY(-100%);
      right: 16px;
    }

    @media (max-width: 992px) {
      &__thumbs {
        display: none;
      }

      &__pagination,
      .swiper-pagination {
        display: block;
      }

      &__btn,
      .swiper-btn-prev,
      .swiper-btn-next {
        img {
          width: 26px;
          height: 26px;
        }
      }

      &__btn--prev,
      .swiper-btn-prev {
        left: 10px;
      }

      &__btn--next,
      .swiper-btn-next {
        right: 10px;
      }
    }

    @media (max-width: 767px) {
      width: 80%;
      gap: 0;
    }

    @media (max-width: 576px) {
      width: 100%;
    }
  }
</style>
