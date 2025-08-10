<template>
  <div class="descr_block_sizes">
    <p class="descr_block_sizes_header">Размеры</p>
    <div class="descr_block_sizes_wrapper">
      <div
        v-for="(size, index) in sizes"
        :key="index"
        class="descr_block_sizes_item"
        :class="{
          descr_block_sizes_item_allowed: dressesSizes?.some(dress => dress === size)
        }"
      >
        {{ size }}
      </div>
    </div>
  </div>
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
  .descr_block_sizes {
    &_header {
      font-size: 10px;
      line-height: 14px;
    }

    &_wrapper {
      width: 300px;
      display: flex;
      justify-content: space-between;
    }

    &_item {
      width: 65px;
      height: 31px;
      border: 1px solid var(--grey-light-color);
      text-align: center;
      font-size: 10px;
      line-height: 31px;
      text-transform: uppercase;
      color: var(--grey-light-color);
    }

    &_item_allowed {
      cursor: pointer;
      color: var(--black-color);
      border: 1px solid var(--black-color);
    }
  }
</style>
