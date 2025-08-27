<template>
  <section class="similar" aria-labelledby="similar__title">
    <h2 id="similar__title" class="similar__title">Похожие товары</h2>

    <div class="similar__list">
      <article
        v-for="(item, index) in similarProdArr"
        :key="item.id"
        @click="setActiveDress(item.id - 1)"
        class="similar__card"
        tabindex="0"
      >
        <img :src="item.photos[0]" :alt="item.name" class="similar__card-img" />
        <div class="similar__card-descr">
          <p class="similar__card-name">{{ item.name }}</p>
          <p class="similar__card-price">
            {{ item.price.new }} RUB
            <span v-if="item?.price?.old" class="similar__card-price-old">
              {{ item.price.old }} RUB
            </span>
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState({
        dressesArr: state => state.dressesArr,
        activeDress: state => state.activeDress
      }),
      similarProdArr() {
        return this.dressesArr.filter(dress => dress.id !== this.activeDress + 1)
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
  .similar {
    margin-top: 50px;

    &__title {
      font-size: 12px;
      line-height: 18px;
      text-transform: uppercase;
    }

    &__list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 10px;
      margin-top: 40px;
    }

    &__card {
      width: 100%;
      cursor: pointer;

      &-img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }

      &-descr {
        font-size: 10px;
        line-height: 14px;
        text-transform: lowercase;
        margin-top: 6px;
      }

      &-name {
        margin-bottom: 5px;
      }

      &-price {
        text-transform: uppercase;

        &-old {
          margin-left: 8px;
          text-decoration: line-through;
          color: var(--grey-color);
          font-size: 9px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .similar {
      &__list {
        grid-template-columns: repeat(2, 1fr);
      }

      &__card {
        margin-bottom: 32px;

        &-descr {
          text-transform: uppercase;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .similar__card {
      &-descr {
        font-size: 12px;
        line-height: 18px;
      }

      &-price {
        &-old {
          font-size: 10px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .similar {
      width: 90%;
      margin: 0 auto;
      margin-top: 40px;

      &__list {
        margin-top: 23px;
      }
    }
  }
</style>
