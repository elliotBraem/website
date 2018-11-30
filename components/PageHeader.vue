<template lang="pug">
  div.wrapper
    b-navbar(variant="faded" type="light")
      b-navbar-brand
        nuxt-link(to="/")
          b-img.logo(src="/website/logo.svg")
      h4
        ContactList.contact-list
</template>

<script>
import ContactList from '~/components/ContactList'

export default {
  name: 'PageHeader',
  components: {
    ContactList
  }
}
</script>

<style lang="stylus" scoped>
  .logo
    min-width: 4rem

  .wrapper
    min-height: 10rem
    max-width: 1024px
    margin: auto

  // /* Medium Devices, Desktops */
  // @media only screen and (min-width : 992px)
  //   .navbar
  //     position: fixed;
  //     top: 0;
  //     width: 100%;

</style>
