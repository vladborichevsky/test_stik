<template>
  <section class="colors">
    <p class="colors__header">Цвет: {{ activeColor }}</p>
    <ul class="colors__list">
      <li
        v-for="(color, index) in dressesColors"
        :key="index"
        class="colors__item"
        :class="{
          'colors__square--active': activeColor === color
        }"
      >
        <button
          type="button"
          @click="setActiveColor(color)"
          class="colors__square"
          :class="{
            'colors__square--white': color === 'белый',
            'colors__square--black': color === 'чёрный',
            'colors__square--red': color === 'красный',
            'colors__square--beige': color === 'бежевый'
          }"
          :aria-label="`Выбрать цвет ${color}`"
          :title="color"
        ></button>
      </li>
    </ul>
  </section>
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
  .colors {
    &__header {
      font-size: 10px;
      line-height: 14px;
      margin-bottom: 6px;
    }

    &__list {
      max-width: 70%;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &__item {
      width: 34px;
      height: 34px;
      margin-right: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
    }

    &__square {
      width: 28px;
      height: 27px;
      cursor: pointer;
      border: none;
      background: none;
      padding: 0;

      &--white {
        background-color: #fff;
        border: 1px solid var(--grey-light-color);
      }

      &--black {
        background-color: var(--dark-color);
        border: 1px solid var(--dark-color);
      }

      &--red {
        background-color: red;
        border: 1px solid red;
      }

      &--beige {
        background-color: beige;
        border: 2px solid beige;
      }

      &--active {
        border-bottom: 1px solid var(--grey-dark-color);
      }
    }
  }
</style>
