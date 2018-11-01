<template lang="pug">
  .wrapper
    .background
      .link-layer
        #projects.position-absolute
          a projects
        #contact.position-absolute
          a contact
      .foreground
        .center-profile.text-center
          img(src="../assets/logo.svg" alt="")
          h2 This is the logo
          h2 Hi, I'm an elevator pitch

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

  .background
  .foreground
    margin 0 auto

  .center-profile
  .link-layer
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

  .link-layer
    min-width: 60%
    min-height: 60%

  #projects
    left: 0
    top: 15%

  #contact
    right: 0
    bottom: 15%

</style>
