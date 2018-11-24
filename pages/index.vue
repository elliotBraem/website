<template lang="pug">
  div
    .background
      .link-layer
        #projects.position-absolute
          h4
            nuxt-link(to="/projects") projects
        #contact.position-absolute
          h4
            a.d-block(href="#") contact
            ContactList
      .foreground
        .center-profile.text-center
          img(src="logo.svg" alt="")
          h2 Hi, my name is Elliot Braem and I am a currently
            |  writing an Elevator Pitch to put here
</template>

<script>
import ContactList from '~/components/ContactList'

export default {
  layout: 'default',
  components: {
    ContactList
  }
}
</script>

<style lang="stylus" scoped>
  // .wrapper
  //   width: 100%
  //   // height: 100vh

  .background
  .foreground
    margin 0 auto

  .center-profile
  .link-layer
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%,-50%)

  .center-profile
    max-width: 50%
    img
      max-height: 20vmin
    h2
      font-size: 3vh

  .link-layer
    width: 100%
    height: 100vh

  #projects
    width: 30%
    position: absolute
    left: 20%
    top: 15%
    transform: translate(-20%,-15%)

  #contact
    width: 30%
    position: absolute
    left: 70%
    top: 80%
    transform: translate(-85%,-70)

  @media screen and (min-width: 426px)
    #projects
      left: 25%
      top: 25%
      transform: translate(-25%,-25%)

    #contact
      width: 25%
      left: 75%
      top: 75%
      transform: translate(-75%,-75)

</style>
