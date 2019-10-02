<template>
  <div class="Intro">
    <h2>Front End Developer / Problem Solver</h2>
    <h1 class="Page-title">where there&rsquo;s<br> a me&hellip; <span class="highlight">there&rsquo;s a way.</span></h1>
  </div>
</template>

<script>
export default {
  transition: 'layout',
  head () {
    return {
      title: "Will Anderson | Front End Developer / Problem Solver"
    }
  },
}
</script>

<style lang="scss">
.Intro {
  margin:auto auto;
  text-align:center;
}
.Page-title {
  text-align:center;
}
.highlight {
  background-color:rgba($primary,.5);
}
</style>


