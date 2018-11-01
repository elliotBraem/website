<template lang="pug">
  .wrapper
    .background
      .center-profile
        img(src="./assets/logo.svg" alt="")
        h2 Hi, I'm an elevator pitch
    .foreground
      .link-layer
        a projects
        a contact
</template>

<script>
export default {
  name: 'Desktop',
};
</script>

<style lang="stylus" scoped>
  .wrapper
    width = 100%
    height = 100vh
</style>
