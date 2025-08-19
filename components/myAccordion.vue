<template>
  <section class="accordion">
    <div class="accordion__item accordion__item--first">
      <button
        id="accordion-button-descr"
        @click="toggleItem('descr')"
        :class="['accordion__button', { 'accordion__button--open': openItem === 'descr' }]"
        aria-expanded="openItem === 'descr'"
        aria-controls="accordion-content-descr"
      >
        Описание
      </button>
      <div
        id="accordion-content-descr"
        class="accordion__content"
        :class="{
          'accordion__content--expanded': openItem === 'descr',
          'accordion__content--collapsed': openItem !== 'descr'
        }"
        role="region"
        :aria-labelledby="'accordion-button-descr'"
      >
        <div class="accordion__content-wrapper">
          {{ dressesDescr }}
        </div>
      </div>
    </div>
    <div class="accordion__item">
      <button
        id="accordion-button-comp"
        @click="toggleItem('comp')"
        :class="[
          'accordion__button',
          { 'accordion__button--open': openItem === 'comp' },
          { 'accordion__button--border-bottom': openItem !== 'comp' },
          { 'accordion__button--border-top': openItem === 'descr' }
        ]"
        aria-expanded="openItem === 'comp'"
        aria-controls="accordion-content-comp"
      >
        Состав и уход
      </button>
      <div
        id="accordion-content-comp"
        class="accordion__content"
        :class="{
          'accordion__content--expanded': openItem === 'comp',
          'accordion__content--collapsed': openItem !== 'comp'
        }"
        role="region"
        :aria-labelledby="'accordion-button-comp'"
      >
        <div class="accordion__content-wrapper">
          {{ dressesComp }}
        </div>
      </div>
    </div>
  </section>
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
        this.openItem = this.openItem === item ? null : item
      }
    }
  }
</script>

<style lang="scss" scoped>
  .accordion {
    width: 360px;

    &__item {
      &--first {
        margin-top: 40px;
      }
    }

    &__button {
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

      &--open::after {
        transform: rotate(135deg);
      }

      &--border-bottom {
        border-bottom: 1px solid rgba(224, 224, 224, 1);
      }

      &--border-top {
        border-top: 1px solid rgb(255, 255, 255);
      }
    }

    &__content {
      display: grid;
      overflow: hidden;
      transition: all 300ms ease-in-out;

      &--collapsed {
        grid-template-rows: 0fr;
        opacity: 0;
      }

      &--expanded {
        grid-template-rows: 1fr;
        opacity: 1;
      }

      &-wrapper {
        overflow: hidden;
        text-align: justify;
        font-size: 12px;
      }
    }
  }

  @media (max-width: 992px) {
    .accordion {
      width: 90%;
    }
  }

  @media (max-width: 500px) {
    .accordion {
      width: 100%;
    }
  }
</style>
