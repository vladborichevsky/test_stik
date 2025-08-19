<template>
  <button @click="addProToMyBasket(dressesID)"><slot /></button>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState({
        dressesArr: state => state.dressesArr,
        activeDress: state => state.activeDress
      }),
      dressesID() {
        return this.dressesArr[this.activeDress]?.id
      }
    },
    methods: {
      ...mapMutations({
        addProToMyBasket: 'addProToMyBasket'
      })
    }
  }
</script>

<style lang="scss" scoped>
  button {
    width: 306px;
    height: 44px;
    background-color: var(--dark-color);
    color: #ffffff;
    text-transform: uppercase;
    font-size: 11px;
    cursor: pointer;
    border: 1px solid var(--dark-color);
    margin-right: 10px;

    &:hover {
      transition: all 0.3s;
      background-color: #ffffff;
      color: var(--black-color);
    }
  }

  @media (max-width: 992px) {
    button {
      width: 250px;
    }
  }

  @media (max-width: 576px) {
    button {
      width: 220px;
    }
  }
</style>
