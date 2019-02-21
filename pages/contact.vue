<template>
  <div class="Intro">
    <ul class="Social">
      <li v-for="link in links">
        <a class="Button" :href="link.url" target="_blank">{{ link.title }}</a>
      </li>
    </ul>
    <h1 class="Page-title">drop me a line</h1>
    <form name="Contact" netlify-honeypot="bot-field" data-netlify="true">
      <div class="Form-row">
        <input name="name" type="text" placeholder="Name" required="">
      </div>
      <div class="Form-row">
        <input name="email" type="email" placeholder="Email" required="">
      </div>
      <div class="Form-row">
        <textarea name="message" placeholder="Message" required=""></textarea>
        <input name="bot-field" style="display:none;" />
      </div>
      <div class="Form-row">
        <button class="Button" type="submit">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  transition: 'layout',
  head () {
    return {
      title: 'Contact Will Anderson'
    }
  },
  data () {
    return {
      links: [
        { title: 'GitHub', url: 'https://github.com/andwilr' },
        { title: 'Stack Overflow', url: 'https://stackoverflow.com/users/3272906/willanderson' }
      ]
    }
  }
}
</script>

<style lang="scss">
.Intro {
  align-self:center;
  text-align:center;
}
.highlight {
  background-color:rgba($primary,.5);
}
input,
textarea {
  border:none;
  padding:1rem .5rem;
  background:none;
  border-bottom:2px solid rgba($black,.1);
  display:block;
  width:100%;
  + .Button {
    margin-top:1rem;
  }
  &:hover {
    border-bottom-color:$black;
  }
}
.Social {
  list-style:none;
  margin:0;
  padding:0;
  display:flex;
  justify-content:center;
  @media (min-width: #{$bp-horizontal-layout}) {
    display:none;
  }
  li + li {
    margin-left:1rem;
  }
}
.Form {
  &-row {
    + .Form-row {
      margin-top:1rem;
    }
  }
}
</style>


