<template>
  <button
    type="button"
    class="bookmarks"
    @click="setMyBookmarks(dressesID)"
    :aria-pressed="alreadyInBookmarks"
    :title="alreadyInBookmarks ? 'Убрать из Избранного' : 'Добавить в Избранное'"
  >
    <img
      v-if="alreadyInBookmarks"
      class="bookmarks__icon"
      src="/UI/bookmarks_active.svg"
      alt="В избранном"
    />
    <img v-else class="bookmarks__icon" src="/UI/bookmarks.svg" alt="Не в избранном" />
  </button>
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
        return this.myBookmarks.some(item => item === this.dressesID)
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
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--dark-color);
    cursor: pointer;
    background: none;
    padding: 0;

    &__icon {
      display: block;
      width: 24px;
    }
  }
</style>
