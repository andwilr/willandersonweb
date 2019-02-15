<template>
  <section class="container">
    <div>
      <Logo class="logo" />
      <h1>
        Will Anderson
      </h1>
      <div class="links">
        <a
          href="https://stackoverflow.com/users/3272906/willanderson"
          target="_blank">Stack Overflow</a> | 
        <a
          href="https://github.com/andwilr"
          target="_blank">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'
import Logo from '@/assets/svg/logo.svg';

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
$black: #000;
$primary: #65EFD5;

.logo {
  fill:$primary;
  display:block;
  width:100px;
  height:auto;
  margin-left:auto;
  margin-right:auto;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-family: 'Montserrat Alternates', sans-serif;
  display: block;
  font-weight: 800;
  font-size: 68px;
  font-style: italic;
  color: #000;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
  a {
    transition:all .2s;
    color:$black;
    text-decoration:none;
    &:hover {
      color:$primary;
    }
  }
}
</style>

