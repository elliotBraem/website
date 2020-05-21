<template lang="pug">
  div.wrapper
    p.text-center ©{{currentYear}} Elliot Braem, All Rights Reserved.
</template>

<script>
export default {
  name: 'PageFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="stylus" scoped>
  p
    font-size: .5rem
</style>
