<template>
  <nav class="Navigation">
    <ul>
      <li v-for="link in links">
        <NLink :to="link.nLink" class="Navigation-link">{{link.label}}</NLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { label: 'Home', nLink: '/' },
        { label: 'Work', nLink: '/work' },
        { label: 'Contact', nLink: '/contact' }
      ]
    }
  },
}
</script>

<style lang="scss">
  .Navigation {
    background:$black;
    display:flex;
    position:sticky;
    top:0;
    overflow:hidden;
    padding:0 2rem;
    z-index:1;
    ul {
      list-style:none;
      margin:0;
      padding:0;
      display:flex;
      flex:1;
      @media (min-width: #{$bp-horizontal-layout}) {
        flex-direction:column;
      }
    }
    li {
      flex:1;
      display:flex;
      position:relative;
    }
    &-link {
      flex:1;
      display:block;
      text-align:center;
      padding:2rem 0;
      color:$white;
      text-decoration:none;
      text-transform:uppercase;
      font-family:$font-mono;
      font-size:1.25rem;
      transition:all .2s;
      &:after {
        content:'';
        display:block;
        position:absolute;
        width:2rem;
        height:2rem;
        border-radius:50%;
        background:$primary;
        bottom:0;
        left:50%;
        transform-origin:50% 50%;
        transition: all .2s;
        transform:translate(-50%, 75%) scale(0);
        @media (min-width: #{$bp-horizontal-layout}) {
          bottom:auto;
          left:0;
          top:50%;
          transform:translate(-75%, -50%) scale(0);
        }
      }
      &:hover {
        color:mix($primary, $white, 50%);
      }
      @media (min-width: #{$bp-horizontal-layout}) {
        writing-mode: vertical-lr;
        transform: rotate(-180deg);
        transform-origin:50% 50%;
      }
      &.nuxt-link-exact-active {
        color:$primary;
        &:after {
          transform:translate(-50%, 75%) scale(1);
          @media (min-width: #{$bp-horizontal-layout}) {
            transform:translate(-75%, -50%) scale(1);
          }
        }
      }
    }
    @media (min-width: #{$bp-horizontal-layout}) {
      position:static;
      padding:2rem 0;
      &-link {
        padding:0 2rem;
      }
    }
  }
</style>
