<template>
  <div class="slider-container" v-if="dressesArrImg">
    <div class="thumbnails">
      <div
        v-for="(slide, index) in dressesArrImg"
        :key="index"
        class="thumb"
        :class="{ active: index === activeIndex }"
        @click="goToSlide(index)"
      >
        <img :src="slide" alt="Preview" />
      </div>
    </div>

    <div class="main-slider">
      <div v-if="dressesArrImg.length > 1" @click="prevSlide" class="arrow left">
        <img src="/UI/arrow_left.svg" alt="" />
      </div>

      <div class="slide">
        <img :src="dressesArrImg?.[activeIndex]" alt="Slide" />
      </div>

      <div v-if="dressesArrImg.length > 1" @click="nextSlide" class="arrow right">
        <img src="/UI/arrow_right.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Slider',
    data() {
      return {
        activeIndex: 0
      }
    },

    computed: {
      ...mapState({
        dressesArr: state => state.dressesArr,
        activeDress: state => state.activeDress
      }),
      dressesArrImg() {
        return this.dressesArr[this.activeDress]?.photos
      }
    },

    methods: {
      nextSlide() {
        this.activeIndex = (this.activeIndex + 1) % this.dressesArrImg.length
      },
      prevSlide() {
        this.activeIndex =
          (this.activeIndex - 1 + this.dressesArrImg.length) % this.dressesArrImg.length
      },
      goToSlide(index) {
        this.activeIndex = index
      }
    },

    watch: {
      dressesArrImg: {
        handler() {
          this.activeIndex = 0
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  .slider-container {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: start;
    gap: 20px;
  }

  .main-slider {
    position: relative;
    max-width: 518px;
    max-height: 693px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide img {
    width: 100%;
    object-fit: cover;
  }

  .arrow {
    color: #333;
    cursor: pointer;
    user-select: none;
  }

  .arrow.left {
    position: absolute;
    left: 10px;
  }

  .arrow.right {
    position: absolute;
    right: 10px;
  }

  .thumbnails {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;
    width: 70px;
    max-height: 420px;
  }

  .thumb {
    width: 70px;
    height: 87px;
    cursor: pointer;
    opacity: 1;
  }

  .thumb.active {
    opacity: 0.6;
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 992px) {
    .thumbnails {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .slider-container {
      width: 70%;
    }
  }

  @media (max-width: 576px) {
    .slider-container {
      width: 80%;
    }
  }

  @media (max-width: 500px) {
    .slider-container {
      width: 100%;
    }
  }
</style>
