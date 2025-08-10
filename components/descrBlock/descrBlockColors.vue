<template>
  <div class="descr_block_colors">
    <p class="descr_block_colors_header">Цвет: {{ activeColor }}</p>
    <div class="descr_block_colors_wrapper">
      <div v-for="(color, index) in dressesColors" :key="index" class="descr_block_colors_item">
        <div
          @click="setActiveColor(color)"
          class="descr_block_colors_item_square"
          :class="{
            white: color === 'белый',
            black: color === 'чёрный',
            red: color === 'красный',
            beige: color === 'бежевый',
            active_color: activeColor === color
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        activeColor: ''
      }
    },
    computed: {
      ...mapState({
        dressesArr: state => state.dressesArr,
        activeDress: state => state.activeDress
      }),
      dressesColors() {
        return this.dressesArr[this.activeDress]?.colors
      },
      colorOnPhoto() {
        return this.dressesArr[this.activeDress]?.colorOnPhoto
      }
    },
    methods: {
      setActiveColor(newColor) {
        this.activeColor = newColor
      }
    },
    watch: {
      colorOnPhoto: {
        handler(newValue) {
          this.activeColor = newValue
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .descr_block_colors {
    &_header {
      font-size: 10px;
      line-height: 14px;
    }

    &_wrapper {
      display: flex;
    }

    &_item {
      width: 34px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      line-height: 31px;
      margin-right: 10px;
      text-transform: uppercase;

      &_square {
        width: 28px;
        height: 27px;
        cursor: pointer;
      }
    }
  }

  .white {
    background-color: #fff;
    border: 1px solid var(--grey-light-color);
  }

  .black {
    background-color: var(--dark-color);
    border: 1px solid var(--dark-color);
  }

  .red {
    background-color: red;
    border: 1px solid red;
  }

  .beige {
    background-color: beige;
    border: 2px solid beige;
  }

  .active_color {
    border: 2px solid var(--grey-dark-color);
  }
</style>
