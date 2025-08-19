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
    const exists = state.myBasket.some(item => item.id === prod.id)
    if (!exists) state.myBasket.push(prod)
  },

  setMyBookmarks(state, prod) {
    const exists = state.myBookmarks.find(item => item.id === prod.id)
    if (exists) {
      state.myBookmarks = state.myBookmarks.filter(item => item.id !== prod.id)
    } else {
      state.myBookmarks.push(prod)
    }
  }
}

export const actions = {
  async fetchProducts({
    commit
  }) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      commit('setDressesArr', data)
    } catch (err) {
      console.error('Failed to fetch products:', err)
    }
  }
}

export const getters = {
  dressesArr: state => state.dressesArr,
  activeDress: state => state.activeDress,
  myBasket: state => state.myBasket,
  myBookmarks: state => state.myBookmarks
}