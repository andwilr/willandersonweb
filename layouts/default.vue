<template>
  <section class="App">
    <Header />
    <Navigation />
    <main class="Page">
      <div class="Page-inner">
        <nuxt />
      </div>
    </main>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Header,
    Navigation
  }
}
</script>

<style lang="scss">
* {
  margin:0;
  padding:0;
  list-style:none;
  color:inherit;
  font-weight:inherit;
  line-height:inherit;
  font-size:inherit;
  box-sizing:border-box;
}
html {
  background:$grey;
  background-image:url('/p5.png');
  background-repeat:repeat;
  background-position:center center;
  font-size:calc(16px + (18 - 16) * ((100vw - 320px) / (992 - 320)));
  @media (min-width: #{$bp-horizontal-layout}) {
    font-size:calc(16px + (18 - 16) * ((100vw - 992px) / (1920 - 992)));
  }
}
body {
  font-family:$font-body;
  font-weight:400;
  line-height:1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.App {
  min-height:100vh;
  display:flex;
  flex-direction:column;
  @media (min-width: #{$bp-horizontal-layout}) {
    overflow:hidden;
    height: 100vh;
    flex-direction:row;
  }
}
.Page {
  flex:1;
  max-height:100%;
  overflow:hidden;
  overflow-y:scroll;
  display:flex;
  -webkit-overflow-scrolling: touch;
  &-inner {
    display:flex;
    flex:1;
    padding:2rem;
    @media (min-width: 768px) {
      padding:4rem;
    }
    > * {
      flex:1;
    }
  }
  &-title {
    font-family:$font-headings;
    font-weight:800;
    font-style:italic;
    font-size:4rem;
    line-height:1.2;
    color:$black;
    text-shadow: .25em .25em rgba($black,.05);
    position:sticky;
    margin-bottom:2rem;
    &:last-child {
      margin-bottom:0;
    }
  }
  &-subTitle {
    font-family:$font-mono;
    margin-top:2rem;
    font-size:2rem;
  }
}
.Button {
  color:$black;
  display:inline-block;
  background-color:rgba($primary,.5);
  text-decoration:none;
  transition:all .2s;
  text-transform:uppercase;
  font-family:$font-mono;
  border:none;
  cursor:pointer;
  &:before,
  &:after {
    opacity:.2;
  }
  &:before {
    content: '[';
  }
  &:after {
    content: ']';
  }
  &:hover {
    background-color:$black;
    color:$primary;
  }
}
@media (min-width: #{$bp-horizontal-layout}) {
  .layout-enter-active, .layout-leave-active {
    transition: all .4s ease-out;
  }
  .layout-enter {
    opacity: 0;
    transform-origin:50% 50%;
    transform:translateX(-25vw);
  }
  .layout-leave-active {
    opacity: 0;
    transform-origin:50% 50%;
    transform:translateX(50vw);
  }
}
</style>
