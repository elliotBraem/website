<template lang="pug">
  //- div.bg-light
  //-   nav.navbar
  //-       a.pl-3.navbar-brand(href="#")
  //-         img.d-inline-block.align-top.logo(src="./assets/logo.svg" alt="")
  #app
    router-view
    footer
      PageFooter
</template>

<script>
import PageFooter from '@/components/PageFooter';

export default {
  name: 'App',
  components: {
    PageFooter,
  },
};
</script>

<style lang="stylus">
  #app
    font-family: 'Oxygen', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50

  .logo
    width: 140px

  footer
    position: absolute
    bottom: 0
    width: 100%
    margin-bottom: -10px
</style>
