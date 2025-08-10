<template>
  <div class="header">
    <div class="header_icons_mob">
      <img src="/header/User.svg" alt="icon user" />
      <img src="/header/Search.svg" alt="icon search" />
    </div>

    <img src="/header/logo_stik.svg" alt="logo stik" class="header_logo" />
    <div class="header_icons">
      <img src="/header/Search.svg" alt="icon search" id="search" />
      <div class="bookmark">
        <img src="/header/Bookmark.svg" alt="icon bookmarks" />
        <div v-if="myBookmarks.length > 0" class="basket_length">{{ myBookmarks.length }}</div>
      </div>
      <img src="/header/User.svg" alt="icon user" id="user" />
      <div class="basket">
        <img src="/header/Basket.svg" alt="icon basket" />
        <div v-if="myBasket.length > 0" class="basket_length">{{ myBasket.length }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        myBasket: state => state.myBasket,
        myBookmarks: state => state.myBookmarks
      })
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 86px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    &_logo {
      grid-column: 2 / 3;
      justify-self: center;
      align-self: center;

      img {
        width: 53px;
      }
    }

    &_icons {
      width: 100px;
      grid-column: 3 / 4;
      justify-self: end;
      align-self: center;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 20px;
        cursor: pointer;
      }

      &_mob {
        display: none;
      }
    }
  }

  .basket,
  .bookmark {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &_length {
      position: absolute;
      bottom: -5px;
      left: 10px;
      width: 15px;
      height: 15px;
      border-radius: 100%;
      text-align: center;
      line-height: 15px;
      font-size: 9px;
      background-color: var(--grey-dark-color);
      color: #ffff;
    }
  }

  @media (max-width: 500px) {
    .header {
      width: 90%;
      height: 50px;
      margin: 0 auto;
    }

    #search,
    #user,
    .bookmark {
      display: none;
    }

    .header_icons {
      justify-content: end;
    }

    .header_icons_mob {
      grid-column: 1 / 2;
      justify-self: start;
      align-self: center;
      display: flex;
      width: 50px;
      justify-content: space-between;
    }
  }
</style>
