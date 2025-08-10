<template>
  <div class="container">
    <div class="main_block">
      <my-slider />
      <descr-block />
    </div>
    <similar-prod-block />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  const url = '/product_list.json'

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
  .container {
    max-width: 1500px;
  }

  .main_block {
    display: flex;
    gap: 50px;
  }

  @media (max-width: 767px) {
    .main_block {
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      gap: 20px;
    }
  }
</style>
