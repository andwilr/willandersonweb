export const state = () => ({
  list: [
    {
      title: 'journeyhillside.com',
      description: '<p>Custom WordPress theme for Journey Hillside Tarzana</p>',
      url: 'https://www.journeyhillside.com/'
    },
    {
      title: 'locksmithdisciples.com',
      description: '<p>Logo, Custom WordPress theme, content, and SEO for Locksmith Disciples</p>',
      url: 'https://locksmithdisciples.com'
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
