<template>
  <div>
    <article class="descr_block_bottom" id="first_descr_block_bottom">
      <button
        @click="toggleItem('descr')"
        :class="['descr_block_bottom_btn', { open: openItem === 'descr' }]"
      >
        Описание
      </button>

      <div
        class="descr_block_bottom_content"
        :class="openItem === 'descr' ? 'expanded' : 'collapsed'"
      >
        <div class="descr_block_bottom_content_wrapper">
          {{ dressesDescr }}
        </div>
      </div>
    </article>

    <article class="descr_block_bottom">
      <button
        @click="toggleItem('comp')"
        :class="[
          'descr_block_bottom_btn',
          { open: openItem === 'comp' },
          { border_bottom: openItem !== 'comp' },
          { border_top: openItem === 'descr' }
        ]"
      >
        Состав и уход
      </button>

      <div
        class="descr_block_bottom_content"
        :class="openItem === 'comp' ? 'expanded' : 'collapsed'"
      >
        <div class="descr_block_bottom_content_wrapper">
          {{ dressesComp }}
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        openItem: null
      }
    },
    computed: {
      ...mapState({
        dressesArr: state => state.dressesArr,
        activeDress: state => state.activeDress
      }),
      dressesDescr() {
        return this.dressesArr[this.activeDress]?.descr
      },
      dressesComp() {
        return this.dressesArr[this.activeDress]?.composition
      }
    },
    methods: {
      toggleItem(item) {
        if (this.openItem === item) {
          this.openItem = null // Закрываем, если уже открыт
        } else {
          this.openItem = item // Открываем, если был закрыт
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .descr_block_bottom {
    width: 360px;

    &_btn {
      cursor: pointer;
      width: 100%;
      height: 41px;
      position: relative;
      text-align: left;
      font-size: 10px;
      text-transform: uppercase;
      color: var(--black-color);
      background-color: inherit;
      border: none;
      border-top: 1px solid rgba(224, 224, 224, 1);
      border-bottom: 1px solid rgb(255, 255, 255);
      transition: transform 1s ease;

      &::after {
        content: url('/UI/plus.svg');
        position: absolute;
        width: 12px;
        height: 12px;
        top: 13px;
        right: 6px;
        transition: transform 0.3s ease;
      }

      &.open::after {
        transform: rotate(135deg);
      }
    }

    &_content {
      display: grid;
      overflow: hidden;
      transition: all 300ms ease-in-out;
      .descr {
        display: grid;
        transition: all 300ms ease-in-out;
      }

      &.collapsed {
        grid-template-rows: 0fr;
        opacity: 0;
      }

      &.expanded {
        grid-template-rows: 1fr;
        opacity: 1;
      }

      &_wrapper {
        overflow: hidden;
        text-align: justify;
        font-size: 12px;
      }
    }
  }

  .border_bottom {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }

  .border_top {
    border-top: 1px solid rgb(255, 255, 255);
  }

  #first_descr_block_bottom {
    margin-top: 40px;
  }

  @media (max-width: 500px) {
    .descr_block_bottom {
      width: 100%;
    }
  }
</style>
