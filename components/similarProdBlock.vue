<template>
  <div class="similar">
    <div class="similar_header">Похожие товары</div>

    <div class="similar_wrapper">
      <similar-prod-item v-for="(item, index) in similarProdArr" :key="index" :dress="item" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        dressesArr: state => state.dressesArr,
        activeDress: state => state.activeDress
      }),
      similarProdArr() {
        return this.dressesArr.filter(dress => dress.id !== this.activeDress + 1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .similar {
    margin-top: 50px;

    &_header {
      font-size: 12px;
      line-height: 18px;
      text-transform: uppercase;
    }

    &_wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 10px;
      margin-top: 40px;
    }
  }

  @media (max-width: 767px) {
    .similar_wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    .similar {
      width: 90%;
      margin: 0 auto;
      margin-top: 40px;

      &_wrapper {
        margin-top: 15px;
      }
    }
  }
</style>
