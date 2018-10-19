<template lang="pug">
  div.bg-light
    nav.navbar
        a.pl-3.navbar-brand(href="#")
          img.d-inline-block.align-top.logo(src="./assets/logo.svg" alt="")
    #app
      router-view
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px

.logo
  width: 140px

</style>
