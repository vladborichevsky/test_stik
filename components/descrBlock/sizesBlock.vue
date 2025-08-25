<template>
  <section class="sizes">
    <p class="sizes__header">Размеры</p>
    <ul class="sizes__list">
      <li v-for="(size, index) in sizes" :key="index" class="sizes__item">
        <button
          type="button"
          v-if="dressesSizes?.some(dress => dress === size)"
          class="sizes__button sizes__button--allowed"
          :aria-label="`Выбрать размер ${size}`"
        >
          {{ size }}
        </button>
        <span v-else class="sizes__button">{{ size }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        sizes: ['xs', 's', 'm', 'l']
      }
    },
    computed: {
      ...mapState({
        dressesArr: state => state.dressesArr,
        activeDress: state => state.activeDress
      }),
      dressesSizes() {
        return this.dressesArr[this.activeDress]?.sizes
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sizes {
    margin-top: 30px;

    &__header {
      font-size: 10px;
      line-height: 14px;
      margin-bottom: 8px;
    }

    &__list {
      max-width: 80%;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &__item {
      width: 65px;
      height: 31px;
      margin-right: 14px;
      margin-bottom: 10px;
      text-align: center;
      color: var(--grey-light-color);
      font-size: 10px;
      line-height: 31px;
      text-transform: uppercase;
      border: 1px solid var(--grey-light-color);
    }

    &__button {
      width: 100%;
      height: 100%;
      border: none;
      background: none;
      cursor: default;
      font-size: 10px;
      text-transform: uppercase;

      &--allowed {
        width: 100%;
        height: 100%;
        cursor: pointer;
        color: var(--black-color);
        border: 1px solid var(--black-color);
      }
    }
  }

  @media (max-width: 767px) {
    .sizes__list {
      max-width: 100%;
    }
  }
</style>
