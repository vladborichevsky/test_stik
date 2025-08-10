<template>
  <div class="descr_block">
    <div class="descr_block_top">
      <div>
        <div class="descr_block_top_name">{{ dressesName }}</div>
        <div class="descr_block_top_price">
          {{ dressesPrice?.new }} RUB
          <span v-if="dressesPrice?.old">{{ dressesPrice?.old }} RUB</span>
        </div>
      </div>
      <descr-block-sizes />
      <descr-block-colors />
    </div>

    <div class="button_and_bookmarks">
      <main-button>добавить в корзину</main-button>
      <my-bookmarks id="bookmarks" />
    </div>

    <my-accordion />
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import MainButton from './ui/mainButton.vue'
  import MyBookmarks from './ui/myBookmarks.vue'
  import DescrBlockSizes from './descrBlock/descrBlockSizes.vue'
  import DescrBlockColors from './descrBlock/descrBlockColors.vue'
  import myAccordion from './myAccordion.vue'

  export default {
    components: {
      MainButton,
      MyBookmarks,
      DescrBlockSizes,
      DescrBlockColors,
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
  .descr_block {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .descr_block_top {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &_name,
    &_price {
      text-transform: uppercase;
      font-size: 12px;
      line-height: 16px;

      span {
        margin-left: 10px;
        text-decoration: line-through;
        color: var(--grey-color);
      }
    }
  }

  .button_and_bookmarks {
    display: flex;
    justify-content: space-between;
    width: 360px;
    margin-top: 40px;
  }

  @media (max-width: 767px) {
    .descr_block {
      width: 70%;
      align-items: center;
    }
  }

  @media (max-width: 576px) {
    .descr_block {
      width: 80%;
      align-items: center;
    }
  }

  @media (max-width: 500px) {
    .descr_block {
      width: 90%;
      align-items: start;
    }

    .button_and_bookmarks {
      width: 100%;
      justify-content: space-around;
    }
  }
</style>
