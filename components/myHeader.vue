<template>
  <header class="header" role="banner">
    <!-- Мобильные иконки -->
    <nav class="header__icons header__icons--mob" aria-label="Главное меню">
      <button class="header__icon header__user" aria-label="Профиль пользователя">
        <img src="/header/User.svg" alt="Профиль пользователя" />
      </button>
      <button class="header__icon header__search" aria-label="Поиск по сайту">
        <img src="/header/Search.svg" alt="Поиск" />
      </button>
    </nav>

    <div class="header__logo">
      <a href="/" aria-label="Главная">
        <img src="/header/logo_stik.svg" alt="Логотип Stik" />
      </a>
    </div>

    <!-- Десктопные иконки -->
    <nav class="header__icons" aria-label="Ссылки на личный кабинет и корзину">
      <button class="header__icon header__search" aria-label="Поиск по сайту">
        <img src="/header/Search.svg" alt="Поиск" />
      </button>

      <div class="header__bookmark">
        <button aria-label="Закладки">
          <img src="/header/Bookmark.svg" alt="Закладки" class="header__icon" />
          <span v-if="myBookmarks.length > 0" class="header__counter">{{
            myBookmarks.length
          }}</span>
        </button>
      </div>

      <button class="header__icon header__user" aria-label="Профиль пользователя">
        <img src="/header/User.svg" alt="Профиль пользователя" />
      </button>

      <div class="header__basket">
        <button aria-label="Корзина">
          <img src="/header/Basket.svg" alt="Корзина" class="header__icon" />
          <span v-if="myBasket.length > 0" class="header__counter">{{ myBasket.length }}</span>
        </button>
      </div>
    </nav>
  </header>
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
  button {
    border: none;
    background-color: inherit;
  }

  .header {
    width: 100%;
    height: 86px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    &__logo {
      grid-column: 2 / 3;
      justify-self: center;
      align-self: center;
      width: 53px;
    }

    &__icons {
      grid-column: 3 / 4;
      justify-self: end;
      align-self: center;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &--mob {
        display: none;
      }
    }

    &__icon {
      width: 20px;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
      margin: 0 8px;
    }

    &__bookmark,
    &__basket {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__counter {
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
      color: #fff;
    }
  }

  @media (max-width: 500px) {
    .header {
      width: 90%;
      height: 50px;
      margin: 0 auto;
    }

    .header__icons {
      justify-content: end;

      &--mob {
        grid-column: 1 / 2;
        justify-self: start;
        align-self: center;
        display: flex;
        width: 50px;
        justify-content: space-between;
      }
    }

    .header__search,
    .header__user,
    .header__bookmark {
      display: none;
    }
  }
</style>
