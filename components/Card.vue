<template>
  <div class="Card">
    <h2 class="Card-title">{{title}}</h2>
    <div v-html="description"></div>
    <a
      class="Button"
      :href="url"
      rel="noreferrer"
      target="_blank">View</a>
  </div>
</template>

<script>
import Logo from '@/assets/svg/logo.svg';

export default {
  props: ['title', 'description', 'url']
}
</script>

<style lang="scss">
  .Card {
    background:$white;
    padding:2rem;
    @media (min-width:576px) {
      padding:4rem;
    }
    * + * {
      margin-top:1rem;
    }
    &-title {
      font-family:$font-headings;
      font-weight:800;
      font-style:italic;
    }
  }

</style>
