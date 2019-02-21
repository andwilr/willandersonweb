export const state = () => ({
  list: [
    {
      title: 'locksmithdisciples.com',
      description: '<p>Logo, Custom WordPress theme, content, and SEO for Locksmith Disciples</p>',
      url: 'https://locksmithdisciples.com'
    },
    {
      title: 'crossfithamlake.com',
      description: '<p>Custom WordPress theme for Crossfit Ham Lake</p>',
      url: 'https://crossfithamlake.com'
    },
    {
      title: 'citypages.com',
      description: '<p>Worked with Modern Climate to redesign citypages.com</p>',
      url: 'https://citypages.com'
    }
  ]
})

export const mutations = {
  add(state, item) {
    state.list.push(item)
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
