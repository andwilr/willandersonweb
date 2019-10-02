<template>
  <div>
    <h1 class="Page-title">recent work</h1>
    <ul class="Sites">
      <li v-for="item in work">
        <Card
          :title="item.title"
          :description="item.description"
          :url="item.url" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  head () {
    return {
      title: "Will Anderson's Recent Work"
    }
  },
  computed: {
    work() {
      return this.$store.getters['work/list']
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
    padding:0 0 2rem;
    li + li {
      margin-top:2rem;
    }
  }
</style>

