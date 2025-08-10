// store/index.js

const url = '/product_list.json'

export const state = () => ({
  dressesArr: [],
  activeDress: 0,
  myBasket: [],
  myBookmarks: []
})

export const mutations = {
  setDressesArr(state, newValue) {
    state.dressesArr = newValue
  },
  setActiveDress(state, newValue) {
    state.activeDress = newValue
  },
  addProToMyBasket(state, prod) {
    state.myBasket.push(prod)
    const set = new Set(state.myBasket)
    state.myBasket = Array.from(set)
  },
  setMyBookmarks(state, prod) {
    if (state.myBookmarks.some(item => item === prod)) {
      state.myBookmarks = state.myBookmarks.filter(dress => dress != prod)
    } else {
      state.myBookmarks.push(prod)
    }
  }
}

export const actions = {
  async fetchProducts({
    commit,
    state
  }) {
    const res = await fetch(url);
    const data = await res.json();
    commit('setDressesArr', data);
  }
}

export const getters = {
  dressesArr: (state) => state.dressesArr,
  activeDress: (state) => state.activeDress
}