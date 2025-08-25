<template>
  <section class="descr-block" aria-label="Описание товара">
    <div class="descr-block__top">
      <div>
        <h1 class="descr-block__name">{{ dressesName }}</h1>
        <p class="descr-block__price">
          {{ dressesPrice?.new }} RUB
          <span v-if="dressesPrice?.old">{{ dressesPrice?.old }} RUB</span>
        </p>
      </div>
      <sizes-block />
      <colors-block />
    </div>
    <div class="descr-block__actions">
      <main-button>добавить в корзину</main-button>
      <bookmarks-button />
    </div>
    <my-accordion />
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  import MainButton from './ui/mainButton.vue'
  import bookmarksButton from './ui/bookmarksButton.vue'
  import sizesBlock from './descrBlock/sizesBlock.vue'
  import colorsBlock from './descrBlock/colorsBlock.vue'
  import myAccordion from './myAccordion.vue'

  export default {
    components: {
      MainButton,
      bookmarksButton,
      sizesBlock,
      colorsBlock,
      myAccordion
    },
    computed: {
      ...mapState({
        dressesArr: state => state.dressesArr,
        activeDress: state => state.activeDress
      }),
      dressesName() {
        return this.dressesArr[this.activeDress]?.name
      },
      dressesPrice() {
        return this.dressesArr[this.activeDress]?.price
      }
    }
  }
</script>

<style lang="scss" scoped>
  .descr-block {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;

    &__top {
      display: flex;
      flex-direction: column;
    }

    &__name,
    &__price {
      text-transform: uppercase;
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 8px;

      span {
        margin-left: 10px;
        text-decoration: line-through;
        color: var(--grey-color);
      }
    }

    &__actions {
      display: flex;
      margin-top: 40px;
    }
  }

  @media (max-width: 767px) {
    .descr-block {
      width: 80%;
      align-items: center;
    }
  }

  @media (max-width: 576px) {
    .descr-block {
      width: 80%;
      align-items: center;
    }
  }

  @media (max-width: 500px) {
    .descr-block {
      width: 90%;
      align-items: start;

      &__actions {
        margin: 0 auto;
        margin-top: 30px;
      }
    }

    .bookmarks {
      position: absolute;
      top: -15px;
      right: 0;
      border: none;
    }
  }
</style>
