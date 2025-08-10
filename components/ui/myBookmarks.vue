<template>
  <div class="bookmarks" @click="setMyBookmarks(dressesID)">
    <img
      v-if="alreadyInBookmarks"
      src="/UI/bookmarks_active.svg"
      alt=""
      title="Убрать из Избранного"
    />
    <img v-else src="/UI/bookmarks.svg" alt="" title="Добавить в Избранное" />
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    computed: {
      ...mapState({
        dressesArr: state => state.dressesArr,
        activeDress: state => state.activeDress,
        myBookmarks: state => state.myBookmarks
      }),
      dressesID() {
        return this.dressesArr[this.activeDress]?.id
      },
      alreadyInBookmarks() {
        if (this.myBookmarks.some(item => item === this.dressesID)) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      ...mapMutations({
        setMyBookmarks: 'setMyBookmarks'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .bookmarks {
    width: 44px;
    height: 42px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--dark-color);

    img {
      display: block;
      width: 24px;
    }
  }
</style>
