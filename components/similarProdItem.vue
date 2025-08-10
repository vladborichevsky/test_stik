<template>
  <div @click="setActiveDress(dress.id - 1)" class="sim_prod_item">
    <img :src="dress.photos[0]" alt="" />
    <div class="sim_prod_item_descr">
      <p>{{ dress.name }}</p>
      <p class="sim_prod_item_descr_price">
        {{ dress.price.new }} RUB<span v-if="dress?.price?.old">{{ dress.price.old }} RUB</span>
      </p>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    props: {
      dress: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapMutations({
        setActiveDress: 'setActiveDress'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .sim_prod_item {
    width: 100%;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 4px;
    }

    &_descr {
      font-size: 10px;
      line-height: 16px;
      text-transform: lowercase;
      margin-top: 6px;

      p {
        margin: 0;
      }

      &_price {
        text-transform: uppercase;
      }

      span {
        margin-left: 8px;
        text-decoration: line-through;
        color: var(--grey-color);
        font-size: 9px;
      }
    }
  }

  @media (max-width: 576px) {
    .sim_prod_item {
      img {
        border-radius: 6px;
      }

      &_descr {
        font-size: 12px;
        line-height: 18px;

        span {
          font-size: 10px;
        }
      }
    }
  }
</style>
