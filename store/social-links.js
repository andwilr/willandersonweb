export const state = () => ({
  list: [
    { title: 'GitHub', url: 'https://github.com/andwilr' },
    { title: 'Stack Overflow', url: 'https://stackoverflow.com/users/3272906/willanderson' }
  ]
})

export const mutations = {
  add(state, link) {
    state.list.push(link)
  },
  emptyList(state) {
    state.list = []
  }
}

export const getters = {
  list: state => {
    return state.list
  }
}
