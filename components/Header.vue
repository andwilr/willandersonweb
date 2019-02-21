<template>
  <header class="Header">
    <div>
      <Logo />
      <nav class="Header-links">
        <ul>
          <li v-for="link in links">
            <a :href="link.url" target="_blank">{{ link.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data () {
    return {
      links: [
        { title: 'GitHub', url: 'https://github.com/andwilr' },
        { title: 'Stack Overflow', url: 'https://stackoverflow.com/users/3272906/willanderson' }
      ]
    }
  },
  components : {
    Logo
  }
}
</script>

<style lang="scss">
  .Header {
    padding:2rem 2rem 0;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    background:$black;
    color:$white;
    @media (min-width: #{$bp-horizontal-layout}) {
      width: $sidebar-width;
      order:1;
      padding-bottom:2rem;
    }
    &-links {
      display:none;
      @media (min-width: #{$bp-horizontal-layout}) {
        display:block;
      }
      padding-top: 15px;
      ul {
        list-style:none;
        margin:0;
        padding:0;
      }
      ul, li {
        margin-top:2rem;
      }
      a {
        font-family:$font-mono;
        transition:all .2s;
        color:$white;
        text-decoration:none;
        &:hover {
          color:$primary;
        }
      }
    }
  }

</style>
