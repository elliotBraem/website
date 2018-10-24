<template lang="pug">
  div
    .portrait
      PortraitMode
    .landscape
      BusinessCard
    .desktop
      Homepage

</template>

<script>
import PortraitMode from '@/components/PortraitMode';
import BusinessCard from '@/components/BusinessCard';
import Homepage from '@/components/Homepage';


export default {
  components: {
    PortraitMode,
    BusinessCard,
    Homepage,
  },
};
</script>

<style lang="stylus" scoped>

  div
    height: 100%

  .portrait,
  .landscape
    display: none

  @media screen and (orientation:portrait) and (max-width: 426px)
    .portrait
      display: initial

    .landscape,
    .desktop
      display: none

  @media screen and (orientation:landscape) and (max-width: 830px)
    .landscape
      display: initial

    .portrait,
    .desktop
      display: none

// // Small devices (landscape phones, 420px and up)

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px)

</style>

