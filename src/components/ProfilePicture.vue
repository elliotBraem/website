<template lang="pug">
  .container-fluid
    img(src="https://via.placeholder.com/350x350")
    router-link(to='/resume')
      h5 Resume
</template>

<script>
export default {
  name: 'ProfilePicture',
};
</script>

<style lang="stylus" scoped>
img
  -webkit-box-shadow: 0px 5px 20px -8px rgba(0,0,0,0.75)
  -moz-box-shadow: 0px 5px 20px -8px rgba(0,0,0,0.75)
  box-shadow: 0px 5px 20px -8px rgba(0,0,0,0.75)
</style>

