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

    &:hover {
      transition: all 0.3s;
      background-color: #ffffff;
      color: var(--black-color);
    }
  }

  @media (max-width: 500px) {
    button {
      width: 60%;
    }
  }
</style>
