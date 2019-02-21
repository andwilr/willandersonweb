<template>
  <nuxt-link class="Logo" to="/">
    <LogoSvg class="Logo-icon" />
    <h1 class="Logo-title">Will Anderson</h1>
  </nuxt-link>
</template>

<script>
import LogoSvg from '@/assets/svg/logo.svg';

export default {
  components: {
    LogoSvg
  }
}
</script>

<style lang="scss">
.Logo {
  text-decoration:none;
  &-icon {
    fill:$primary;
    display:block;
    width:50px;
    height:auto;
    margin-left:auto;
    margin-right:auto;
  }
  &-title {
    font-family: $font-headings;
    display: block;
    font-weight: 800;
    font-size: 26px;
    font-style: italic;
    color:$white;
  }
}
</style>
