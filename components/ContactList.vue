<template lang="pug">
  span.d-inline-block
    no-ssr
      a(href="https://github.com/elliotBraem" target="_blank")
        font-awesome-icon.mr-2(:icon="['fab', 'github']")
    no-ssr
      a(href="https://www.linkedin.com/in/elliot-braem-91165a112/" target="_blank")
        font-awesome-icon.mr-2(:icon="['fab', 'linkedin']" target="_blank")
    no-ssr
      a(href="https://www.facebook.com/profile.php?id=100001352883257" target="_blank")
        font-awesome-icon.mr-2(:icon="['fab', 'facebook']" target="_blank")
    no-ssr
      a(href="https://www.instagram.com/efizzysnaps/")
        font-awesome-icon.mr-2(:icon="['fab', 'instagram']" target="_blank")
    no-ssr
      a(href="https://twitter.com/EFizzySnaps")
        font-awesome-icon.mr-2(:icon="['fab', 'twitter']" target="_blank")
</template>

<script>
export default {
  name: 'ContactList'
}
</script>

<style lang="stylus" scoped>
</style>
