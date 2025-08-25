<template>
  <section class="page">
    <div class="page__main">
      <my-slider />
      <descr-block />
    </div>

    <section class="page__similar" aria-labelledby="similar-products-title">
      <similar-prod-block />
    </section>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        dressesArr: state => state.dressesArr,
        activeDress: state => state.activeDress
      })
    },
    methods: {
      async GetData(url) {
        try {
          const response = await fetch(url)
          if (!response.ok) throw new Error('Возникла ошибка в получении данных через fetch')
          return await response.json()
        } catch (error) {
          console.error(error)
          return null
        }
      }
    },
    mounted() {
      this.$store.dispatch('fetchProducts')
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 100px;

    &__main {
      display: flex;
      gap: 50px;
    }
  }

  @media (max-width: 767px) {
    .page {
      padding-bottom: 20px;

      &__main {
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }
    }
  }
</style>
