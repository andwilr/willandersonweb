<template>
  <div>
    <h1 class="Page-title">recent work</h1>
    <ul class="Sites">
      <li v-for="site in sites">
        <Card
          :title="site.title"
          :description="site.description"
          :url="site.url" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  data() {
    return {
      sites: [
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
    }
  },
  head () {
    return {
      title: "Will Anderson's Recent Work"
    }
  },
  components: {
    Card
  },
  transition: 'layout'
}
</script>

<style lang="scss">
  .Sites {
    list-style:none;
    margin:0;
    padding:0;
    li + li {
      margin-top:2rem;
    }
  }
</style>

