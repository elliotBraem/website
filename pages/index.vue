<template lang="pug">
  .background
    .link-layer
      #projects.position-absolute
        h4
          nuxt-link(to="/projects" append).link projects
      #contact.position-absolute
        h4
          .d-block.link contact
          ContactList
    .foreground
      .center-profile.text-center
        img.logo(src="logo.svg" alt="")
        ElevatorPitch
</template>

<script>
import ContactList from '~/components/ContactList'
import ElevatorPitch from '~/components/ElevatorPitch'

export default {
  layout: 'default',
  components: {
    ContactList,
    ElevatorPitch
  }
}
</script>

<style lang="stylus" scoped>
  .background
    width: 100%
    height: 100vh

  .background
  .foreground
    margin 0 auto

  .link-layer
    width: 100%
    height: 100vh

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

  // .link
  //   -webkit-transition: transform 0.2s;
  //   transition: transform 0.2s;

  // .link::before
  //   position: absolute;
  //   top: 0;
  //   left: -10px;
  //   z-index: -1;
  //   box-sizing: content-box;
  //   padding: 0 10px;
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 5px;
  //   background-color: #F5F5F5;
  //   content: '';
  //   opacity: 0;
  //   -webkit-transition: transform 0.4s, opacity 0.3s;
  //   transition: transform 0.4s, opacity 0.3s;
  //   -webkit-transform: scale(0);
  //   transform: scale(0);

  // .link:hover::before
  //   opacity: 1;
  //   -webkit-transform: scale(1);
  //   transform: scale(1);

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
    .link
      color: #306BAC

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
