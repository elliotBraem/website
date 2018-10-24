<template lang="pug">
  .container
    p.text-center <br> ©2018 Elliot Braem, All Rights Reserved.
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<style lang="stylus" scoped>
  p
    font-size: .5rem
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px)
    .removeable
      display: none
</style>
