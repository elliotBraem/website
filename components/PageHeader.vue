<template lang="pug">
  b-container.wrapper
    b-navbar(fixed="top" variant="faded" type="light")
      b-navbar-brand(href="/")
        b-img.logo(src="logo.svg")
      ContactList

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
    min-height: 5rem
</style>
