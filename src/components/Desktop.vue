<template lang="pug">
  .wrapper
    .background
      .link-layer
        #projects.position-absolute
          h4
            a(href="#") projects
        #contact.position-absolute
          h4
            a.d-block(href="#") contact
            span.d-inline-block
              i.fab.fa-github
              i.fab.fa-linkedin
              i.fab.fa-instagram
      .foreground
        .center-profile.text-center
          img(src="../assets/logo.svg" alt="")
          h2 Hi, my name is Elliot Braem and I am a currently a
            |  senior at UW- Madison expecting to graduate 

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

  .center-profile
    max-width: 50%
    img
      max-height: 20vmin;

  .link-layer
    width: 100%
    height: 100vh

  #projects
    width: 30%
    position: absolute;
    left: 25%;
    top: 25%;
    transform: translate(-25%,-25%);

  #contact
    width: 30%
    position: absolute
    left: 75%
    top: 75%
    transform: translate(-75%,-75)

</style>
