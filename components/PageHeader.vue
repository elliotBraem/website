<template lang="pug">
  div.wrapper
    b-navbar(variant="faded" type="light")
      b-navbar-brand
        nuxt-link(to="/")
          b-img.logo(src="/logo.svg")
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

<style scoped>
.logo {
  min-width: 4rem;
}

.wrapper {
  min-height: 10rem;
  max-width: 1024px;
  margin: auto;
}
</style>
